module calypso.Directives {

    import Templates = calypso.Const.Templates;
    import Models = calypso.Models;
    import Events = calypso.Const.Events;

    interface Scope extends ng.IScope {
        onSubmissionTypeSelect: (type: Models.SubmissionType) => void
        toggleSidebar: () => void
    }

    angular.module('calypso.directives').directive('searchBar', [
        'DB',
        'EventBus',
        (DB: calypso.Services.DB,
         EventBus: calypso.Services.EventBus) => {
            return {
                restrict: 'E',
                replace: true,
                scope: {},
                templateUrl: Templates.SEARCH_BAR_TPL,
                link: ($scope: Scope) => {
                    $scope.toggleSidebar = () => {
                        EventBus.publish(Events.toggleSideBar);
                    };
                }
            }
        }
    ]);
}
