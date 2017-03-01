module calypso.Directives {

    import Templates = calypso.Const.Templates;
    import Models = calypso.Models;

    interface Scope extends ng.IScope {
        iuclidEndPointStudies: Models.IuclidEndPointStudy[]
        openIuclidEndPointStudy: (iuclidEndPointStudy: Models.IuclidEndPointStudy) => void
        favoriteIuclidEndPointStudy: (iuclidEndPointStudy: Models.IuclidEndPointStudy, $event: any) => void
    }

    angular.module('calypso.directives').directive('iuclidEndPointStudyList', [
        '$window',
        'DB',
        'EventBus',
        ($window: ng.IWindowService,
         DB: calypso.Services.DB,
         EventBus: calypso.Services.EventBus) => {
            return {
                restrict: 'E',
                scope: {},
                templateUrl: Templates.IUCLID_END_POINT_STUDY_LIST_TPL,
                link: (scope: Scope, element: ng.IAugmentedJQuery) => {
                    scope.iuclidEndPointStudies = DB.getIuclidEndPointStudies();

                    scope.openIuclidEndPointStudy = (iuclidEndPointStudy: Models.IuclidEndPointStudy) => {
                        if (iuclidEndPointStudy && iuclidEndPointStudy.clickUri) {
                            $window.open(iuclidEndPointStudy.clickUri);
                        }
                    };

                    scope.favoriteIuclidEndPointStudy = (iuclidEndPointStudy: Models.IuclidEndPointStudy, $event: any) => {
                        $event.preventDefault();
                        $event.stopPropagation();
                        let itemKey = calypso.Const.LocalStorage.FAVORITE_IUCLID_END_POINT_STUDIES;
                        let favoritesStr = $window.localStorage.getItem(itemKey);
                        let favorites = (favoritesStr) ? JSON.parse(favoritesStr) : {};

                        if (iuclidEndPointStudy._favorite === true) {
                            iuclidEndPointStudy._favorite = false;
                            delete favorites[iuclidEndPointStudy.key];
                        } else {
                            iuclidEndPointStudy._favorite = true;
                            favorites[iuclidEndPointStudy.key] = true;
                        }

                        $window.localStorage.setItem(itemKey, JSON.stringify(favorites));
                    };

                    EventBus.subscribe(calypso.Const.Events.loadIuclidEndPointStudies, scope, () => {
                        document.querySelector('div.iuclid-end-point-study-list').scrollTop = 0;
                    });
                }
            }
        }
    ]);
}
