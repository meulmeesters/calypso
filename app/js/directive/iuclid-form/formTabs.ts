module calypso.Directives {

    import Events = calypso.Const.Events;

    interface Scope extends ng.IScope {
        documentDefinitions: {[key:string]: Models.JsonDocumentEnvelopeHeader}
        state: {
            definitions: Models.JsonDocumentEnvelopeHeader[]
        }
        addTab: () => void
    }

    angular.module('calypso.directives').directive('formTabs', [
        'EventBus',
        function(EventBus: calypso.Services.EventBus) {
            return {
                scope: {
                    documentDefinitions: '='
                },
                templateUrl: calypso.Const.Templates.IUCLID_FORM_TABS_TPL,
                link: (scope: Scope) => {
                    scope.state = {
                        definitions: null
                    };

                    scope.addTab = () => {
                        alert('Unfortunately multiple document instances is not currently supported');
                    };

                    let setDefinitions = function() {
                        scope.state.definitions = Object.keys(scope.documentDefinitions).map((key: string) => {
                            return scope.documentDefinitions[key];
                        });
                    };
                    setDefinitions();

                    let loadTabsToken = EventBus.subscribe(Events.loadTabs, scope, (tabs: any) => {
                        if (tabs) {
                            scope.state.definitions = Object.keys(tabs).map((key: string) => {
                                return tabs[key];
                            });
                        }
                        else {
                            scope.state.definitions = null;
                        }
                    });

                    scope.$on('$destroy', () => {
                        EventBus.unsubscribe(loadTabsToken);
                    });
                }
            }
        }
    ]);
}
