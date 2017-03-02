module calypso.Directives {

    interface Scope extends ng.IScope {
        document: any
        loadDoc: () => void
    }

    angular.module('calypso.directives').directive('iuclidFormPicker', [
        function() {
            return {
                scope: {},
                templateUrl: calypso.Const.Templates.IUCLID_FORM_PICKER_TPL,
                link: (scope: Scope) => {

                    /**
                     * loadDoc is a function which is setting a document
                     * definition on the scope.document attribute
                     * This is used to pass to the <iuclid-form> directive
                     */
                    scope.loadDoc = function() {
                        scope.document = {
                            "identifier": "LEGAL_ENTITY",
                            "version": "2.0",
                            "provider": "domain",
                            "@lang": "en",
                            "contents": [{
                                "type": "block",
                                "name": "GeneralInfo",
                                "title": "General information",
                                "contents": [{
                                    "type": "text",
                                    "name": "LegalEntityName",
                                    "title": "Legal entity name",
                                    "required": true,
                                    "mimeType": "text/plain",
                                    "maxLength": 255
                                }, {
                                    "type": "picklist",
                                    "name": "LegalEntityType",
                                    "title": "Legal entity type",
                                    "phrasegroup": "N01"
                                }, {
                                    "type": "text",
                                    "name": "Remarks",
                                    "title": "Remarks",
                                    "mimeType": "text/plain",
                                    "maxLength": 32768
                                }, {
                                    "type": "block",
                                    "name": "OtherNames",
                                    "title": "Other names",
                                    "protectedBy": "LEGAL_ENTITY.GeneralInfo.OtherNames.DataProtection",
                                    "multiple": true,
                                    "contents": [{
                                        "type": "dataProtection",
                                        "name": "DataProtection",
                                        "title": "Flags"
                                    }, {
                                        "type": "text",
                                        "name": "Name",
                                        "title": "Name",
                                        "mimeType": "text/plain",
                                        "maxLength": 255
                                    }, {
                                        "type": "date",
                                        "name": "DateAttribute",
                                        "title": "Date Attribute",
                                        "withTime": false
                                    }, {
                                        "type": "block",
                                        "name": "ThreeLevelsDeep",
                                        "title": "We are now 3 Levels Deep!",
                                        "contents": [{
                                            "type": "numeric",
                                            "name": "NumericAttribute",
                                            "title": "Numeric Attribute",
                                            "numericType": "INTEGER",
                                            "min": 10,
                                            "max": 99
                                        }, {
                                            "type": "quantity",
                                            "name": "QuantityAttribute",
                                            "title": "Phrase Group Quantity Attribute",
                                            "unitPhraseGroup": "NL_01"
                                        }]
                                    }]
                                }]
                            }]
                        };
                    }
                }
            }
        }
    ]);
}
