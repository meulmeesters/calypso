module calypso.Directives {

    import Templates = calypso.Const.Templates;
    import Models = calypso.Models;

    interface Scope extends ng.IScope {
        curPage: number
        totalPages: number
        first: () => void
        prev: () => void
        next: () => void
        last: () => void
    }

    angular.module('calypso.directives').directive('paging', [
        'EventBus',
        'DB',
        (EventBus: calypso.Services.EventBus,
         DB: calypso.Services.DB) => {
            return {
                restrict: 'E',
                scope: {},
                templateUrl: Templates.PAGING_TPL,
                link: (scope: Scope) => {
                    scope.curPage = 1;
                    scope.totalPages = 1;

                    scope.prev = () => {
                        let paging = DB.getPaging();
                        let newOffset = (paging.offset - paging.limit);

                        DB.setPaging({
                            limit: paging.limit,
                            offset: newOffset < 0 ? 0 : newOffset
                        });
                        EventBus.publish(calypso.Const.Events.performSearch);

                        if (scope.curPage > 1) {
                            scope.curPage -= 1;
                        }
                    };

                    scope.next = () => {
                        let paging = DB.getPaging();
                        let newOffset = (paging.offset + paging.limit);

                        DB.setPaging({
                            limit: paging.limit,
                            offset: newOffset > (scope.totalPages * paging.limit) ? (scope.totalPages * paging.limit) : newOffset
                        });
                        EventBus.publish(calypso.Const.Events.performSearch);

                        if (scope.curPage < scope.totalPages) {
                            scope.curPage += 1;
                        }
                    };

                    EventBus.subscribe(calypso.Const.Events.loadIuclidSubstances, scope, (response: Models.SearchRes<Models.IuclidSubstance>) => {
                        let paging = DB.getPaging();

                        scope.totalPages = Math.ceil(response.totalCount / paging.limit);
                        if (response.results.length === 0) {
                            scope.curPage = 0;
                        } else {
                            scope.curPage = (Math.floor(paging.offset / paging.limit) + 1);
                        }
                    });

                    EventBus.subscribe(calypso.Const.Events.applyFilters, scope, () => {
                        let paging = DB.getPaging();

                        DB.setPaging({
                            limit: paging.limit,
                            offset: 0
                        });

                        scope.curPage = 1;
                    }, 1);
                }
            }
        }
    ]);
}
