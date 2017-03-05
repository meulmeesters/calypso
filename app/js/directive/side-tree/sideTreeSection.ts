module calypso.Directives {

    import Events = calypso.Const.Events;
    import Templates = calypso.Const.Templates;

    interface Scope extends ng.IScope {
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
                    section: '='
                },
                templateUrl: Templates.SIDE_TREE_SECTION_TPL,
                link: (scope: Scope) => {
                    scope.state = {
                        collapsed: true
                    };

                    scope.loadNodeDocument = (node: calypso.Models.TreeNodeDocument) => {
                        EventBus.publish(Events.loadDocument, node.code);
                    };

                    scope.toggleSection = ($event: MouseEvent) => {
                        scope.state.collapsed = !scope.state.collapsed;
                    }
                }
            }
        }
    ]);
}
