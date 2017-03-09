module calypso.Directives {

    angular.module('calypso.directives').directive('formToolbar', [
        function() {
            return {
                scope: {
                    document: '='
                },
                templateUrl: calypso.Const.Templates.IUCLID_FORM_TOOLBAR_TPL,
                link: (scope: any) => {
                    scope.state = {
                        downloadUrl: `${calypso.Const.API.BASE_URL}/txt/${scope.document.identifier}`
                    }
                }
            }
        }
    ]);
}
