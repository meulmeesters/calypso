module calypso.Directives {

    import Templates = calypso.Const.Templates;
    import Models = calypso.Models;

    interface Scope extends ng.IScope {}

    angular.module('calypso.directives').directive('searchBar', [
        'EventBus',
        'IuclidSubstanceFilter',
        (EventBus: calypso.Services.EventBus,
         Filter: calypso.Services.IuclidSubstanceFilter) => {
            return {
                restrict: 'E',
                scope: {},
                templateUrl: Templates.SEARCH_BAR_TPL,
                link: (scope: Scope, element: ng.IAugmentedJQuery) => {
                    //run an initial blank search
                    // EventBus.publish(calypso.Const.Events.applyFilters);

                    let mainSearchInput = element.find('input');

                    mainSearchInput.bind('keydown', (event: any) => {
                        debugger;
                        if (event.which === 13) {
                            let searchTerm = mainSearchInput.val();

                            EventBus.publish(calypso.Const.Events.addFilter, <Models.IuclidSubstanceFilterOption>{
                                category: 'main-search',
                                key: 'main-search',
                                label: '',
                                bcDisplay: searchTerm,
                                multi: false,
                                value: searchTerm,
                                submitValue: searchTerm
                            });

                            mainSearchInput.val('');
                        }
                    });
                }
            }
        }
    ]);
}
