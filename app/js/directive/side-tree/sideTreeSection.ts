module calypso.Directives {

    import Events = calypso.Const.Events;
    import Templates = calypso.Const.Templates;

    interface Scope extends ng.IScope {
        section: Models.SideTreeSection,
        state: {
            collapsed: boolean
        }
        loadNodeDocument: (node: calypso.Models.TreeNodeDocument) => void
        toggleSection: ($event: MouseEvent) => void
    }

    angular.module('calypso.directives').directive('sideTreeSection', [
        'EventBus',
        (EventBus: calypso.Services.EventBus) => {
            return {
                restrict: 'E',
                scope: {
                    section: '=',
                    props: '='
                },
                templateUrl: Templates.SIDE_TREE_SECTION_TPL,
                link: (scope: Scope) => {
                    scope.state = {
                        collapsed: true
                    };

                    scope.loadNodeDocument = (node: calypso.Models.TreeNodeDocument) => {
                        EventBus.publish(Events.hideSideBar);
                        EventBus.publish(Events.loadDocumentDefinition, node.code);
                    };

                    scope.toggleSection = () => {
                        if (scope.state.collapsed) {
                            EventBus.publish(Events.collapseAllSideBarSections);
                            scope.state.collapsed = false;
                        }
                        else {
                            scope.state.collapsed = true;
                        }
                    };

                    let setCompletedSectionsToken = EventBus.subscribe(Events.setCompletedSections, scope, () => {
                        // collapse all sections except the completed
                        scope.state.collapsed = (scope.section.title !== 'Completed');
                    });

                    let collapseAllToken = EventBus.subscribe(Events.collapseAllSideBarSections, scope, () => {
                        scope.state.collapsed = true;
                    });

                    scope.$on('$destroy', () => {
                        EventBus.unsubscribe(setCompletedSectionsToken);
                        EventBus.unsubscribe(collapseAllToken);
                    });
                }
            }
        }
    ]);
}
