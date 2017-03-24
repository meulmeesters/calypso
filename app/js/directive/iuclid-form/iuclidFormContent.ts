module calypso.Directives {

    import LoDashStatic = _.LoDashStatic;
    interface Scope extends ng.IScope {
        contents: any
    }

    angular.module('calypso.directives').directive('iuclidFormContent', [
        function() {
            return {
                scope: {
                    contents: '='
                },
                templateUrl: calypso.Const.Templates.IUCLID_FORM_CONTENTS_TPL
            }
        }
    ]);
}
