module calypso.Directives {

    angular.module('calypso.directives').directive('iuclidDate', [
        function() {
            return {
                scope: {
                    content: '='
                },
                templateUrl: calypso.Const.Templates.IUCLID_ATTRIBUTE_DATE_TPL
            }
        }
    ]);
}
