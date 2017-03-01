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

             $routeProvider.when('/', {
                 templateUrl: Templates.HOME_TPL
             }).when('/substances',{
                 templateUrl: Templates.SUBSTANCES_TPL
             }).when('/endpointstudies',{
                 templateUrl: Templates.ENDPOINTSTUDIES_TPL
             }).when('/substances/new',{
                 templateUrl: Templates.NEW_SUBSTANCE_TPL
             }).when('/picklist',{
                 templateUrl: Templates.IUCLID_ATTRIBUTE_PICK_LIST_TPL
             }).otherwise({
                 templateUrl: Templates.NOT_FOUND_TPL
             });
        }
    ]);
}
