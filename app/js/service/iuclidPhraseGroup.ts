module calypso.Services {
    var self: any
    export class IuclidPhraseGroup {
        static $inject = [
            '$q',
            '$http'
        ];

        constructor(private $q: ng.IQService,
                    private $http: ng.IHttpService) {
            self = this;
        }

        public get(code: string) {
            let deferred = self.$q.defer();
            self.$http.get(`http://localhost:8080/iuclid6-ext/api/ext/v1/definition/phrasegroup/${code}/phrases`).then(function(result: any) {deferred.resolve(result) ;
            })
            .catch(function(result: any) {
                console.log('Error: ' + result);
            });
          return deferred.promise;
        }
    }
    angular.module('calypso.services').service('IuclidPhraseGroup', IuclidPhraseGroup);
}
