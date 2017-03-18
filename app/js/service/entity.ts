module calypso.Services {

    import Models = calypso.Models;
    import Events = calypso.Const.Events;
    import API = calypso.Const.API;

    let self: any;

    export class Entity {
        static $inject = [
            '$window',
            '$q',
            '$http',
            'EventBus',
            'Credentials',
            'ReqBuilder'
        ];

        constructor(private $window: ng.IWindowService,
                    private $q: ng.IQService,
                    private $http: ng.IHttpService,
                    private EventBus: calypso.Services.EventBus,
                    private Credentials: calypso.Services.Credentials,
                    private ReqBuilder: calypso.Services.ReqBuilder) {
            self = this;

            EventBus.subscribe(calypso.Const.Events.searchSubstances, self, self.performSearch);
        }

        public search(docType: string): ng.IPromise<void> {
            let deferred = self.$q.defer();

            self.performSearch({
                docType: docType
            }).then((response: Models.SearchRes<Models.Entity>) => {
                response.docType = docType;
                self.EventBus.publish(Events.loadSubstances, response);
            }).catch((e: any) => {
                alert('Error: ' + JSON.stringify(e));
            }).finally(() => {
                deferred.resolve();
            });

            return deferred.promise;
        }

        public performSearch(searchReq: Models.SearchReq): ng.IPromise<Models.SearchRes<Models.Entity>> {
            let deferred = self.$q.defer();
            let URI = `${API.BASE_API_URI}/byType`;

            self.$http.get(URI, {
                    params: {
                        'doc.type': searchReq.docType,
                        'l': 20,
                        'o': 0,
                        'count': true,
                        'order': 'modified-',
                        'formatter': 'iuclid6.DocumentSecuredRepresentation'
                    },
                    headers: {
                        'Accept': API.DEFAULT_ACCEPT_HEADER,
                        'iuclid6-user': self.Credentials.getUser(),
                        'iuclid6-pass': self.Credentials.getPass()
                    }
                }).then((result: any) => {
                    deferred.resolve(result.data);
                }).catch((error: any) => {
                    deferred.reject(error);
                });

            return deferred.promise;
        }

        public deleteEntity(entity: Models.Entity): ng.IPromise<void> {
            let deferred = self.$q.defer();
            let entityType = entity.representation.definition;
            let entityUuid = entity.representation.key.split('/')[0];
            let URI = `${API.BASE_RAW_URI}/${entityType}/${entityUuid}`;

            self.$http.delete(URI, {
                headers: {
                    'iuclid6-user': self.Credentials.getUser(),
                    'iuclid6-pass': self.Credentials.getPass()
                }
            }).then(() => {
                deferred.resolve();
            }).catch((e: any) => {
                deferred.reject(e);
            });

            return deferred.promise;
        }
    }

    angular.module('calypso.services').service('Entity', Entity);
}
