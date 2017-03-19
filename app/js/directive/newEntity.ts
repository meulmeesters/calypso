module calypso.Directives {

    import Templates = calypso.Const.Templates;
    import Events = calypso.Const.Events;
    import DocumentService = calypso.Services.DocumentService;

    interface StateParams extends angular.ui.IStateParamsService {
        entityType: string
    }

    interface Scope extends ng.IScope {
        state: {
            document: Models.Document
        }
    }

    angular.module('calypso.directives').directive('newEntity', [
        '$rootScope',
        '$parse',
        '$stateParams',
        'EventBus',
        'DB',
        'DocumentService',
        ($rootScope: RootScope,
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
                    $rootScope.loading = true;
                    $scope.state = {
                        document: null
                    };

                    let entityContext = DB.getEntityContext();
                    EventBus.publish(Events.setTitle, `New ${$parse('displayName')(entityContext)}`);

                    if (entityContext) {
                        DocumentService.getDocumentDefinition(entityContext.docType)
                            .then((document: Models.Document) => {
                                $scope.state.document = document;
                            })
                            .catch((e: any) => {
                                alert(`Failed to retrieve Document: ${JSON.stringify(e)}`);
                            })
                            .finally(() => {
                                $rootScope.loading = false;
                            });

                    } else {
                        alert(`Unknown Entity Context: ${$stateParams.entityType}`);
                    }
                }
            }
        }
    ]);
}
