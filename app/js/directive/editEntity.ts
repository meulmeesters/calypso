module calypso.Directives {

    import Templates = calypso.Const.Templates;
    import Events = calypso.Const.Events;

    interface StateParams extends angular.ui.IStateParamsService {
        entityKey: string
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
                link: () => {
                    let entityContext = DB.getEntityContext();
                    entityContext.sectionCode = null;
                    DB.setEntityContext(entityContext);

                    EventBus.publish(Events.setTitle, `Editing ${$parse('displayName')(entityContext)}`);

                    DocumentService.getDocumentSections(entityContext.docType, $stateParams.entityKey)
                        .then((results: any[]) => {
                            results = results || [];

                            let completedSections = results.reduce((sections: any, section: any) => {
                                let header = section.representation[0];
                                sections[header.definition] = true;
                                return sections;
                            }, {});

                            DB.setCompletedSections(completedSections);
                            EventBus.publish(Events.setCompletedSections, completedSections);
                        })
                        .catch(() => {
                            alert('Failed to get Document Sections');
                        });

                    $timeout(() => {
                        EventBus.publish(Events.loadDocumentDefinition, entityContext.docType);
                    }, 50);
                }
            }
        }
    ]);
}
