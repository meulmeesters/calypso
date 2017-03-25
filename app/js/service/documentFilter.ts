module calypso.Services {

    import Events = calypso.Const.Events;

    let self: any;

    export class DocumentFilter {
        static $inject = [
            'EventBus'
        ];

        constructor(private EventBus: calypso.Services.EventBus) {
            self = this;
        }

        /**
         * This indicates whether the document definition
         * filters are applied by default. If this is true
         * then they are, if this is false they aren't.
         *
         * The button in the form toolbar will remain pressed
         * or un-pressed across document loads
         */
        private filtersApplied: boolean = true;

        /**
         * This object contains the DocumentDefinitionFilter
         * If we do create a UI to enable people to modify the definition
         * filters we should be modifying this object.
         */
        private filters: Models.DocumentDefinitionFilter = {
            filter: {
                'OwnerLegalEntityProtection': true,
                'ThirdPartyProtection': true,
                'ThirdParty': true,
                'OwnerLegalEntity': true,
                'RoleInSupplyChain.RoleProtection': true,
                'RoleInSupplyChain.Importer': true,
                'OtherNames': true
            },
            replace: {
                'ChemicalName': {
                    attribute: 'title',
                    value: 'CHEMICAL NAME'
                },
                'PublicName': {
                    attribute: 'title',
                    value: 'PUBLIC NAME'
                },
                'ApplicantSummaryAndConclusion.ValidityCriteriaFulfilled': {
                    attribute: 'title',
                    value: 'Applicable in Canada'
                }
            }
        };

        /**
         * Just returns the filters object
         * We currently don't support setDefinitionFilter
         * but that's how people could dynamically modify
         * the definition filters
         */
        public getDefinitionFilter(): Models.DocumentDefinitionFilter {
            return self.filters;
        }

        public isApplied(): boolean {
            return self.filtersApplied;
        }

        public toggle() {
            self.filtersApplied = !self.filtersApplied;
            self.EventBus.publish(Events.filterDocumentDefinition, self.filtersApplied);
        }
    }

    angular.module('calypso.services').service('DocumentFilter', DocumentFilter);
}
