module calypso.Services {

    import API = calypso.Const.API;
    import DocumentDefinitionFilter = calypso.Models.DocumentDefinitionFilter;

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
            'Credentials',
            'DocumentFilter'
        ];

        constructor(private $q: ng.IQService,
                    private $http: ng.IHttpService,
                    private $timeout: ng.ITimeoutService,
                    private $parse: ng.IParseService,
                    private $stateParams: StateParams,
                    private DB: calypso.Services.DB,
                    private Credentials: calypso.Services.Credentials,
                    private DocumentFilter: calypso.Services.DocumentFilter) {
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

        public getDocumentSections(code: string, uuid: string): ng.IPromise<any> {
            let deferred = self.$q.defer();
            let URI = `${API.BASE_RAW_URI}/${code}/${uuid}/documents`;

            self.$http.get(URI, {
                params: {
                    'formatter': 'iuclid6.Document',
                    'l': '1000'
                },
                headers: {
                    'iuclid6-user': self.Credentials.getUser(),
                    'iuclid6-pass': self.Credentials.getPass(),
                    'Accept': API.DOCUMENT_CONTENT_TYPE_HEADER
                }
            }).then((result: any) => {
                deferred.resolve(result.data.results);
            }).catch((e: any) => {
                deferred.reject(e);
            });

            return deferred.promise;
        }

        public getDocumentData(entityType: string, documentKey: string, documentCode: string): ng.IPromise<Object> {
            let deferred = self.$q.defer();
            let URI = `${API.BASE_RAW_URI}/${entityType}/${documentKey}/document/${documentCode}`;

            self.$http.get(URI, {
                params: {
                    'formatter': 'iuclid6.Document'
                },
                headers: {
                    'iuclid6-user': self.Credentials.getUser(),
                    'iuclid6-pass': self.Credentials.getPass()
                }
            }).then((result: any) => {
                // TODO: We may have mutliple instances for a document section
                deferred.resolve(result.data.results[0]);
            }).catch((e: any) => {
                deferred.reject(e);
            });

            return deferred.promise;
        }

        public filter(definition: Models.DocumentDefinition) {
            let filters: DocumentDefinitionFilter = self.DocumentFilter.getDefinitionFilter();

            let traverse = function (contents: Models.DocumentContent[], path: string) {
                contents = contents.filter((content: Models.DocumentContent) => {
                    let currPath = path === '' ? content.name : `${path}.${content.name}`;
                    return filters.filter[currPath] !== true;
                });

                contents.forEach((content: Models.DocumentContent) => {
                    let currPath = path === '' ? content.name : `${path}.${content.name}`;

                    if (filters.replace[currPath]) {
                        let replaceInfo = filters.replace[currPath];
                        content[replaceInfo.attribute] = replaceInfo.value;
                    }

                    if (content.type === 'block') {
                        content.contents = traverse(content.contents, currPath);
                    }
                });

                return contents;
            };

            definition.contents = traverse(definition.contents, '');
        }

        public apply(definition: Models.DocumentDefinition, data: Object) {
            self.eachContent(definition.contents, (content: Models.DocumentContent, path: string) => {
                if (content.type !== 'block') {
                    let val = self.$parse(path)(data);
                    if (val) {
                        content.value = val;
                    }
                }
            });
        }

        public generateJsonDocumentEnvelope(document: Models.DocumentDefinition, documentData: any) {
            let context = self.DB.getEntityContext();
            let header: any = {};
            let body: any = document.contents.reduce(self.generateJsonBody, (documentData || {})) || {};

            if (context.sectionCode) {
                header.definition = context.sectionCode;
                if (context.sectionUuid) {
                    header.key = context.sectionUuid;
                }
            }
            else {
                header.definition = context.docType;
                if (self.$stateParams.entityKey) {
                    header.key = self.$stateParams.entityKey;
                }
            }

            // TODO: Make this dynamic somehow
            // The OwnerLegalEntity is necessary to create a Substance
            // Currently I'm hard coding it to the default Legal Entity
            // when the context requires legal
            // But I guess this should be chosen somehow.
            if ((context.sectionCode === context.docType || context.sectionCode === false) && context.legal) {
                body['OwnerLegalEntity'] = '4f88bc7f-395c-4d0b-997b-14e8c9aef605/0';
            }

            return [header, body];
        }

        public delete(entityCode: string, entityUuid: string, sectionCode?: string|boolean, sectionUuid?: string) {
            let deferred = self.$q.defer();

            let URI = `${API.BASE_RAW_URI}/${entityCode}/${entityUuid}`;
            if (sectionCode && sectionUuid) {
                URI += `/document/${sectionCode}/${sectionUuid}`;
            }

            let requestConfig: ng.IRequestConfig = {
                url: URI,
                method: 'DELETE',
                headers: {
                    'iuclid6-user': self.Credentials.getUser(),
                    'iuclid6-pass': self.Credentials.getPass()
                }
            };

            self.$http(requestConfig)
                .then((result: any) => {
                    deferred.resolve(result.data);
                })
                .catch((e: any) => {
                    deferred.reject(e);
                });

            return deferred.promise;
        }

        public save(jsonDocumentEnvelope: any) {
            let deferred = self.$q.defer();
            let context = self.DB.getEntityContext();
            let entityUuid = self.$stateParams.entityKey;
            let header = <Models.JsonDocumentEnvelopeHeader> jsonDocumentEnvelope[0];

            if (header && header.definition) {
                let URI;
                if (context.sectionCode) {
                    URI = context.sectionUuid ? `${API.BASE_RAW_URI}/${context.docType}/${entityUuid}/document/${context.sectionCode}/${context.sectionUuid}`:
                                                `${API.BASE_RAW_URI}/${context.docType}/${entityUuid}/document/${context.sectionCode}`
                }
                else {
                    URI = header.key ? `${API.BASE_RAW_URI}/${context.docType}/${header.key}` :
                                        `${API.BASE_RAW_URI}/${context.docType}`;
                }

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

        private generateJsonBody(json: any, content: Models.DocumentContent) {
            json = json || {};

            switch(content.type) {
                case 'block': {
                    json[content.name] = content.contents.reduce(self.generateJsonBody, {});
                    break;
                }
                // Same parser for text and boolean
                case 'boolean' :
                case 'text': {
                    if (content.value) {
                        json[content.name] = content.value;
                    }
                    break;
                }
            }

            // cleanup empty objects
            Object.keys(json).forEach((key: string) => {
                if (json[key] === undefined) {
                    delete json[key];
                }
            });

            return Object.keys(json).length > 0 ? json : undefined;
        }

        private eachContent(contents: Models.DocumentContent[], cb: (content: Models.DocumentContent, path: string) => void) {
            let traverse = function (contents: Models.DocumentContent[], path: string) {
                contents.forEach((content: Models.DocumentContent, idx: number) => {
                    let currPath = path === '' ? content.name : `${path}.${content.name}`;

                    cb(content, currPath);
                    if (content.type === 'block') {
                        traverse(content.contents, currPath);
                    }
                });
            };

            traverse(contents, '');
        }

        private deleteAttr(obj: any, path: string) {
            let partials = path.split('.');
            let attrKey = partials.pop();
            let parentPath = partials.join('.');
            let parent = self.$parse(parentPath)(obj);

            delete parent[attrKey];
        }
    }

    angular.module('calypso.services').service('DocumentService', DocumentService);
}