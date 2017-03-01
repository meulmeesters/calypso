module calypso.Services {
    var self: any;
    export class IuclidBoolean {
        static $inject = [
            '$q',
            '$http'
        ];

        constructor(private $q: ng.IQService,
                    private $http: ng.IHttpService) {
            self = this;
        }

        public get(value: string) {
            let deferred = self.$q.defer();
            // Something like this: self.$http.get(`/iuclid6-ext/api/ext/v1/definition/phrasegroup/${code}/phrases`).then(function(result) { deferred.resolve(result) });
            deferred.resolve([{"phrase":{"code":"61917","text":"change from individual to joint submission","description":"","open":false},"obsolete":false}]);
            return deferred.promise;
        }
    }

    angular.module('calypso.services').service('IuclidBoolean', IuclidBoolean);
}
