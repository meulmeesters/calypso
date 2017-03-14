module calypso.Directives {

    import Events = calypso.Const.Events;
    import Templates = calypso.Const.Templates;
    import Models = calypso.Models;

    interface Scope extends ng.IScope {
        entities: Models.Entity[]
        entityDocType: string
        entityDisplayName: string
        entityUrl: string
    }

    angular.module('calypso.directives').directive('entityList', [
        '$rootScope',
        '$state',
        'DB',
        'EventBus',
        'Entity',
        ($rootScope: RootScope,
         $state: angular.ui.IStateService,
         DB: calypso.Services.DB,
         EventBus: calypso.Services.EventBus,
         Entity: calypso.Services.Entity) => {
            return {
                restrict: 'E',
                scope: {},
                templateUrl: Templates.ENTITY_LIST_TPL,
                link: ($scope: Scope) => {
                    let docType = $state.current.data.docType;
                    $scope.entityDocType = docType;
                    $scope.entityDisplayName = $state.current.data.displayName;
                    $scope.entityUrl = $state.current.url;
                    $scope.entities = DB.getEntities(docType);

                    if ($scope.entities === undefined) {
                        $rootScope.loading = true;

                        Entity.performSearch({
                            docType: docType
                        }).then((response: Models.SearchRes<Models.Entity>) => {
                            response.docType = docType;
                            $scope.entities = response.results;
                            DB.setEntities(docType, $scope.entities);
                        }).catch((e: any) => {
                            console.error(`Error Searching for ${docType}: ${JSON.stringify(e)}`);
                        }).finally(() => {
                            $rootScope.loading = false;
                        });
                    }
                    else if ($scope.entities.length === 0) {
                        $rootScope.loading = true;

                        Entity.search(docType).then(() => {
                            $rootScope.loading = false;
                        });
                    }
                }
            }
        }
    ]);
}
