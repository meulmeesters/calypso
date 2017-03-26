module calypso.Directives {

    import Events = calypso.Const.Events;
    import Templates = calypso.Const.Templates;
    import LoDashStatic = _.LoDashStatic;

    interface Scope extends ng.IScope {
        state: {
            submissionTypes: Models.SubmissionType[]
            submissionType: Models.SubmissionType
            filter: string
            tree: calypso.Models.SideTree
            treeDisplay: calypso.Models.SideTree
            treeOpen: boolean
        }
        props: {
            selectedCode: string
        }
        loadSubmissionType: () => void
        filter: () => void
        loadNodeDocument: (node: calypso.Models.TreeNodeDocument) => void
    }

    angular.module('calypso.directives').directive('sideTree', [
        '$rootScope',
        '$timeout',
        '$interval',
        '_',
        'FuzzySearch',
        'DB',
        'EventBus',
        'TreeService',
        'Loading',
        ($rootScope: calypso.RootScope,
         $timeout: ng.ITimeoutService,
         $interval: ng.IIntervalService,
         _: LoDashStatic,
         FuzzySearch: any,
         DB: calypso.Services.DB,
         EventBus: calypso.Services.EventBus,
         TreeService: calypso.Services.TreeService,
         Loading: calypso.Services.Loading) => {
            return {
                restrict: 'E',
                scope: {},
                templateUrl: Templates.SIDE_TREE_TPL,
                link: (scope: Scope, el: ng.IAugmentedJQuery) => {
                    let DEFAULT_SUB_TYPE_IDX = 1;
                    let submissionTypes = DB.getSubmissionTypes();
                    scope.state = {
                        submissionTypes: submissionTypes,
                        submissionType: submissionTypes[DEFAULT_SUB_TYPE_IDX],
                        filter: '',
                        tree: null,
                        treeDisplay: null,
                        treeOpen: false
                    };

                    scope.props = {
                        selectedCode: null
                    };

                    let _filter = function() {
                        let filterVal = scope.state.filter.toLowerCase();

                        if (scope.state.filter) {
                            scope.state.treeDisplay = angular.copy(scope.state.tree);
                            Object.keys(scope.state.treeDisplay.sections).forEach((treeName: string) => {
                                let tree: Models.SideTreeSection = scope.state.treeDisplay.sections[treeName];

                                if (tree && tree.documents.length > 0) {
                                    tree.documents = (new FuzzySearch(tree.documents, ['title'])).search(filterVal);
                                }
                            });
                        }
                        else {
                            scope.state.treeDisplay = scope.state.tree;
                        }
                    };

                    let loadTree = function(clearCache: boolean) {
                        if (scope.state.submissionType) {
                            TreeService.getTreeDefinition(scope.state.submissionType.identifier, clearCache)
                                .then((tree: calypso.Models.SideTree) => {
                                    scope.state.tree = tree;
                                    _filter();
                                })
                                .catch((e: any) => {
                                    alert('Failed to Load Tree: ' + JSON.stringify(e));
                                })
                                .finally(() => {
                                    Loading.hide();
                                });
                        }
                        else {
                            Loading.hide();
                        }
                    };

                    let toggleSideBar = function() {
                        scope.state.treeOpen = !scope.state.treeOpen;
                        if (!scope.state.treeOpen) {
                            // If we're closing the side bar it's nice
                            // to wait until the bar is closed before
                            // removing the overlay
                            $timeout(() => {
                                $rootScope.overlay = false;
                            }, 200);
                        } else {
                            $rootScope.overlay = true;
                        }
                    };

                    let hideSideBar = function() {
                        scope.state.treeOpen = false;
                        $rootScope.overlay = false;
                    };

                    let setCompletedSections = function() {
                        Loading.show();
                        loadTree(true);
                    };

                    let setCompletedSectionsToken = EventBus.subscribe(Events.setCompletedSections, scope, setCompletedSections);
                    let toggleSideBarToken = EventBus.subscribe(Events.toggleSideBar, scope, toggleSideBar);
                    let hideSideBarToken = EventBus.subscribe(Events.hideSideBar, scope, hideSideBar);
                    let loadDocumentDefinitionToken = EventBus.subscribe(Events.loadDocumentDefinition, scope, (code: string) => {
                        scope.props.selectedCode = code;
                    });

                    scope.$on('$destroy', () => {
                        EventBus.unsubscribe(toggleSideBarToken);
                        EventBus.unsubscribe(hideSideBarToken);
                        EventBus.unsubscribe(loadDocumentDefinitionToken);
                        EventBus.unsubscribe(setCompletedSectionsToken);
                    });

                    scope.filter = _.debounce(() => {
                        scope.$apply(_filter);
                    }, 100);

                    scope.loadSubmissionType = () => {
                        Loading.show();
                        scope.props.selectedCode = null;
                        loadTree(false);
                    };

                    if (scope.state.submissionType) {
                        scope.loadSubmissionType();
                    }
                    else {
                        let loadSubTypesInterval = $interval(function() {
                            let submissionTypes = DB.getSubmissionTypes();

                            if (submissionTypes) {
                                scope.state.submissionTypes = submissionTypes;
                                scope.state.submissionType = submissionTypes[DEFAULT_SUB_TYPE_IDX];
                                $interval.cancel(loadSubTypesInterval);
                                scope.loadSubmissionType();
                            }
                        }, 100);
                    }
                }
            }
        }
    ]);
}
