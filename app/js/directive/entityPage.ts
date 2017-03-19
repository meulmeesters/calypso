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
        '$parse',
        '$state',
        'DB',
        'EventBus',
        ($rootScope: RootScope,
         $timeout: ng.ITimeoutService,
         $parse: ng.IParseService,
         $state: angular.ui.IStateService,
         DB: calypso.Services.DB,
         EventBus: calypso.Services.EventBus) => {
            return {
                restrict: 'E',
                scope: {},
                templateUrl: Templates.ENTITIES_TPL,
                link: ($scope: Scope) => {
                    let entityContext = DB.getEntityContext();

                    $scope.state = {
                        new_link: $parse('name')(entityContext),
                        treeOpen: false
                    };

                    EventBus.publish(Events.setTitle, `${$parse('title')(entityContext)}`);

                    let setContext = function() {
                        let entityContext = DB.getEntityContext();

                        $scope.state.new_link = $parse('name')(entityContext);
                        EventBus.publish(Events.setTitle, `${$parse('title')(entityContext)}`);
                    };
                    setContext();

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

                    let offChangeHandler = $rootScope.$on('$stateChangeSuccess', () => {
                        hideSideBar();
                        setContext();
                    });
                    let toggleSideBarToken = EventBus.subscribe(Events.toggleSideBar, $scope, toggleSideBar);
                    let hideSideBarToken = EventBus.subscribe(Events.hideSideBar, $scope, hideSideBar);

                    $scope.$on('$destroy', () => {
                        offChangeHandler();
                        EventBus.unsubscribe(toggleSideBarToken);
                        EventBus.unsubscribe(hideSideBarToken);
                    });
                }
            }
        }
    ]);
}
