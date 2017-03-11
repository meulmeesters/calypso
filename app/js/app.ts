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
        'ngRoute',
        'calypso.services',
        'calypso.directives'
    ]);

    /**
     * Setup injectable constants for libs
     */
    angular.module('calypso').constant('_', _);

    /**
     * Configure routes
     */
    angular.module('calypso').config([
        '$routeProvider',
        '$compileProvider',
        ($routeProvider: any,
         $compileProvider: ng.ICompileProvider) => {

            $compileProvider.debugInfoEnabled(false);

            $routeProvider
                .when('/', {
                    redirectTo: '/substances'
                })
                .when('/substances',{
                    templateUrl: Templates.SUBSTANCES_TPL
                })
                .when('/substances/new',{
                    templateUrl: Templates.NEW_SUBSTANCE_TPL
                })
                .when('/endpointstudies',{
                    templateUrl: Templates.ENDPOINTSTUDIES_TPL
                })
                .otherwise({
                    templateUrl: Templates.NOT_FOUND_TPL
                });
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
