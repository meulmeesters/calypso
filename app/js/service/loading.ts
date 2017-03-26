module calypso.Services {

    let self: any;

    export class Loading {
        static $inject = [
            '$rootScope'
        ];

        constructor(private $rootScope: RootScope) {
            self = this;
        }

        private _shows = 0;

        public show() {
            self._shows += 1;
            self.$rootScope.loading = true;
        }

        public hide() {
            self._shows -= 1;

            if (self._shows <= 0) {
                self.$rootScope.loading = false;
                self._shows = 0;
            }
        }
    }

    angular.module('calypso.services').service('Loading', Loading);
}
