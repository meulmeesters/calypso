module calypso.Services {

    import API = calypso.Const.API;

    let self: any;

    export class AppConfig {
        static $inject = [
            '$http',
            'DB'
        ];

        constructor(private $http: ng.IHttpService,
                    private DB: calypso.Services.DB) {
            self = this;
        }

        public loadSubmissionTypes(entityType: string) {
            self.$http.get(API.SUBMISSION_TYPES_URI, {
                headers: { 'Accept': API.DEFINITION_ACCEPT_HEADER },
                params: { 'for': entityType }
            }).then((result: any) => {
                self.DB.setSubmissionTypes(result.data);
            }).catch((e: any) => {
                console.error(`Failed to load Submission Types: ${JSON.stringify(e)}`);
            });
        }
    }

    angular.module('calypso.services').service('AppConfig', AppConfig);
}