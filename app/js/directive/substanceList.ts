module calypso.Directives {

    import Events = calypso.Const.Events;
    import Templates = calypso.Const.Templates;
    import Models = calypso.Models;

    interface Scope extends ng.IScope {
        substances: Models.Substance[]
    }

    angular.module('calypso.directives').directive('substanceList', [
        '$window',
        'DB',
        'EventBus',
        'Substances',
        ($window: ng.IWindowService,
         DB: calypso.Services.DB,
         EventBus: calypso.Services.EventBus,
         Substances: calypso.Services.Substances) => {
            return {
                restrict: 'E',
                scope: {},
                templateUrl: Templates.SUBSTANCE_LIST_TPL,
                link: (scope: Scope) => {
                    scope.substances = DB.getSubstances();

                    if (scope.substances.length === 0) {
                        Substances.search();
                    }
                }
            }
        }
    ]);
}
