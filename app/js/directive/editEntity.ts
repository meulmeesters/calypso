module calypso.Directives {

    import Templates = calypso.Const.Templates;
    import Events = calypso.Const.Events;

    interface StateParams extends angular.ui.IStateParamsService {
        entityType: string
        entityKey: string
    }

    interface Scope extends ng.IScope {
        state: {
            document: Models.Document
        }
    }

    angular.module('calypso.directives').directive('editEntity', [
        '$rootScope',
        '$parse',
        '$stateParams',
        'EventBus',
        'DB',
        ($rootScope: RootScope,
         $parse: ng.IParseService,
         $stateParams: StateParams,
         EventBus: calypso.Services.EventBus,
         DB: calypso.Services.DB) => {
            return {
                restrict: 'E',
                scope: {},
                templateUrl: Templates.EDIT_ENTITY_TPL,
                link: ($scope: Scope) => {
                    $rootScope.overlay = false;
                    $rootScope.loading = false; // TODO: true - and load Document
                    $scope.state = {
                        document: null
                    };

                    let entityContext = DB.getEntityContext();
                    EventBus.publish(Events.setTitle, `Editing ${$parse('displayName')(entityContext)}`);
                }
            }
        }
    ]);
}
