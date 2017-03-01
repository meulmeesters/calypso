module calypso.Directives {
    interface Scope extends ng.IScope {
        value: string
        iuclidBoolean: any
    }

    angular.module('calypso.directives').directive('iuclidBoolean', [
       'IuclidBoolean',
        function(IuclidBoolean: calypso.Services.IuclidBoolean) {
            return {
                scope: {
                    value: '@'
                },
                templateUrl: calypso.Const.Templates.IUCLID_ATTRIBUTE_BOOLEAN_TPL,
                link: function(scope: Scope) {
                    IuclidBoolean.get(scope.value).then((result: any) => {
                        scope.iuclidBoolean = result;
                    })
                }
            }
        }
    ])
}


