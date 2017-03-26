module calypso.Directives {

    import Models = calypso.Models;
    import Events = calypso.Const.Events;

    interface StateParams extends angular.ui.IStateParamsService {
        entityType: string
        entityKey: string
        snapshot: string
    }

    interface Scope extends ng.IScope {
        state: {
            submissionType: calypso.Models.SubmissionType
            documentDefinition: calypso.Models.DocumentDefinition
            documentDefinitions: Models.DocumentDefinition[]
            documentData: any
            filterDefinition: boolean
        }
        loadSubmissionType: () => void
    }

    angular.module('calypso.directives').directive('iuclidFormPicker', [
        '$rootScope',
        '$timeout',
        '$stateParams',
        'EventBus',
        'DB',
        'DocumentService',
        'DocumentFilter',
        'Loading',
        function($rootScope: calypso.RootScope,
                 $timeout: ng.ITimeoutService,
                 $stateParams: StateParams,
                 EventBus: calypso.Services.EventBus,
                 DB: calypso.Services.DB,
                 DocumentService: Services.DocumentService,
                 DocumentFilter: Services.DocumentFilter,
                 Loading: Services.Loading) {
            return {
                scope: {
                    documentDefinitions: '='
                },
                templateUrl: calypso.Const.Templates.IUCLID_FORM_PICKER_TPL,
                link: (scope: Scope, el: ng.IAugmentedJQuery) => {
                    scope.state = {
                        documentDefinition: null,
                        documentDefinitions: [],
                        documentData: null,
                        submissionType: DB.getSubmissionType(),
                        filterDefinition: DocumentFilter.isApplied()
                    };

                    scope.loadSubmissionType = () => {
                        EventBus.publish(Events.loadSubmissionType, scope.state.submissionType);
                    };

                    if (scope.state.submissionType) {
                        scope.loadSubmissionType();
                    }

                    let render = function(documentCode: string, documentDefinition: Models.DocumentDefinition) {
                        EventBus.publish(Events.loadTabs, scope.state.documentDefinitions);
                        let container = el[0].querySelector('.iuclid-form-content-wrapper');
                        if (container) {
                            container.scrollTop = 0;
                        }

                        if (scope.state.filterDefinition) {
                            DocumentService.filter(documentDefinition);
                        }

                        // If we have document data we should apply it on top of the definition
                        if (scope.state.documentData) {
                            DocumentService.apply(documentDefinition, scope.state.documentData);
                        }

                        scope.state.documentDefinition = documentDefinition;
                        Loading.hide();
                    };

                    let loadSubToken = EventBus.subscribe(Events.loadSubmissionType, scope, (type: Models.SubmissionType) => {
                        scope.state.documentDefinition = null;
                        scope.state.submissionType = type;
                    });

                    let loadDocDataToken = EventBus.subscribe(Events.loadDocumentData, scope, (data: any) => {
                        scope.state.documentData = data;
                    });

                    let reduceDataDefinitions = function(definitions: any, definition: any) {
                        let def = (definition.representation || {})[0];

                        if (def) {
                            definitions = definitions || {};
                            definitions[def.name || def.definition] = def;

                            return definitions;
                        }
                    };

                    // LOAD THE DEFINITION
                    let loadDocToken = EventBus.subscribe(Events.loadDocumentDefinition, scope, (documentCode: string) => {
                        let entityContext = DB.getEntityContext();
                        Loading.show();

                        // LOAD THE DATA
                        DocumentService.getDocumentDefinition(documentCode)
                            .then((documentDefinition: calypso.Models.DocumentDefinition) => {
                                entityContext.sectionCode = documentCode;
                                DB.setEntityContext(entityContext);

                                if ($stateParams.entityKey) {
                                    DocumentService.getDocumentData(entityContext.docType, $stateParams.entityKey, documentCode)
                                        .then((data: any[]) => {
                                            scope.state.documentDefinitions = data.reduce(reduceDataDefinitions, null);

                                            let documentData: any = data[0];
                                            if (documentData && documentData.representation && documentData.representation[1]) {
                                                scope.state.documentData = documentData.representation[1];
                                                entityContext.sectionUuid = documentData.representation[0].key.split('/')[0];
                                            }
                                            else {
                                                scope.state.documentData = null;
                                                delete entityContext.sectionUuid;
                                            }

                                            DB.setEntityContext(entityContext);
                                        })
                                        .catch((e: any) => {
                                            console.error(`Failed to get document data: ${JSON.stringify(e)}`);
                                            scope.state.documentData = null;
                                            scope.state.documentDefinitions = null;
                                        })
                                        .finally(() => {
                                            render(documentCode, documentDefinition);
                                        });
                                }
                                else {
                                    scope.state.documentData = null;
                                    scope.state.documentDefinitions = null;
                                    render(documentCode, documentDefinition);
                                }
                            })
                            .catch((e: any) => {
                                alert('Failed to Get Document Definition: ' + JSON.stringify(e));
                                Loading.hide();
                            });
                    });

                    let filterDocToken = EventBus.subscribe(Events.filterDocumentDefinition, scope, (filterDefinition: any) => {
                        let context = DB.getEntityContext();

                        scope.state.filterDefinition = !!(filterDefinition);
                        EventBus.publish(Events.loadDocumentDefinition, (context.sectionCode || context.docType));
                    });

                    scope.$on('$destroy', () => {
                        EventBus.unsubscribe(filterDocToken);
                        EventBus.unsubscribe(loadDocToken);
                        EventBus.unsubscribe(loadSubToken);
                        EventBus.unsubscribe(loadDocDataToken);
                    })
                }
            }
        }
    ]);
}
