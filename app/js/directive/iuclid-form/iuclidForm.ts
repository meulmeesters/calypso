module calypso.Directives {

    angular.module('calypso.directives').directive('iuclidForm', [
        function() {
            return {
                scope: {
                    document: '='
                },
                templateUrl: calypso.Const.Templates.IUCLID_FORM_TPL
            }
        }
    ]);
}
