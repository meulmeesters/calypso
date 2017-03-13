module calypso.Services {

    import Models = calypso.Models;
    import Events = calypso.Const.Events;
    import API = calypso.Const.API;

    let self: any;

    export class Substances {
        static $inject = [
            '$window',
            '$q',
            '$http',
            'EventBus',
            'ReqBuilder'
        ];

        constructor(private $window: ng.IWindowService,
                    private $q: ng.IQService,
                    private $http: ng.IHttpService,
                    private EventBus: calypso.Services.EventBus,
                    private ReqBuilder: calypso.Services.ReqBuilder) {
            self = this;

            EventBus.subscribe(calypso.Const.Events.searchSubstances, self, self.performSearch);
        }

        public search() {
            self.performSearch({})
                .then((response: Models.SearchRes<Models.Substance>) => {
                    self.EventBus.publish(Events.loadSubstances, response);
                })
                .catch((e: any) => {
                    alert('Error: ' + JSON.stringify(e));
                });
        }

        private performSearch(searchReq: Models.SearchReq): ng.IPromise<Models.SearchRes<Models.Substance>> {
            let deferred = self.$q.defer();
            let URI = `${API.BASE_API_URI}/byType`;

            self.$http.get(URI, {
                    params: {
                        'doc.type': 'SUBSTANCE',
                        'l': 20,
                        'o': 0,
                        'count': true,
                        'formatter': 'iuclid6.DocumentSecuredRepresentation'
                    },
                    headers: {
                        'Accept': API.DEFAULT_ACCEPT_HEADER,
                        'iuclid6-user': 'SuperUser',
                        'iuclid6-pass': '%PASSWORD%'
                    }
                }).then((result: any) => {
                    deferred.resolve(result.data);
                }).catch((error: any) => {
                    deferred.reject(error);
                });

            return deferred.promise;
        }
    }

    angular.module('calypso.services').service('Substances', Substances);
}
