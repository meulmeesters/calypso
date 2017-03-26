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
                template: '<entity-page></entity-page>'
            });

            Object.keys(calypso.Const.Entities).forEach((entityName: string) => {
                let entityContext: Models.EntityContext = calypso.Const.Entities[entityName];
                entityContext.name = entityName;

                $stateProvider.state({
                    name: `entities.${entityName}`,
                    url: `/${entityName}`,
                    template: '<entity-list></entity-list>',
                    data: entityContext
                });
            });

            $stateProvider.state({
                name: 'new-entity',
                url: '/entities/:entityType/new',
                template: '<new-entity></new-entity>'
            });

            $stateProvider.state({
                name: 'edit-entity',
                url: '/entities/:entityType/:entityKey/:snapshot',
                template: '<edit-entity></edit-entity>'
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
            $urlRouterProvider.when('/entities', '/entities/substances');
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

/**
 * POLYFILL for String.startsWith
 */
interface String {
    startsWith: (searchString: string, position?: number) => boolean
}

if (!String.prototype.startsWith) {
    String.prototype.startsWith = function(searchString, position){
        position = position || 0;
        return this.substr(position, searchString.length) === searchString;
    };
}
