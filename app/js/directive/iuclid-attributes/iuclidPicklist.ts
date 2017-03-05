module calypso.Directives {

    interface Scope extends ng.IScope {
        content: calypso.Models.PickListContent
        state: {
            phraseGroup: any
        }
    }

    angular.module('calypso.directives').directive('iuclidPickList', [
        'IuclidPhraseGroup',
        function(IuclidPhraseGroup: calypso.Services.IuclidPhraseGroup) {
            return {
                scope: {
                    content: '='
                },
                templateUrl: calypso.Const.Templates.IUCLID_ATTRIBUTE_PICK_LIST_TPL,
                link: function(scope: Scope) {
                    scope.state = {
                        phraseGroup: []
                    };

                    IuclidPhraseGroup.get(scope.content.phrasegroup)
                        .then((result: any) => {
                            scope.state.phraseGroup = result;
                        })
                        .catch((e: any) => {
                            console.error('Error Getting Phrase Group: ' + JSON.stringify(e));
                        });
                }
            }
        }
    ])
}

