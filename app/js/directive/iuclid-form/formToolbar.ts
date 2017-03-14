module calypso.Directives {

    interface Scope extends ng.IScope {
        state: {
            downloadUrl: string
        }
        document: Models.Document
        save: () => void
    }

    angular.module('calypso.directives').directive('formToolbar', [
        'DocumentService',
        function(DocumentService: calypso.Services.DocumentService) {
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
                        debugger;
                        let envelope = DocumentService.generateJsonDocumentEnvelope(scope.document);

                        DocumentService.saveDocument(envelope);
                    }
                }
            }
        }
    ]);
}
