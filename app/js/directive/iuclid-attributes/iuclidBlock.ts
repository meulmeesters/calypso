module calypso.Directives {

    interface Scope extends ng.IScope {
        content: any
    }

    angular.module('calypso.directives').directive('iuclidBlock', [
        function() {
            return {
                scope: {
                    content: '='
                },
                templateUrl: calypso.Const.Templates.IUCLID_ATTRIBUTE_BLOCK_TPL
            }
        }
    ]);
}
