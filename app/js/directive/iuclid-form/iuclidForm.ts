module calypso.Directives {

    angular.module('calypso.directives').directive('iuclidForm', [
        function() {
            return {
                scope: {
                    document: '=',
                    documentData: '='
                },
                templateUrl: calypso.Const.Templates.IUCLID_FORM_TPL
            }
        }
    ]);
}
