module calypso.Directives {

    import Events = calypso.Const.Events;

    interface Scope extends ng.IScope {
        state: {
            submissionType: calypso.Models.SubmissionType,
            document: calypso.Models.Document
        }
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
                scope: {},
                templateUrl: calypso.Const.Templates.IUCLID_FORM_PICKER_TPL,
                link: (scope: Scope, el: ng.IAugmentedJQuery) => {
                    let loadedDocumentCode: string;

                    scope.state = {
                        document: null,
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
                        scope.state.document = null;
                        loadedDocumentCode = null;
                        scope.state.submissionType = type;
                    });

                    EventBus.subscribe(Events.loadDocument, scope, (documentCode: string) => {
                        if (loadedDocumentCode !== documentCode) {
                            $rootScope.loading = true;

                            DocumentService.getDocumentDefinition(documentCode)
                                .then((document: calypso.Models.Document) => {
                                    let container = el[0].querySelector('.iuclid-form-content-wrapper');
                                    if (container) {
                                        container.scrollTop = 0;
                                    }

                                    scope.state.document = document;
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
