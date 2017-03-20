module calypso.Directives {

    import Templates = calypso.Const.Templates;
    import Events = calypso.Const.Events;

    interface StateParams extends angular.ui.IStateParamsService {
        entityType: string
        entityKey: string
        snapshot: string
    }

    interface Scope extends ng.IScope {
        state: {
            documentData: Object
        }
    }

    angular.module('calypso.directives').directive('editEntity', [
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
                templateUrl: Templates.EDIT_ENTITY_TPL,
                link: ($scope: Scope) => {
                    let entityContext = DB.getEntityContext();

                    $rootScope.loading = true;
                    $scope.state = {
                        documentData: null
                    };

                    EventBus.publish(Events.setTitle, `Editing ${$parse('displayName')(entityContext)}`);

                    DocumentService.getDocumentData(entityContext.docType, $stateParams.entityKey)
                        .then((documentData: any) => {
                            $scope.state.documentData = documentData.results[0].representation;
                        })
                        .catch((e: any) => {
                            console.error(`Failed to get document data: ${JSON.stringify(e)}`);
                            $scope.state.documentData = {};
                        })
                        .finally(() => {
                            EventBus.publish(Events.loadDocumentDefinition, entityContext.docType);
                        });
                }
            }
        }
    ]);
}
