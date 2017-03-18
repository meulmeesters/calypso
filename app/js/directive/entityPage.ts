module calypso.Directives {

    import Templates = calypso.Const.Templates;
    import Events = calypso.Const.Events;


    interface Scope extends ng.IScope {
        state: {
            new_link: string
            treeOpen: boolean
        }
    }

    angular.module('calypso.directives').directive('entityPage', [
        '$rootScope',
        '$timeout',
        '$state',
        'DB',
        'EventBus',
        ($rootScope: RootScope,
         $timeout: ng.ITimeoutService,
         $state: angular.ui.IStateService,
         DB: calypso.Services.DB,
         EventBus: calypso.Services.EventBus) => {
            return {
                restrict: 'E',
                scope: {},
                templateUrl: Templates.ENTITIES_TPL,
                link: ($scope: Scope) => {
                    $scope.state = {
                        new_link: null,
                        treeOpen: false
                    };

                    let setContext = function() {
                        let entityType = $state.current.url.replace('/', '');
                        let entityContext = calypso.Const.Entities[entityType];

                        $scope.state.new_link = entityType;
                        DB.setEntityContext(entityContext);
                    };

                    let offChangeHandler = $rootScope.$on('$stateChangeSuccess', () => {
                        setContext();
                        hideSideBar();
                    });

                    let toggleSideBar = function() {
                        $scope.state.treeOpen = !$scope.state.treeOpen;
                        if (!$scope.state.treeOpen) {
                            // If we're closing the side bar it's nice
                            // to wait until the bar is closed before
                            // removing the overlay
                            $timeout(() => {
                                $rootScope.overlay = false;
                            }, 200);
                        } else {
                            $rootScope.overlay = true;
                        }
                    };

                    let hideSideBar = function() {
                        $scope.state.treeOpen = false;
                        $rootScope.overlay = false;
                    };

                    $scope.$on('$destroy', () => {
                        offChangeHandler();
                        EventBus.unsubscribe(toggleSideBarToken);
                        EventBus.unsubscribe(hideSideBarToken);
                    });

                    let toggleSideBarToken = EventBus.subscribe(Events.toggleSideBar, $scope, toggleSideBar);
                    let hideSideBarToken = EventBus.subscribe(Events.hideSideBar, $scope, hideSideBar);

                    setContext();
                }
            }
        }
    ]);
}
