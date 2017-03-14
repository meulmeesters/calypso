module calypso.Services {

    import API = calypso.Const.API;

    let self: any;

    export class DocumentService {
        static $inject = [
            '$q',
            '$http',
            '$timeout'
        ];

        constructor(private $q: ng.IQService,
                    private $http: ng.IHttpService,
                    private $timeout: ng.ITimeoutService) {
            self = this;
        }

        private _cache: any = {};

        public getDocumentDefinition(code: string) {
            let deferred = self.$q.defer();
            let URI = `${API.BASE_DEFINITIONS_URI}/document/${code}`;

            if (self._cache[code]) {
                self.$timeout(() => {
                    deferred.resolve(self._cache[code]);
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
                    self._cache[code] = result.data;
                    deferred.resolve(result.data);
                }).catch((e: any) => {
                    alert('Failed to Get Document Definition: ' + JSON.stringify(e));
                });
            }

            return deferred.promise;
        }

        public generateJsonDocumentEnvelope(document: Models.Document) {
            let header = {
                definition: "SUBSTANCE",
                name: "A demo sbustance reference"
            };
            let body = document.contents.reduce(DocumentService.generateJsonBody, {});

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

        public saveDocument(jsonDocumentEnvelope: any) {
            let deferred = self.$q.defer();
            let header = <Models.JsonDocumentEnvelopeHeader> jsonDocumentEnvelope[0];

            if (header && header.definition) {
                let URI = `${API.BASE_RAW_URI}/${header.definition}`;

                self.$http.post(URI, jsonDocumentEnvelope, {
                    headers: {
                        'Content-Type': API.DOCUMENT_CONTENT_TYPE_HEADER,
                        'iuclid6-user': 'SuperUser',
                        'iuclid6-pass': '%PASSWORD%',
                        '_c': new Date().getTime()
                    }
                }).then((result: any) => {
                    console.log(result);
                }).catch((e: any) => {
                    console.log('Error: ' + JSON.stringify(e));
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