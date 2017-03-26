module calypso.Directives {

    import Templates = calypso.Const.Templates;
    import Models = calypso.Models;
    import Events = calypso.Const.Events;

    interface StateParams extends angular.ui.IStateParamsService {
        entityType: string
        entityKey: string
    }

    interface Scope extends ng.IScope {
        state: {
            title?: string
            showHamburger: boolean
        }
        goHome: (event: any) => void
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
                    $scope.state = {
                        showHamburger: true
                    };
                    $scope.toggleSidebar = () => {
                        EventBus.publish(Events.toggleSideBar);
                    };

                    $scope.goHome = (event: any) => {
                        event.preventDefault();
                        let context = DB.getEntityContext();
                        $state.go(context.state || 'entities.substances');
                    };

                    $rootScope.$on('$stateChangeSuccess', () => {
                        $rootScope.overlay = false;
                        if ($state.current.name === 'entities') {
                            $state.go('entities.substances');
                        }
                        else {
                            if ($stateParams.entityType) {
                                let context = DB.getEntityContext();
                                if (!$stateParams.entityKey || !angular.isObject(context)) {
                                    DB.setEntityContext(calypso.Const.Entities[$stateParams.entityType]);
                                }
                            }
                            else {
                                DB.setEntityContext($state.current.data);
                            }
                        }

                        let context = DB.getEntityContext();
                        $scope.state.showHamburger = !$stateParams.entityKey || context.sections;
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
