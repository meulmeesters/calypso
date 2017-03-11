module calypso.Directives {

    angular.module('calypso.directives').directive('ngxActiveCls', [
        '$location',
        function ($location: ng.ILocationService) {
            return {
                restrict: 'A',
                link: ($scope: any, element: ng.IAugmentedJQuery) => {
                    function _configCls() {
                        let el: any = element[0];
                        let currPath = $location.path();
                        let aPath = el.hash ? el.hash.replace('#', '') : el.pathname;

                        if (currPath.split('/')[1] === aPath.split('/')[1]) {
                            el.classList.add('active');
                        }
                        else {
                            el.classList.remove('active');
                        }
                    }

                    $scope.$on('$locationChangeSuccess', _configCls);
                    _configCls();
                }
            };
        }
    ]);
}