module calypso.Directives {

    import Events = calypso.Const.Events;

    interface Scope extends ng.IScope {
        state: {
            collapsed: boolean
        }
        content: any
        toggleWrapper: () => void
    }

    angular.module('calypso.directives').directive('iuclidBlock', [
        'EventBus',
        function(EventBus: calypso.Services.EventBus) {
            return {
                scope: {
                    content: '='
                },
                templateUrl: calypso.Const.Templates.IUCLID_ATTRIBUTE_BLOCK_TPL,
                link: (scope: Scope) => {
                    scope.state = {
                        collapsed: true
                    };

                    scope.toggleWrapper = () => {
                        scope.state.collapsed = !scope.state.collapsed;
                    };

                    let collapseAllToken = EventBus.subscribe(Events.collapseAllSections, scope, () => {
                        scope.state.collapsed = true;
                    });

                    scope.$on('$destroy', () => {
                        EventBus.unsubscribe(collapseAllToken);
                    })
                }
            }
        }
    ]);
}
