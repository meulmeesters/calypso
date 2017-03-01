module calypso.Directives {

    import Templates = calypso.Const.Templates;

    interface Scope extends ng.IScope {
        filters: any
    }

    angular.module('calypso.directives').directive('sideFilter', [
        () => {
            return {
                restrict: 'E',
                scope: {
                    filters: '='
                },
                templateUrl: Templates.SIDE_FILTER_TPL,
                link: (scope: Scope) => {
                    console.log('FILTERS:' + scope.filters);
                        scope.filters = calypso.Const.Filters.IUCLID_SUBSTANCE_FILTERS;
                }
            }
        }
    ]);
}
