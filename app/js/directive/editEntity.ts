module calypso.Directives {

    import Templates = calypso.Const.Templates;
    import Events = calypso.Const.Events;

    interface StateParams extends angular.ui.IStateParamsService {
        entityKey: string
    }

    interface Scope extends ng.IScope {
        state: {
            context: Models.EntityContext
        }
    }

    angular.module('calypso.directives').directive('editEntity', [
        '$timeout',
        '$parse',
        '$stateParams',
        'EventBus',
        'DB',
        'DocumentService',
        ($timeout: ng.ITimeoutService,
         $parse: ng.IParseService,
         $stateParams: StateParams,
         EventBus: calypso.Services.EventBus,
         DB: calypso.Services.DB,
         DocumentService: calypso.Services.DocumentService) => {
            return {
                restrict: 'E',
                scope: {},
                templateUrl: Templates.EDIT_ENTITY_TPL,
                link: (scope: Scope) => {
                    let entityContext = DB.getEntityContext();

                    scope.state = {
                        context: entityContext
                    };

                    EventBus.publish(Events.setTitle, `Editing ${$parse('displayName')(entityContext)}`);

                    if (entityContext.sections) {
                        DocumentService.getDocumentSections(entityContext.docType, $stateParams.entityKey)
                            .then((results: any[]) => {
                                results = results || [];

                                let completedSections = results.reduce((sections: any, section: any) => {
                                    let header = section.representation[0];
                                    sections[header.definition] = true;
                                    return sections;
                                }, {});

                                DB.setCompletedSections(completedSections);
                                $timeout(() => {
                                    EventBus.publish(Events.setCompletedSections, completedSections);
                                }, 100);
                            })
                            .catch(() => {
                                alert('Failed to get Document Sections');
                            });
                    }

                    $timeout(() => {
                        EventBus.publish(Events.loadDocumentDefinition, entityContext.docType);
                    }, 100);
                }
            }
        }
    ]);
}
