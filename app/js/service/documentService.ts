module calypso.Services {

    import API = calypso.Const.API;

    var self: any;

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
    }

    angular.module('calypso.services').service('DocumentService', DocumentService);
}