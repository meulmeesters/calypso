module calypso.Directives {

    import Events = calypso.Const.Events;

    interface Scope extends ng.IScope {
        state: {
            downloadUrl: string
        }
        document: Models.Document
        save: () => void
    }

    angular.module('calypso.directives').directive('formToolbar', [
        '$rootScope',
        '$parse',
        '$state',
        'EventBus',
        'DocumentService',
        function($rootScope: RootScope,
                 $parse: ng.IParseService,
                 $state: angular.ui.IStateService,
                 EventBus: calypso.Services.EventBus,
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

                    scope.save = () => {
                        let envelope = DocumentService.generateJsonDocumentEnvelope(scope.document);

                        $rootScope.loading = true;
                        DocumentService.saveDocument(envelope)
                            .then(() => {
                                EventBus.publish(Events.entitySearch);
                                $state.go('entities.substances');
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
