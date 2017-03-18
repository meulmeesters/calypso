module calypso.Directives {

    import Events = calypso.Const.Events;

    interface Scope extends ng.IScope {
        state: {
            downloadUrl: string
        }
        document: Models.Document
        save: () => void
        cancel: () => void
    }

    angular.module('calypso.directives').directive('formToolbar', [
        '$rootScope',
        '$parse',
        '$state',
        'EventBus',
        'DB',
        'DocumentService',
        function($rootScope: RootScope,
                 $parse: ng.IParseService,
                 $state: angular.ui.IStateService,
                 EventBus: calypso.Services.EventBus,
                 DB: calypso.Services.DB,
                 DocumentService: calypso.Services.DocumentService) {
            return {
                scope: {
                    document: '='
                },
                templateUrl: calypso.Const.Templates.IUCLID_FORM_TOOLBAR_TPL,
                link: (scope: Scope) => {
                    scope.state = {
                        downloadUrl: `${calypso.Const.API.BASE_URL}/txt/${scope.document.identifier}`
                    };

                    scope.cancel = () => {
                        let context = DB.getEntityContext();
                        $state.go(context.state);
                    };

                    scope.save = () => {
                        let context = DB.getEntityContext();
                        let envelope = DocumentService.generateJsonDocumentEnvelope(scope.document);

                        $rootScope.loading = true;
                        DocumentService.saveDocument(envelope)
                            .then(() => {
                                $state.go(context.state);
                            })
                            .catch((e: any) => {
                                let error: any = ($parse('data.info.errors')(e) || [{}])[0];

                                alert(`${error.code}: ${error.message}\nPath: ${error.path}`);
                            })
                            .finally(() => {
                                $rootScope.loading = false;
                            });
                    }
                }
            }
        }
    ]);
}
