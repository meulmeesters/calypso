module calypso.Services {

    import Models = calypso.Models;

    let self: any;

    export interface Data {
        submissionTypes: Models.SubmissionType[]
        submissionType: Models.SubmissionType
        substances: Models.Substance[]
        sort: Models.SearchSort
        paging: Models.SearchPaging
    }

    export class DB {
        static $inject = [
            '$parse',
            '_',
            'EventBus'
        ];

        constructor(private $parse: ng.IParseService,
                    private _: _.LoDashStatic,
                    private EventBus: calypso.Services.EventBus) {
            self = this;

            self._db = <Data>{
                submissionTypes: [],
                submissionType: null,

                substances: [],

                paging: {
                    offset: 0,
                    limit: calypso.Const.Paging.DEFAULT_LIMIT
                }
            };

            EventBus.subscribe(calypso.Const.Events.loadSubstances, self, self.loadSubstances);
        }

        /**
         * SUBMISSION TYPES
         */
        public setSubmissionTypes(types: Models.SubmissionType[]) {
            let submissionTypes = self.getSubmissionTypes();

            submissionTypes.splice(0, submissionTypes.length);
            submissionTypes.push.apply(submissionTypes, types);
        }

        public getSubmissionTypes(): Models.SubmissionType[] {
            return self.$parse('_db.submissionTypes')(self);
        }

        public setSubmissionType(type: Models.SubmissionType) {
            self._db.submissionType = type;
        }

        public getSubmissionType(): Models.SubmissionType {
            return self.$parse('_db.submissionType')(self);
        }

        /**
         * SUBSTANCES
         */
        private loadSubstances (response: Models.SearchRes<Models.Substance>) {
            let newSubstances = response.results;
            let substances = self.getSubstances();

            substances.splice(0, substances.length);
            substances.push.apply(substances, newSubstances);
        }

        public getSubstances(): Models.Substance[] {
            return self.$parse('_db.substances')(self);
        }

        /**
         * PAGING
         */
        public getPaging(): Models.SearchPaging {
            return self.$parse('_db.paging')(self);
        }

        public setPaging(paging: Models.SearchPaging) {
            self._db.paging = paging;
        }
    }

    angular.module('calypso.services').service('DB', DB);
}
