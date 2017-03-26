module calypso.Directives {

    import Events = calypso.Const.Events;
    import API = calypso.Const.API;

    interface StateParams extends angular.ui.IStateParamsService {
        entityType: string
        entityKey: string
        snapshot: string
    }

    interface Scope extends ng.IScope {
        state: {
            downloadTxtUrl: string
            downloadCsvUrl: string
        }
        document: Models.DocumentDefinition
        documentDefinitions: Models.JsonDocumentEnvelopeHeader[]
        documentData: any
        save: () => void
        cancel: () => void
        delete: () => void
        filter: () => void
        collapseAll: () => void
        downloadCsv: () => void
    }

    angular.module('calypso.directives').directive('formToolbar', [
        '$parse',
        '$http',
        '$state',
        '$stateParams',
        'EventBus',
        'DB',
        'DocumentService',
        'DocumentFilter',
        'CSV',
        'Loading',
        function($parse: ng.IParseService,
                 $http: ng.IHttpService,
                 $state: angular.ui.IStateService,
                 $stateParams: StateParams,
                 EventBus: calypso.Services.EventBus,
                 DB: calypso.Services.DB,
                 DocumentService: calypso.Services.DocumentService,
                 DocumentFilter: calypso.Services.DocumentFilter,
                 CSV: calypso.Services.CSV,
                 Loading: calypso.Services.Loading) {
            return {
                scope: {
                    document: '=',
                    documentDefinitions: '=',
                    documentData: '=',
                    filterDefinition: '='
                },
                templateUrl: calypso.Const.Templates.IUCLID_FORM_TOOLBAR_TPL,
                link: (scope: Scope) => {
                    scope.state = {
                        downloadTxtUrl: `${calypso.Const.API.BASE_URL}/txt/${scope.document.identifier}`,
                        downloadCsvUrl: `${API.BASE_URL}/csv/${scope.document.identifier}`
                    };

                    scope.cancel = () => {
                        let context = DB.getEntityContext();
                        $state.go(context.state);
                    };

                    scope.save = () => {
                        let context = DB.getEntityContext();
                        let documentData = scope.documentData ? angular.copy(scope.documentData[1]) : {};
                        let envelope = DocumentService.generateJsonDocumentEnvelope(scope.document, documentData);

                        Loading.show();
                        DocumentService.save(envelope)
                            .then((result: Models.SaveResponse) => {
                                if (context.docType !== 'SUBSTANCE') {
                                    $state.go(context.state);
                                }
                                else if (context.docType === context.sectionCode) {
                                    if (result.isCreate) {
                                        context.sectionUuid = result.header.key;
                                        DB.setEntityContext(context);

                                        $state.go('edit-entity', {
                                            entityType: context.docType,
                                            entityKey: result.header.key,
                                            snapshot: 0
                                        });
                                    }
                                    else {
                                        $state.go(context.state);
                                    }
                                }
                                else {
                                    let completedSections = DB.getCompletedSections();
                                    if (context.sectionCode) {
                                        completedSections[context.sectionCode] = result.header;
                                    }

                                    if (result.isCreate) {
                                        let definitions = scope.documentDefinitions || {};

                                        context.sectionUuid = result.header.key;
                                        DB.setEntityContext(context);
                                        definitions[(result.header.name || result.header.definition)] = result.header;
                                        EventBus.publish(Events.loadTabs, definitions);
                                        EventBus.publish(Events.loadDocumentData, result.body);
                                    }

                                    EventBus.publish(Events.setCompletedSections);
                                }
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
                                Loading.hide();
                            });
                    };

                    scope.delete = () => {
                        let context = DB.getEntityContext();

                        if (window.confirm(`Are you sure you want to delete this ${context.sectionCode}?`)) {
                            Loading.show();
                            DocumentService.delete(context.docType, $stateParams.entityKey, context.sectionCode, context.sectionUuid)
                                .then(() => {
                                    let completedSections = DB.getCompletedSections();
                                    if (context.sectionCode) {
                                        completedSections[context.sectionCode] = null;
                                    }
                                    context.sectionUuid = null;

                                    DB.setEntityContext(context);
                                    DB.setCompletedSections(completedSections);
                                    EventBus.publish(Events.setCompletedSections);
                                    EventBus.publish(Events.loadDocumentDefinition, context.docType);
                                })
                                .catch(() => {
                                    alert('Error deleting document');
                                })
                                .finally(() => {
                                    Loading.hide();
                                });
                        }
                    };

                    scope.filter = () => {
                        DocumentFilter.toggle();
                    };

                    scope.collapseAll = () => {
                        EventBus.publish(Events.collapseAllSections);
                    };

                    scope.downloadCsv = () => {
                        CSV.download(scope.document);
                    };
                }
            }
        }
    ]);
}
