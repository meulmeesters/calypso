module calypso.Directives {

    import Templates = calypso.Const.Templates;
    import Models = calypso.Models;
    import Events = calypso.Const.Events;

    interface StateParams extends angular.ui.IStateParamsService {
        entityType: string
    }

    interface Scope extends ng.IScope {
        state: {
            title?: string
        }
        onSubmissionTypeSelect: (type: Models.SubmissionType) => void
        toggleSidebar: () => void
    }

    angular.module('calypso.directives').directive('searchBar', [
        '$rootScope',
        '$state',
        '$stateParams',
        'DB',
        'EventBus',
        ($rootScope: RootScope,
         $state: angular.ui.IStateService,
         $stateParams: StateParams,
         DB: calypso.Services.DB,
         EventBus: calypso.Services.EventBus) => {
            return {
                restrict: 'E',
                replace: true,
                scope: {},
                templateUrl: Templates.SEARCH_BAR_TPL,
                link: ($scope: Scope) => {
                    $scope.state = {};
                    $scope.toggleSidebar = () => {
                        EventBus.publish(Events.toggleSideBar);
                    };

                    $rootScope.$on('$stateChangeSuccess', () => {
                        if ($state.current.name === 'entities') {
                            $state.go('entities.substances');
                        }
                        else {
                            if ($stateParams.entityType) {
                                DB.setEntityContext(calypso.Const.Entities[$stateParams.entityType]);
                            }
                            else {
                                DB.setEntityContext($state.current.data);
                            }
                        }
                    });

                    EventBus.subscribe(Events.setTitle, $scope, (title: string) => {
                        if (angular.isString(title)) {
                            $scope.state.title = title;
                        }
                    })
                }
            }
        }
    ]);
}
