module calypso.Directives {

    import Events = calypso.Const.Events;
    import Templates = calypso.Const.Templates;

    interface Scope extends ng.IScope {
        data: {
            tree: calypso.Models.SideTree
        }
        loadNodeDocument: (node: calypso.Models.TreeNodeDocument) => void
    }

    angular.module('calypso.directives').directive('sideTree', [
        '$rootScope',
        'EventBus',
        'TreeService',
        ($rootScope: calypso.RootScope,
         EventBus: calypso.Services.EventBus,
         TreeService: calypso.Services.TreeService) => {
            return {
                restrict: 'E',
                scope: {},
                templateUrl: Templates.SIDE_TREE_TPL,
                link: (scope: Scope) => {
                    scope.data = {
                        tree: null
                    };

                    EventBus.subscribe(Events.loadSubmissionType, scope, (type: calypso.Models.SubmissionType) => {
                        $rootScope.loading = true;
                        TreeService.getTreeDefinition(type.identifier)
                            .then((tree: calypso.Models.SideTree) => {
                                scope.data.tree = tree;
                            })
                            .catch((e: any) => {
                                alert('Failed to Load Tree: ' + JSON.stringify(e));
                            })
                            .finally(() => {
                                $rootScope.loading = false;
                            });
                    });
                }
            }
        }
    ]);
}
