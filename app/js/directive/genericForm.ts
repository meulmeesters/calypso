module calypso.Directives {

    import Templates = calypso.Const.Templates;

    interface Scope extends ng.IScope {
        elements: any
    }

    angular.module("calypso.directives").directive("genericForm",[
        function() {
            return {
                scope:{
                    "form-elements":"="
                },
                templateUrl: Templates.GENERIC_FORM_TPL,
                link: function(scope: Scope) {
                    scope.elements=[{
                        title:"Name"
                    },{
                        title:"Description"
                    }]
                }
            }
        } 
    ])
}