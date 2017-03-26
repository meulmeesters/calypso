module calypso.Directives {

    import Events = calypso.Const.Events;

    interface StateParams extends angular.ui.IStateParamsService {
        entityType: string
        entityKey: string
        snapshot: string
    }

    interface Scope extends ng.IScope {
        state: {
            submissionType: calypso.Models.SubmissionType,
            documentDefinition: calypso.Models.DocumentDefinition,
            documentData: any,
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
                scope: {},
                templateUrl: calypso.Const.Templates.IUCLID_FORM_PICKER_TPL,
                link: (scope: Scope, el: ng.IAugmentedJQuery) => {
                    scope.state = {
                        documentDefinition: null,
                        documentData: {},
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
                        let container = el[0].querySelector('.iuclid-form-content-wrapper');
                        if (container) {
                            container.scrollTop = 0;
                        }

                        if (scope.state.filterDefinition) {
                            DocumentService.filter(documentDefinition);
                        }

                        // If we have document data we should apply it
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

                    // LOAD THE DEFINITION
                    let loadDocToken = EventBus.subscribe(Events.loadDocumentDefinition, scope, (documentCode: string) => {
                        let entityContext = DB.getEntityContext();
                        Loading.show();

                        // LOAD THE DATA
                        DocumentService.getDocumentDefinition(documentCode)
                            .then((documentDefinition: calypso.Models.DocumentDefinition) => {
                                // TODO: This is really lame, but right now when we're creating a new entity
                                // context.sectionCode is explicitly set to false
                                if (entityContext.sectionCode !== false) {
                                    entityContext.sectionCode = documentCode;
                                    DB.setEntityContext(entityContext);

                                    DocumentService.getDocumentData(entityContext.docType, $stateParams.entityKey, documentCode)
                                        .then((documentData: any) => {
                                            if (documentData && documentData.representation && documentData.representation[1]) {
                                                scope.state.documentData = documentData.representation[1];
                                                entityContext.sectionUuid = documentData.representation[0].key.split('/')[0];
                                            }
                                            else {
                                                scope.state.documentData = {};
                                                delete entityContext.sectionUuid;
                                            }

                                            DB.setEntityContext(entityContext);
                                        })
                                        .catch((e: any) => {
                                            console.error(`Failed to get document data: ${JSON.stringify(e)}`);
                                            scope.state.documentData = {};
                                        })
                                        .finally(() => {
                                            render(documentCode, documentDefinition);
                                        });
                                }
                                else {
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
                        EventBus.publish(Events.loadDocumentDefinition, context.docType);
                    });

                    scope.$on('$destroy', () => {
                        EventBus.unsubscribe(filterDocToken);
                        EventBus.unsubscribe(loadDocToken);
                        EventBus.unsubscribe(loadSubToken);
                    })
                }
            }
        }
    ]);
}
