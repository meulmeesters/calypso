module calypso.Directives {

    interface Attributes extends ng.IAttributes {
        ngxMultiple: string|boolean
    }

    /**
     * This is used on an <input/> tag since trying to interpolate
     * using the built-in "multiple" attribute does not work.
     * Ex: <input multiple="{{ scope.someVal }}" /> does NOT work.
     *
     * Instead we need to use our extended angular directive to
     * do the work for us.
     * Ex: <input ngx-multiple="{{ scope.someVal }}" /> does work.
     */
    angular.module('calypso.directives').directive('ngxMultiple', [
        function () {
            return {
                restrict: 'A',
                link: (scope: any, element: any, attr: Attributes) => {
                    if (attr.ngxMultiple === 'true' || attr.ngxMultiple === true) {
                        element.attr('multiple', true);
                    }
                }
            };
        }
    ]);
}