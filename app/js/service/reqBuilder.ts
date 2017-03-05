module calypso.Services {

    import Models = calypso.Models;

    let self: any;

    export class ReqBuilder {

        static $inject = [
            '_'
        ];

        constructor(private _: _.LoDashStatic) {
            self = this;
        }

        private defaultSearchReqData: Models.SearchReqData = {
            aq: '',
            searchHub: 'default',
            language: 'en',
            pipeline: 'default',
            firstResult: 0,
            numberOfResults: calypso.Const.Paging.DEFAULT_LIMIT,
            excerptLength: 200,
            filterField: null,
            enableDidYouMean: true,
            sortCriteria: 'fieldDescending',
            sortField: '@tpmillesime',
            queryFunctions: [],
            rankingFunctions: [],
            retrieveFirstSentences: true,
            timezone: 'America/New_York',
            enableDuplicateFiltering: false,
            enableCollaborativeRating: false
        };

        // Currently only accessing the SUBSTANCE API
        public getUri(searchReq: Models.SearchReq): string {
            return `${calypso.Const.API.SUBSTANCE_URI}`;
        }


        public getData(searchReq: Models.SearchReq): Models.SearchReqData {
            let data = angular.extend({}, self.defaultSearchReqData, {
                aq: self.getFilters(searchReq.filters),
                q: self.getMainSearch(searchReq.filters),
                sortField: `@${searchReq.sort.field}`,
                sortCriteria: searchReq.sort.dir,
                firstResult: searchReq.paging.offset,
                numberOfResults: searchReq.paging.limit
            });
            return data;
        }

        private getMainSearch(filters: Models.IuclidSubstanceFilter[]): string {
            return (<Models.IuclidSubstanceFilterOption>(self._.find(filters, {key: 'main-search'}) || {})).submitValue;
        }

        private getFilters(filters: Models.IuclidSubstanceFilter[]): string {
            let _formattedFilters: any = {};

            filters.forEach((filterCategory: any) => {
                if (angular.isArray(filterCategory) && filterCategory.length > 0) {
                    _formattedFilters[filterCategory[0].category] = filterCategory;
                } else {
                    _formattedFilters[filterCategory.category] = filterCategory;
                }
            });

            let _categories: string[] = Object.keys(_formattedFilters);
            return _categories.reduce((qp: any, category: string) => {
                if (category !== 'main-search') {
                    let filter: any = _formattedFilters[category];

                    if (angular.isArray(filter) && filter.length > 0) {
                        if (filter.length > 1) {
                            qp += `(@${category}==(`;
                            filter.forEach((option, i) => {
                                qp += option.submitValue;
                                qp += (i < (filter.length - 1)) ? ',' : '';
                            });
                            qp += '))';
                        } else {
                            qp += `(@${category}==${filter[0].submitValue})`;
                        }
                    } else {
                        qp += `(@${category}==${filter.submitValue})`;
                    }
                }

                return qp;
            }, '');
        }
    }

    angular.module('calypso.services').service('ReqBuilder', ReqBuilder);
}
