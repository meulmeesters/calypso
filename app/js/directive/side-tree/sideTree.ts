module calypso.Directives {

    import Events = calypso.Const.Events;
    import Templates = calypso.Const.Templates;
    import LoDashStatic = _.LoDashStatic;

    interface Scope extends ng.IScope {
        state: {
            filter: string
            tree: calypso.Models.SideTree
            treeDisplay: calypso.Models.SideTree
        }
        props: {
            selectedCode: string
        }
        filter: () => void
        loadNodeDocument: (node: calypso.Models.TreeNodeDocument) => void
    }

    angular.module('calypso.directives').directive('sideTree', [
        '$rootScope',
        '_',
        'FuzzySearch',
        'EventBus',
        'TreeService',
        ($rootScope: calypso.RootScope,
         _: LoDashStatic,
         FuzzySearch: any,
         EventBus: calypso.Services.EventBus,
         TreeService: calypso.Services.TreeService) => {
            return {
                restrict: 'E',
                scope: {},
                templateUrl: Templates.SIDE_TREE_TPL,
                link: (scope: Scope, el: ng.IAugmentedJQuery) => {

                    scope.state = {
                        filter: '',
                        tree: null,
                        treeDisplay: null
                    };

                    scope.props = {
                        selectedCode: null
                    };

                    scope.$on('$destroy', () => {
                        EventBus.unsubscribe(loadSubmissionTypeEvent);
                        EventBus.unsubscribe(loadDocumentEvent);
                    });

                    let _filter = function() {
                        let filterVal = scope.state.filter.toLowerCase();

                        if (scope.state.filter) {
                            scope.state.treeDisplay = angular.copy(scope.state.tree);
                            if (scope.state.treeDisplay.completed.documents.length > 0) {
                                scope.state.treeDisplay.completed.documents = (new FuzzySearch(scope.state.treeDisplay.completed.documents, ['title'])).search(filterVal);
                            }
                            if (scope.state.treeDisplay.required.documents.length > 0) {
                                scope.state.treeDisplay.required.documents = (new FuzzySearch(scope.state.treeDisplay.required.documents, ['title'])).search(filterVal);
                            }
                            if (scope.state.treeDisplay.optional.documents.length > 0) {
                                scope.state.treeDisplay.optional.documents = (new FuzzySearch(scope.state.treeDisplay.optional.documents, ['title'])).search(filterVal);
                            }
                        }
                        else {
                            scope.state.treeDisplay = scope.state.tree;
                        }
                    };

                    scope.filter = _.debounce(() => {
                        scope.$apply(_filter);
                    }, 100);

                    let loadSubmissionTypeEvent = EventBus.subscribe(Events.loadSubmissionType, scope, (type: calypso.Models.SubmissionType) => {
                        $rootScope.loading = true;
                        scope.props.selectedCode = null;

                        TreeService.getTreeDefinition(type.identifier)
                            .then((tree: calypso.Models.SideTree) => {
                                scope.state.tree = tree;
                                _filter();
                            })
                            .catch((e: any) => {
                                alert('Failed to Load Tree: ' + JSON.stringify(e));
                            })
                            .finally(() => {
                                $rootScope.loading = false;
                            });
                    });

                    let loadDocumentEvent = EventBus.subscribe(Events.loadDocument, scope, (code: string) => {
                        scope.props.selectedCode = code;
                    });
                }
            }
        }
    ]);
}
