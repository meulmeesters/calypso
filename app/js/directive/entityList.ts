module calypso.Directives {

    import Events = calypso.Const.Events;
    import Templates = calypso.Const.Templates;
    import Models = calypso.Models;
    import DocumentService = calypso.Services.DocumentService;

    interface Scope extends ng.IScope {
        entities: Models.Entity[]
        entityDocType: string
        entityDisplayName: string
        entityUrl: string
        entitySearchSubscription?: string
        refresh: () => void
        deleteEntity: (entity: Models.Entity, idx: number) => void
    }

    angular.module('calypso.directives').directive('entityList', [
        '$rootScope',
        '$timeout',
        '$state',
        'DB',
        'EventBus',
        'Entity',
        ($rootScope: RootScope,
         $timeout: ng.ITimeoutService,
         $state: angular.ui.IStateService,
         DB: calypso.Services.DB,
         EventBus: calypso.Services.EventBus,
         Entity: calypso.Services.Entity) => {
            return {
                restrict: 'E',
                scope: {},
                templateUrl: Templates.ENTITY_LIST_TPL,
                link: ($scope: Scope) => {
                    let context = DB.getEntityContext();
                    let docType = $state.current.data.docType;
                    $scope.entityDocType = docType;
                    $scope.entityDisplayName = $state.current.data.displayName;
                    $scope.entityUrl = $state.current.url;
                    $scope.entities = DB.getEntities(docType);

                    let search = function() {
                        $rootScope.loading = true;

                        Entity.performSearch({
                            docType: docType
                        }).then((response: Models.SearchRes<Models.Entity>) => {
                            response.docType = docType;
                            if (angular.isArray($scope.entities)) {
                                $scope.entities.splice(0, $scope.entities.length);
                                $scope.entities.push.apply($scope.entities, response.results);
                            }
                            else {
                                $scope.entities = response.results;
                                DB.setEntities(docType, $scope.entities);
                            }
                        }).catch((e: any) => {
                            console.error(`Error Searching for ${docType}: ${JSON.stringify(e)}`);
                        }).finally(() => {
                            $rootScope.loading = false;
                        });
                    };

                    $scope.refresh = search;

                    $scope.deleteEntity = (entity: Models.Entity, idx: number) => {
                        if (docType === 'LEGAL_ENTITY') {
                            alert('Preventing Deletion of Legal Entities - This is necessary for creating Substances');
                        }
                        else {
                            $rootScope.loading = true;

                            Entity.deleteEntity(entity)
                                .then(() => {
                                    $scope.entities.splice(idx, 1);
                                })
                                .catch((e: any) => {
                                    console.error(`Error Deleting Entity: ${JSON.stringify(e)}`);
                                })
                                .finally(() => {
                                    $rootScope.loading = false;
                                });
                        }
                    };

                    search();
                }
            }
        }
    ]);
}
