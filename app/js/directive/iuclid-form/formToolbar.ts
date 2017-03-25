module calypso.Directives {

    import Events = calypso.Const.Events;
    import API = calypso.Const.API;

    interface Scope extends ng.IScope {
        state: {
            downloadUrl: string
        }
        document: Models.DocumentDefinition
        documentData: any
        save: () => void
        cancel: () => void
        filter: () => void
        downloadCsv: () => void
    }

    angular.module('calypso.directives').directive('formToolbar', [
        '$rootScope',
        '$parse',
        '$state',
        '$http',
        'EventBus',
        'DB',
        'DocumentService',
        'DocumentFilter',
        'CSV',
        function($rootScope: RootScope,
                 $parse: ng.IParseService,
                 $state: angular.ui.IStateService,
                 $http: ng.IHttpService,
                 EventBus: calypso.Services.EventBus,
                 DB: calypso.Services.DB,
                 DocumentService: calypso.Services.DocumentService,
                 DocumentFilter: calypso.Services.DocumentFilter,
                 CSV: calypso.Services.CSV) {
            return {
                scope: {
                    document: '=',
                    documentData: '=',
                    filterDefinition: '='
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
                        let documentData = scope.documentData ? angular.copy(scope.documentData[1]) : {};
                        let envelope = DocumentService.generateJsonDocumentEnvelope(scope.document, documentData);

                        $rootScope.loading = true;
                        DocumentService.save(envelope)
                            .then(() => {
                                $state.go(context.state);
                            })
                            .catch((e: any) => {
                                let error: any = ($parse('data.info.errors')(e) || [{}])[0];
                                let msg;
                                if (!error.code && !error.message) {
                                    msg = $parse('data.message')(e);
                                }
                                else {
                                    msg = `${error.code}: ${error.message}\nPath: ${error.path}`;
                                }

                                alert(msg);
                            })
                            .finally(() => {
                                $rootScope.loading = false;
                            });
                    };

                    scope.filter = () => {
                        DocumentFilter.toggle();
                    };

                    scope.downloadCsv = () => {
                        CSV.download(scope.document);
                    };
                }
            }
        }
    ]);
}
