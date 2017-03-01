module calypso.Directives {

    import Templates = calypso.Const.Templates;
    import Models = calypso.Models;

    interface Scope extends ng.IScope {
        itemCount: number
        totalItemCount: number
        crumbs: Models.IuclidSubstanceFilterOption[]
        removeCrumb: (crumb: Models.IuclidSubstanceFilterOption) => void
        removeAll: () => void
    }

    angular.module('calypso.directives').directive('breadCrumbs', [
        'EventBus',
        (EventBus: calypso.Services.EventBus) => {
            return {
                restrict: 'E',
                scope: {},
                templateUrl: Templates.BREADCRUMB_TPL,
                link: (scope: Scope) => {
                    scope.itemCount = 0;
                    scope.totalItemCount = 0;
                    scope.crumbs = [];

                    scope.removeCrumb = (crumb: Models.IuclidSubstanceFilterOption) => {
                        EventBus.publish(calypso.Const.Events.removeFilter, crumb);
                    };

                    scope.removeAll = () => {
                        let crumbs = angular.copy(scope.crumbs);

                        crumbs.forEach((crumb) => {
                            crumb.skipApply = true;
                            EventBus.publish(calypso.Const.Events.removeFilter, crumb);
                        });

                        EventBus.publish(calypso.Const.Events.applyFilters);
                    };

                    EventBus.subscribe(calypso.Const.Events.addFilter, scope, (option: Models.IuclidSubstanceFilterOption) => {
                        let idx = _.findIndex(scope.crumbs, {key: option.key});

                        if (idx > -1) {
                            scope.crumbs.splice(idx, 1);
                        }

                        if (option.bcDisplay !== false) {
                            scope.crumbs.push(option);
                        }
                    });

                    EventBus.subscribe(calypso.Const.Events.removeFilter, scope, (option: Models.IuclidSubstanceFilterOption) => {
                        scope.crumbs.splice(_.findIndex(scope.crumbs, {key: option.key}), 1);
                    });

                    EventBus.subscribe(calypso.Const.Events.loadIuclidSubstances, scope, (response: Models.SearchRes<Models.IuclidSubstance>) => {
                        //scope.itemCount = response.results.length;
                        scope.totalItemCount = response.totalCount;
                    });
                }
            }
        }
    ]);
}
