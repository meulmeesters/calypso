module calypso.Directives {

    import Models = calypso.Models;

    interface Scope extends ng.IScope {
        code: string
        iuclidPhraseGroup: any
        selectedOption: Models.IuclidPhrase;

    }

    angular.module('calypso.directives').directive('iuclidPickList', [
        'IuclidPhraseGroup',
        function(IuclidPhraseGroup: calypso.Services.IuclidPhraseGroup) {
            return {
                scope: {
                    code: '@'
                },

                templateUrl: calypso.Const.Templates.IUCLID_ATTRIBUTE_PICK_LIST_TPL,
                link: function(scope: Scope) {
                    IuclidPhraseGroup.get(scope.code).then((result: any) => {
                    scope.iuclidPhraseGroup = result.data
                    scope.selectedOption = scope.iuclidPhraseGroup[7] 
                    })
                }
            }
        }
    ])
}

