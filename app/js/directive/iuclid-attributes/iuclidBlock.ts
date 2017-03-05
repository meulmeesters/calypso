module calypso.Directives {

    interface Scope extends ng.IScope {
        state: {
            collapsed: boolean
        }
        content: any
        toggleWrapper: () => void
    }

    angular.module('calypso.directives').directive('iuclidBlock', [
        function() {
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
                    }
                }
            }
        }
    ]);
}
