module calypso.Directives {

    import Events = calypso.Const.Events;
    import Templates = calypso.Const.Templates;

    interface Scope extends ng.IScope {
        state: {
            tree: calypso.Models.SideTree
        }
        props: {
            selectedCode: string
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
                    scope.state = {
                        tree: null
                    };

                    scope.props = {
                        selectedCode: null
                    };

                    EventBus.subscribe(Events.loadSubmissionType, scope, (type: calypso.Models.SubmissionType) => {
                        $rootScope.loading = true;
                        scope.props.selectedCode = null;
                        TreeService.getTreeDefinition(type.identifier)
                            .then((tree: calypso.Models.SideTree) => {
                                scope.state.tree = tree;
                            })
                            .catch((e: any) => {
                                alert('Failed to Load Tree: ' + JSON.stringify(e));
                            })
                            .finally(() => {
                                $rootScope.loading = false;
                            });
                    });

                    EventBus.subscribe(Events.loadDocument, scope, (code: string) => {
                        scope.props.selectedCode = code;
                    });
                }
            }
        }
    ]);
}
