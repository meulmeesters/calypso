module calypso.Directives {

    interface Scope extends ng.IScope {
        data: {
            disabled: boolean
            value: string
        }
        placeholder: string
        values: any
        select: (value: any) => void
        onChange?: (value: any) => void
    }

    angular.module('calypso.directives').directive('ngxDropDown', [
        function () {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: calypso.Const.Templates.NGX_DROP_DOWN_TPL,
                scope: {
                    placeholder: '@',
                    values: '=',
                    onChange: '&'
                },
                link: ($scope: Scope, $element: ng.IAugmentedJQuery) => {
                    $scope.data = {
                        disabled: false,
                        value: null
                    };
                    $scope.data.value = $scope.placeholder || 'Select...';

                    $scope.select = (value: any) => {
                        $scope.data.value = value.title;
                        if (angular.isFunction($scope.onChange)) {
                            $scope.onChange({value: value});
                        }
                    };

                    $element.bind('click', (event) => {
                        event.stopPropagation();
                        if (!$scope.data.disabled) {
                            $element.toggleClass('active');
                        }
                    });
                }
            };
        }
    ]);
}
