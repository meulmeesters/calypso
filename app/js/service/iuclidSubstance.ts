module calypso.Services {

    import Models = calypso.Models;

    let self: any;

    export class IuclidSubstance {
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

            EventBus.subscribe(calypso.Const.Events.performSearch, self, self.performSearch);
        }

        public search(searchReq: Models.SearchReq): ng.IPromise<Models.SearchRes<Models.IuclidSubstance>> {
            let deferred = self.$q.defer();

            let uri = self.ReqBuilder.getUri(searchReq) + '/raw/SUBSTANCE/8082ace8-26b8-4800-914f-5c44988ebebc';
            console.log("The Substance uri is "+ uri);
            let data = self.ReqBuilder.getData(searchReq);
            console.log("The Data is "+ data);

            var config = {headers: {'accept': 'application/vnd.iuclid6.ext+json; type=iuclid6.Document',
                                    'iuclid6-user': 'SuperUser',
                                    'iuclid6-pass': 'root'}
                         }

            self.$http.get(uri,config,data)
                .then((result: any) => {
                    var modifiedResult: calypso.Models.SearchRes<calypso.Models.IuclidSubstance> = {
                        totalCount: result.data.length,
                        results: result.data
                    };
                    self.enrich(modifiedResult);
                    deferred.resolve(modifiedResult);
                })
                .catch((error: any) => {
                    deferred.reject(error);
                });

            return deferred.promise;

        }


        public enrich(searchRes: Models.SearchRes<Models.IuclidSubstance>) {
            let favoritesKey = calypso.Const.LocalStorage.FAVORITE_IUCLID_SUBSTANCES;
            let favoritesStr = self.$window.localStorage.getItem(favoritesKey);
            let favorites = (favoritesStr) ? JSON.parse(favoritesStr) : {};

            //var substance = JSON.parse(searchRes);
            //console.log(substance);
            console.log(JSON.stringify(searchRes));

            searchRes.results.forEach((iuclidSubstance: Models.IuclidSubstance) => {
                iuclidSubstance._favorite = (favorites[iuclidSubstance.key]) ? true : false;
                console.log(iuclidSubstance.name);
                // use HTTPS urls for the image thumbnails
                // iuclidSubstance.raw.tpthumbnailuri = iuclidSubstance.raw.tpthumbnailuri.replace('http', 'https');
            });
        }
    }

    angular.module('calypso.services').service('IuclidSubstance', IuclidSubstance);
}
