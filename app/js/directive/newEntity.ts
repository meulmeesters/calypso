module calypso.Directives {

    import Templates = calypso.Const.Templates;
    import Events = calypso.Const.Events;

    interface StateParams extends angular.ui.IStateParamsService {
        entityType: string
    }

    angular.module('calypso.directives').directive('newEntity', [
        '$timeout',
        '$rootScope',
        '$parse',
        '$stateParams',
        'EventBus',
        'DB',
        ($timeout: ng.ITimeoutService,
         $rootScope: RootScope,
         $parse: ng.IParseService,
         $stateParams: StateParams,
         EventBus: calypso.Services.EventBus,
         DB: calypso.Services.DB) => {
            return {
                restrict: 'E',
                scope: {},
                templateUrl: Templates.NEW_ENTITY_TPL,
                link: () => {
                    $rootScope.overlay = false;

                    let entityContext = DB.getEntityContext();
                    EventBus.publish(Events.setTitle, `New ${$parse('displayName')(entityContext)}`);

                    if (entityContext) {
                        $timeout(() => {
                            EventBus.publish(Events.loadDocumentDefinition, entityContext.docType);
                        }, 50);
                    } else {
                        alert(`Unknown Entity Context: ${$stateParams.entityType}`);
                    }
                }
            }
        }
    ]);
}
