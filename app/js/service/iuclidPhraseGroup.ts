module calypso.Services {

    import API = calypso.Const.API;

    var self: any;

    export class IuclidPhraseGroup {
        static $inject = [
            '$q',
            '$http'
        ];

        constructor(private $q: ng.IQService,
                    private $http: ng.IHttpService) {
            self = this;
        }

        private _cache: any = {};

        public get(code: string) {
            let deferred = self.$q.defer();
            let URI = `${API.BASE_DEFINITIONS_URI}/phrasegroup/${code}/phrases`;

            if (self._cache[code]) {
                deferred.resolve(self._cache[code]);
            } else {
                self.$http.get(URI)
                    .then(function (result: any) {
                        self._cache[code] = result.data;
                        deferred.resolve(result.data);
                    })
                    .catch(function (result: any) {
                        console.error('Error: ' + result);
                    });
            }

            return deferred.promise;
        }
    }

    angular.module('calypso.services').service('IuclidPhraseGroup', IuclidPhraseGroup);
}
