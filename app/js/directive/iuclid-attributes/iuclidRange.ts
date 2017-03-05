module calypso.Directives {

    interface Scope extends ng.IScope {
        content: any
    }

    angular.module('calypso.directives').directive('iuclidRange', [
        function() {
            return {
                scope: {
                    content: '='
                },
                templateUrl: calypso.Const.Templates.IUCLID_ATTRIBUTE_RANGE_TPL
            }
        }
    ]);
}
