module calypso.Directives {

    import Templates = calypso.Const.Templates;
    import Models = calypso.Models;

    interface Scope extends ng.IScope {
        filter: Models.SearchFilter
        onChange: (option: Models.IuclidSubstanceFilterOption, filter: Models.IuclidSubstanceFilter) => void
    }

    angular.module('calypso.directives').directive('iuclidSubstanceFilter', [
        '_',
        'DB',
        'EventBus',
        (_: _.LoDashStatic,
         DB: calypso.Services.DB,
         EventBus: calypso.Services.EventBus) => {
            return {
                restrict: 'E',
                scope: {
                    filter: '='
                },
                templateUrl: Templates.IUCLID_SUBSTANCE_FILTER_TPL,
                link: (scope: Scope) => {

                    scope.onChange = (option: Models.IuclidSubstanceFilterOption, iuclidSubstancefilter: Models.IuclidSubstanceFilter) => {
                        switch (iuclidSubstancefilter.type) {
                        case 'checkbox':
                            // If there are any options which are selected then add this filter
                            // otherwise it should be removed
                            let event = option.value === true ?
                                calypso.Const.Events.addFilter : calypso.Const.Events.removeFilter;

                            // If this is not a multi filter then we need to remove any other selections made
                            if (option.multi === false) {
                                iuclidSubstancefilter.options.forEach((_option: Models.IuclidSubstanceFilterOption) => {
                                    if (_option.key !== option.key && _option.value === true) {
                                        _option.skipApply = true;
                                        _option.value = false;
                                        EventBus.publish(calypso.Const.Events.removeFilter, _option);
                                    }
                                });
                            }

                            EventBus.publish(event, option);
                            break;
                        }
                    };
                }
            }
        }
    ]);
}
