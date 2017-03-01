module calypso.Services {

    import Models = calypso.Models;

    var self: any;

    export class IuclidSubstanceFilter {
        static $inject = [
            '$rootScope',
            'EventBus',
            'DB',
            'IuclidSubstance'
        ];

        constructor(private $rootScope: ng.IScope,
                    private EventBus: calypso.Services.EventBus,
                    private DB: calypso.Services.DB,
                    private IuclidSubstance: calypso.Services.IuclidSubstance) {
            self = this;

            EventBus.subscribe(calypso.Const.Events.applyFilters, self, self.applyFilters);
            EventBus.subscribe(calypso.Const.Events.performSearch, self, self.performSearch);
        }

        private buildSearchReq(): Models.SearchReq {
            let filters = self.DB.getFilters();
            let searchFilters: Models.SearchFilter[] = Object.keys(filters).map((key: string) => {
                return filters[key];
            });

            return <Models.SearchReq>{
                filters: searchFilters,
                sort: self.DB.getSorting(),
                paging: self.DB.getPaging()
            };
        }

        private performSearch() {
            self.$rootScope.loading = true;
            self.IuclidSubstance.search(self.buildSearchReq())
                .then((searchRes: Models.SearchRes<Models.IuclidSubstance>) => {
                    self.EventBus.publish(calypso.Const.Events.loadIuclidSubstances, searchRes);
                    self.$rootScope.loading = false;
                })
                .catch((error: any) => {
                    alert('Error searching for Iuclid Substances');
                    self.$rootScope.loading = false;
                });
        }

        public applyFilters() {
            self.performSearch();
        }
    }

    angular.module('calypso.services').service('IuclidSubstanceFilter', IuclidSubstanceFilter);
}
