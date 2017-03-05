module calypso.Directives {

    angular.module('calypso.directives').directive('formToolbar', [
        function() {
            return {
                templateUrl: calypso.Const.Templates.IUCLID_FORM_TOOLBAR_TPL
            }
        }
    ]);
}
