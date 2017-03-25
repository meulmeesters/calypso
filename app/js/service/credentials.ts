module calypso.Services {

    export class Credentials {

        public getUser() {
            return 'SuperUser';
        }

        public getPass() {
            return 'Baboon22!!';
        }
    }

    angular.module('calypso.services').service('Credentials', Credentials);
}