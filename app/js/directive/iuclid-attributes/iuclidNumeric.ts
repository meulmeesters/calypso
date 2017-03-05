module calypso.Directives {

    angular.module('calypso.directives').directive('iuclidNumeric', [
        function() {
            return {
                scope: {
                    content: '='
                },
                templateUrl: calypso.Const.Templates.IUCLID_ATTRIBUTE_NUMERIC_TPL
            }
        }
    ]);
}
