module calypso.Services {

    export class Credentials {

        public getUser() {
            return 'SuperUser';
        }

        public getPass() {
            return '%PASSWORD%';
        }
    }

    angular.module('calypso.services').service('Credentials', Credentials);
}