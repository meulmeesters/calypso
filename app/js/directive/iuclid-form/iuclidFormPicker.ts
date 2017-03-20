module calypso.Directives {

    import Events = calypso.Const.Events;

    interface Scope extends ng.IScope {
        state: {
            submissionType: calypso.Models.SubmissionType,
            documentDefinition: calypso.Models.DocumentDefinition
        }
        documentData: any,
        loadSubmissionType: () => void
    }

    angular.module('calypso.directives').directive('iuclidFormPicker', [
        '$rootScope',
        '$timeout',
        'EventBus',
        'DB',
        'DocumentService',
        function($rootScope: calypso.RootScope,
                 $timeout: ng.ITimeoutService,
                 EventBus: calypso.Services.EventBus,
                 DB: calypso.Services.DB,
                 DocumentService: Services.DocumentService) {
            return {
                scope: {
                    documentData: '='
                },
                templateUrl: calypso.Const.Templates.IUCLID_FORM_PICKER_TPL,
                link: (scope: Scope, el: ng.IAugmentedJQuery) => {
                    let loadedDocumentCode: string;

                    scope.state = {
                        documentDefinition: null,
                        submissionType: null
                    };
                    scope.state.submissionType = DB.getSubmissionType();

                    scope.loadSubmissionType = () => {
                        EventBus.publish(Events.loadSubmissionType, scope.state.submissionType);
                    };


                    if (scope.state.submissionType) {
                        scope.loadSubmissionType();
                    }

                    EventBus.subscribe(Events.loadSubmissionType, scope, (type: Models.SubmissionType) => {
                        scope.state.documentDefinition = null;
                        loadedDocumentCode = null;
                        scope.state.submissionType = type;
                    });

                    EventBus.subscribe(Events.loadDocumentDefinition, scope, (documentCode: string) => {
                        if (loadedDocumentCode !== documentCode) {
                            $rootScope.loading = true;

                            DocumentService.getDocumentDefinition(documentCode)
                                .then((documentDefinition: calypso.Models.DocumentDefinition) => {
                                    let container = el[0].querySelector('.iuclid-form-content-wrapper');
                                    if (container) {
                                        container.scrollTop = 0;
                                    }

                                    // If we have document data we should apply it
                                    if (scope.documentData) {
                                        // TODO: Fix the way we're pulling data out
                                        DocumentService.apply(documentDefinition, scope.documentData[1]);
                                    }

                                    scope.state.documentDefinition = documentDefinition;
                                    loadedDocumentCode = documentCode;
                                })
                                .catch((e: any) => {
                                    alert('Failed to Get Document Definition: ' + JSON.stringify(e));
                                })
                                .finally(() => {
                                    $rootScope.loading = false;
                                });
                        }
                    });
                }
            }
        }
    ]);
}
