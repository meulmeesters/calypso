module calypso.Directives {

    import Templates = calypso.Const.Templates;
    import Events = calypso.Const.Events;
    import DocumentService = calypso.Services.DocumentService;

    interface StateParams extends angular.ui.IStateParamsService {
        entityType: string
    }

    interface Scope extends ng.IScope {
        state: {
            document: Models.DocumentDefinition
        }
    }

    angular.module('calypso.directives').directive('newEntity', [
        '$timeout',
        '$rootScope',
        '$parse',
        '$stateParams',
        'EventBus',
        'DB',
        'DocumentService',
        ($timeout: ng.ITimeoutService,
         $rootScope: RootScope,
         $parse: ng.IParseService,
         $stateParams: StateParams,
         EventBus: calypso.Services.EventBus,
         DB: calypso.Services.DB,
         DocumentService: calypso.Services.DocumentService) => {
            return {
                restrict: 'E',
                scope: {},
                templateUrl: Templates.NEW_ENTITY_TPL,
                link: ($scope: Scope) => {
                    $rootScope.overlay = false;
                    $scope.state = {
                        document: null
                    };

                    let entityContext = DB.getEntityContext();
                    EventBus.publish(Events.setTitle, `New ${$parse('displayName')(entityContext)}`);

                    if (entityContext) {
                        $timeout(() => {
                            entityContext.sectionCode = false;
                            DB.setEntityContext(entityContext);
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
