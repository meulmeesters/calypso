module calypso {

    import Templates = calypso.Const.Templates;

    /**
     * Module to contain all calypso Services
     */
    angular.module('calypso.services', []);

    /**
     * Module to contain all calypso Directives
     */
    angular.module('calypso.directives', []);

    /**
     * Main Calypso Search Module
     */
    angular.module('calypso', [
        'ui.router',
        'calypso.services',
        'calypso.directives'
    ]);

    /**
     * Setup injectable constants for libs
     */
    angular.module('calypso').constant('_', _);
    angular.module('calypso').constant('FuzzySearch', window.FuzzySearch);

    /**
     * Configure routes
     */
    angular.module('calypso').config([
        '$stateProvider',
        '$urlRouterProvider',
        '$compileProvider',
        ($stateProvider: any,
         $urlRouterProvider: any,
         $compileProvider: ng.ICompileProvider) => {

            $compileProvider.debugInfoEnabled(false);

            $stateProvider.state({
                name: 'entities',
                url: '/entities',
                templateUrl: Templates.ENTITIES_TPL
            });

            let entities = [{
                name: 'substances',
                data: {
                    docType: 'SUBSTANCE',
                    displayName: 'Substance'
                }
            }, {
                name: 'mixtures',
                data: {
                    docType: 'MIXTURE',
                    displayName: 'Mixture'
                }
            }, {
                name: 'literature',
                data: {
                    docType: 'LITERATURE',
                    displayName: 'Literature'
                }
            }, {
                name: 'dossier',
                data: {
                    docType: 'DOSSIER',
                    displayName: 'Dossier'
                }
            }, {
                name: 'templates',
                data: {
                    docType: 'TEMPLATE',
                    displayName: 'Template'
                }
            }, {
                name: 'categories',
                data: {
                    docType: 'CATEGORY',
                    displayName: 'Category'
                }
            }, {
                name: 'legal-entities',
                data: {
                    docType: 'LEGAL_ENTITY',
                    displayName: 'Legal Entity'
                }
            }, {
                name: 'annotations',
                data: {
                    docType: 'ANNOTATION',
                    displayName: 'Annotation'
                }
            }, {
                name: 'sites',
                data: {
                    docType: 'SITE',
                    displayName: 'Site'
                }
            }, {
                name: 'reference-substances',
                data: {
                    docType: 'REFERENCE_SUBSTANCE',
                    displayName: 'Reference Substance'
                }
            }, {
                name: 'contacts',
                data: {
                    docType: 'CONTACT',
                    displayName: 'Contact'
                }
            }];

            entities.forEach((entity: any) => {
                $stateProvider.state({
                    name: `entities.${entity.name}`,
                    url: `/${entity.name}`,
                    templateUrl: Templates.ENTITIES_LIST_TPL,
                    data: entity.data
                });
            });

            $stateProvider.state({
                name: 'new-substance',
                url: '/substances/new',
                templateUrl: Templates.NEW_SUBSTANCE_TPL
            });

            $stateProvider.state({
                name: 'entities.endpointstudies',
                url: '/endpointstudies',
                templateUrl: Templates.ENDPOINTSTUDIES_TPL
            });

            $stateProvider.state({
                name: 'not-found',
                url: '/not-found',
                templateUrl: Templates.NOT_FOUND_TPL
            });

            $urlRouterProvider.when('', '/entities/substances');
            $urlRouterProvider.when('/', '/entities/substances');
            $urlRouterProvider.otherwise('/not-found');
        }
    ]);

    angular.module('calypso').run([
        'AppConfig',
        (AppConfig: calypso.Services.AppConfig) => {
            // We're currently always using Substances
            AppConfig.loadSubmissionTypes('SUBSTANCE');
        }
    ]);
}
