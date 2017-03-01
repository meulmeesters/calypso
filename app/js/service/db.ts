module calypso.Services {

    import Models = calypso.Models;

    var self: any;

    export interface Data {
        filters: {[key:string]: Models.IuclidSubstanceFilter}
        iuclidSubstances: Models.IuclidSubstance[]
        sort: Models.SearchSort
        paging: Models.SearchPaging
    }

    export class DB {
        static $inject = [
            '$parse',
            '_',
            'EventBus'
        ];

        constructor(private $parse: ng.IParseService,
                    private _: _.LoDashStatic,
                    private EventBus: calypso.Services.EventBus) {
            self = this;

            self._db = <Data>{
                filters: {},
                iuclidSubstances: [],
                sort: {
                    field: 'tpmillesime',
                    dir: calypso.Const.Filters.Sort.DESC
                },
                paging: {
                    offset: 0,
                    limit: calypso.Const.Paging.DEFAULT_LIMIT
                }
            };

            EventBus.subscribe(calypso.Const.Events.addFilter, self, self.addFilter);
            EventBus.subscribe(calypso.Const.Events.removeFilter, self, self.removeFilter);
            EventBus.subscribe(calypso.Const.Events.loadIuclidSubstances, self, self.loadIuclidSubstances);
        }
  

        private addFilter(option: Models.IuclidSubstanceFilterOption) {
            if (option) {
                if (option.multi) {
                    self._db.filters[option.category] = (self._db.filters[option.category] || []);
                    self._db.filters[option.category].push(option);
                } else {
                    self._db.filters[option.category] = option;
                }

                self.EventBus.publish(calypso.Const.Events.afterAddFilter, option);
                self.EventBus.publish(calypso.Const.Events.applyFilters);
            }
        }

        private removeFilter(option: Models.IuclidSubstanceFilterOption) {
            let filters = self._db.filters;

            if (filters && filters[option.category]) {
                if (option.multi) {
                    let options = <Models.IuclidSubstanceFilterOption[]>filters[option.category];
                    options.splice(_.findIndex(options, {key: option.key}), 1);

                    // If there are no more options selected remove the category
                    if (options.length === 0) {
                        delete filters[option.category];
                    }
                } else {
                    delete filters[option.category];
                }

                self.EventBus.publish(calypso.Const.Events.afterRemoveFilter, option);
                if (option.skipApply !== true) {
                    self.EventBus.publish(calypso.Const.Events.applyFilters);
                }
            }

            // TODO: This is not good but currently using calypso.Const.Filters as the src
            // for the iuclid-substance-filters component. It should use DB instead
            let idx = self._.findIndex(calypso.Const.Filters.IUCLID_SUBSTANCE_FILTERS, {category: option.category});
            let _filter = calypso.Const.Filters.IUCLID_SUBSTANCE_FILTERS[idx];

            if (_filter) {
                if (option.multi) {
                    idx = self._.findIndex(_filter.options, {key: option.key});

                    if (_filter.options[idx]) {
                        switch (_filter.type) {
                        case 'checkbox':
                            _filter.options[idx].value = false;
                            break;
                        }
                    }
                } else {
                    switch (_filter.type) {
                    case 'checkbox':
                        let _option = self._.find(_filter.options, {key: option.key}) || {};
                        _option.value = false;
                        break;
                    }
                }
            }
        }

        private loadIuclidSubstances (response: Models.SearchRes<Models.IuclidSubstance>) {
            let newIuclidSubstances = response.results;
            let iuclidSubstances = self.getIuclidSubstances();

            iuclidSubstances.splice(0, iuclidSubstances.length);
            iuclidSubstances.push.apply(iuclidSubstances, newIuclidSubstances);
        }

        private loadIuclidEndPointStudies (response: Models.SearchRes<Models.IuclidEndPointStudy>) {
            let newIuclidEndPointStudies = response.results;
            let iuclidEndPointStudies = self.getIuclidEndPointStudies();

            iuclidEndPointStudies.splice(0, iuclidEndPointStudies.length);
            iuclidEndPointStudies.push.apply(iuclidEndPointStudies, newIuclidEndPointStudies);
        }

        public getFilters() {
            return self.$parse('_db.filters')(self);
        }

        public getIuclidEndPointStudies() {
            return self.$parse('_db.iuclidEndPointStudies')(self);
        }

        public getIuclidSubstances() {
            return self.$parse('_db.iuclidSubstances')(self);
        }

        public getSorting(): Models.SearchSort {
            return self.$parse('_db.sort')(self);
        }

        public getPaging(): Models.SearchPaging {
            return self.$parse('_db.paging')(self);
        }

        public setPaging(paging: Models.SearchPaging) {
            self._db.paging = paging;
        }
    }

    angular.module('calypso.services').service('DB', DB);
}
