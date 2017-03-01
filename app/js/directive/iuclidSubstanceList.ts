module calypso.Directives {

    import Templates = calypso.Const.Templates;
    import Models = calypso.Models;

    interface Scope extends ng.IScope {
        iuclidSubstances: Models.IuclidSubstance[]
        openIuclidSubstance: (iuclidSubstance: Models.IuclidSubstance) => void
        favoriteIuclidSubstance: (iuclidSubstance: Models.IuclidSubstance, $event: any) => void
    }

    angular.module('calypso.directives').directive('iuclidSubstanceList', [
        '$window',
        'DB',
        'EventBus',
        ($window: ng.IWindowService,
         DB: calypso.Services.DB,
         EventBus: calypso.Services.EventBus) => {
            return {
                restrict: 'E',
                scope: {},
                templateUrl: Templates.IUCLID_SUBSTANCE_LIST_TPL,
                link: (scope: Scope, element: ng.IAugmentedJQuery) => {
                    scope.iuclidSubstances = DB.getIuclidSubstances();

                    scope.openIuclidSubstance = (iuclidSubstance: Models.IuclidSubstance) => {
                        if (iuclidSubstance && iuclidSubstance.clickUri) {
                            $window.open(iuclidSubstance.clickUri);
                        }
                    };

                    scope.favoriteIuclidSubstance = (iuclidSubstance: Models.IuclidSubstance, $event: any) => {
                        $event.preventDefault();
                        $event.stopPropagation();
                        let itemKey = calypso.Const.LocalStorage.FAVORITE_IUCLID_SUBSTANCES;
                        let favoritesStr = $window.localStorage.getItem(itemKey);
                        let favorites = (favoritesStr) ? JSON.parse(favoritesStr) : {};

                        if (iuclidSubstance._favorite === true) {
                            iuclidSubstance._favorite = false;
                            delete favorites[iuclidSubstance.key];
                        } else {
                            iuclidSubstance._favorite = true;
                            favorites[iuclidSubstance.key] = true;
                        }

                        $window.localStorage.setItem(itemKey, JSON.stringify(favorites));
                    };

                    EventBus.subscribe(calypso.Const.Events.loadIuclidSubstances, scope, () => {
                        document.querySelector('div.iuclid-substance-list').scrollTop = 0;
                    });
                }
            }
        }
    ]);
}
