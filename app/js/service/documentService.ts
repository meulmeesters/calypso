module calypso.Services {

    import API = calypso.Const.API;

    interface StateParams extends angular.ui.IStateParamsService {
        entityKey: string
    }

    let self: any;

    export class DocumentService {
        static $inject = [
            '$q',
            '$http',
            '$timeout',
            '$parse',
            '$stateParams',
            'DB',
            'Credentials'
        ];

        constructor(private $q: ng.IQService,
                    private $http: ng.IHttpService,
                    private $timeout: ng.ITimeoutService,
                    private $parse: ng.IParseService,
                    private $stateParams: StateParams,
                    private DB: calypso.Services.DB,
                    private Credentials: calypso.Services.Credentials) {
            self = this;
        }

        private _cache: any = {};

        public getDocumentDefinition(code: string): ng.IPromise<Models.DocumentDefinition> {
            let deferred = self.$q.defer();
            let URI = `${API.BASE_DEFINITIONS_URI}/document/${code}`;

            if (self._cache[code]) {
                self.$timeout(() => {
                    deferred.resolve(angular.copy(self._cache[code]));
                }, 50);
            } else {
                self.$http.get(URI, {
                    /**
                     * Weirdly enough some of the document definition endpoints will not return
                     * a JSON Object unless we ensure that the request is unique (I think there's
                     * some caching taking place in GlassFish. Either way adding a query parameter
                     * with the current timestamp will make it unique. And we can handle
                     * caching within the service
                     */
                    params: { '_c': new Date().getTime() },
                    headers: { 'Accept': API.DEFINITION_ACCEPT_HEADER },
                }).then((result: any) => {
                    self._cache[code] = angular.copy(result.data);
                    deferred.resolve(result.data);
                }).catch((e: any) => {
                    alert('Failed to Get Document Definition: ' + JSON.stringify(e));
                    deferred.reject(e);
                });
            }

            return deferred.promise;
        }

        public getDocumentData(entityType: string, documentKey: string): ng.IPromise<Object> {
            let deferred = self.$q.defer();
            let URI = `${API.BASE_RAW_URI}/${entityType}/${documentKey}/documents`;

            self.$http.get(URI, {
                params: {
                    'formatter': 'iuclid6.Document'
                },
                headers: {
                    'iuclid6-user': self.Credentials.getUser(),
                    'iuclid6-pass': self.Credentials.getPass()
                }
            }).then((result: any) => {
                deferred.resolve(result.data);
            }).catch((e: any) => {
                deferred.reject(e);
            });

            return deferred.promise;
        }

        public apply(definition: Models.DocumentDefinition, data: Object) {
            let traverse = function(contents: Models.DocumentContent[], path: string) {
                contents.forEach((content: Models.DocumentContent) => {
                    let currPath = path === '' ? content.name : `${path}.${content.name}`;

                    if (content.type === 'block') {
                        traverse(content.contents, currPath);
                    }
                    else {
                        try {
                            let val = self.$parse(currPath)(data);
                            if (val) {
                                content.value = val;
                            }
                        } catch(e) {
                            console.warn(`Failed to parse content: ${JSON.stringify(content)}`);
                        }
                    }
                });
            };

            traverse(definition.contents, '');
        }

        public generateJsonDocumentEnvelope(document: Models.DocumentDefinition, documentData: any) {
            let context = self.DB.getEntityContext();
            let header: any = {
                definition: context.docType
            };
            let body = document.contents.reduce(DocumentService.generateJsonBody, (documentData || {})) || {};

            if (self.$stateParams.entityKey) {
                header.key = self.$stateParams.entityKey;
            }

            // TODO: Make this dynamic somehow
            // The OwnerLegalEntity is necessary to create a Substance
            // Currently I'm hard coding it to the default Legal Entity
            // But I guess this should be chosen somehow.
            if (context.legal) {
                body['OwnerLegalEntity'] = '4f88bc7f-395c-4d0b-997b-14e8c9aef605/0';
            }

            return [header, body];
        }

        static generateJsonBody(json: any, content: Models.DocumentContent) {
            json = json || {};

            switch(content.type) {
                case 'block':
                    json[content.name] = content.contents.reduce(DocumentService.generateJsonBody, {});
                    break;
                case 'text':
                    if (content.value) {
                        json[content.name] = content.value;
                    }
                    break;
            }

            Object.keys(json).forEach((key: string) => {
                if (json[key] === undefined) {
                    delete json[key];
                }
            });

            return Object.keys(json).length > 0 ? json : undefined;
        }

        public save(jsonDocumentEnvelope: any) {
            let deferred = self.$q.defer();
            let header = <Models.JsonDocumentEnvelopeHeader> jsonDocumentEnvelope[0];

            if (header && header.definition) {
                let URI = header.key ? `${API.BASE_RAW_URI}/${header.definition}/${header.key}` :
                                        `${API.BASE_RAW_URI}/${header.definition}`;
                let requestConfig: ng.IRequestConfig = {
                    url: URI,
                    method: header.key ? 'PUT' : 'POST',
                    data: jsonDocumentEnvelope,
                    headers: {
                        'Content-Type': API.DOCUMENT_CONTENT_TYPE_HEADER,
                        'iuclid6-user': self.Credentials.getUser(),
                        'iuclid6-pass': self.Credentials.getPass()
                    }
                };

                self.$http(requestConfig)
                    .then((result: any) => {
                        deferred.resolve(result.data);
                    }).catch((e: any) => {
                        deferred.reject(e);
                    });
            }
            else {
                deferred.reject('Invalid jsonDocumentEnvelope');
            }

            return deferred.promise;
        }
    }

    angular.module('calypso.services').service('DocumentService', DocumentService);
}