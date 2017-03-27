!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("FuzzySearch",[],t):"object"==typeof exports?exports.FuzzySearch=t():e.FuzzySearch=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1),s=r(a);e.exports=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(o(this,e),0===t.length)throw new Error("We need an array containing the search list");this.haystack=t,this.keys=n,this.options=s.default.extend({caseSensitive:!1,sort:!1},r)}return i(e,[{key:"search",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(""===t)return this.haystack;for(var n=[],r=0;r<this.haystack.length;r++){var o=this.haystack[r];if(0===this.keys.length){var i=e.isMatch(o,t,this.options.caseSensitive);i&&n.push({item:o,score:i})}else for(var a=0;a<this.keys.length;a++){for(var c=s.default.getDescendantProperty(o,this.keys[a]),u=!1,f=0;f<c.length;f++){var l=e.isMatch(c[f],t,this.options.caseSensitive);if(l){u=!0,n.push({item:o,score:l});break}}if(u)break}}return this.options.sort&&n.sort(function(e,t){return e.score-t.score}),n.map(function(e){return e.item})}}],[{key:"isMatch",value:function(e,t,n){n||(e=e.toLocaleLowerCase(),t=t.toLocaleLowerCase());for(var r=t.split(""),o=[],i=0,a=0;a<r.length;a++){var s=r[a];if(i=e.indexOf(s,i),i===-1)return!1;o.push(i),i++}for(var c=1,u=0;u<o.length;u++)u!==o.length-1&&(c+=o[u+1]-o[u]);return c}}]),e}()},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(){n(this,e)}return r(e,null,[{key:"extend",value:function(){for(var t={},n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];for(var i=0;i<r.length;i++){var a=r[i];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&("[object Object]"===Object.prototype.toString.call(a[s])?t[s]=e.extend(t[s],a[s]):t[s]=a[s])}return t}},{key:"getDescendantProperty",value:function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o=void 0,i=void 0,a=void 0,s=void 0,c=void 0,u=void 0;if(n){if(a=n.indexOf("."),a===-1?o=n:(o=n.slice(0,a),i=n.slice(a+1)),s=t[o],null!==s&&"undefined"!=typeof s)if(i||"string"!=typeof s&&"number"!=typeof s)if("[object Array]"===Object.prototype.toString.call(s))for(c=0,u=s.length;c<u;c++)e.getDescendantProperty(s[c],i,r);else i&&e.getDescendantProperty(s,i,r);else r.push(s)}else r.push(t);return r}}]),e}();t.default=o}])});
//# sourceMappingURL=FuzzySearch.min.js.map
var calypso;
(function (calypso) {
    var Const;
    (function (Const) {
        var API;
        (function (API) {
            API.DEFAULT_ACCEPT_HEADER = 'application/vnd.iuclid6.ext+json';
            API.DEFINITION_ACCEPT_HEADER = 'application/vnd.iuclid6.ext+json;type=iuclid6.Definition';
            API.DOCUMENT_CONTENT_TYPE_HEADER = 'application/vnd.iuclid6.ext+json; type=iuclid6.Document';
            API.BASE_URL = 'https://iuclid.ca/api';
            API.BASE_URI = API.BASE_URL + "/iuclid6-ext/api/ext/v1";
            API.BASE_DEFINITIONS_URI = API.BASE_URI + "/definition";
            API.BASE_API_URI = API.BASE_URI + "/query/iuclid6";
            API.BASE_RAW_URI = API.BASE_URI + "/raw";
            API.SUBMISSION_TYPES_URI = API.BASE_DEFINITIONS_URI + "/submissiontypes";
            API.DOCUMENT_TREE_URI = API.BASE_DEFINITIONS_URI + "/tree";
        })(API = Const.API || (Const.API = {}));
    })(Const = calypso.Const || (calypso.Const = {}));
})(calypso || (calypso = {}));

var calypso;
(function (calypso) {
    var Const;
    (function (Const) {
        Const.Entities = {
            substances: {
                docType: 'SUBSTANCE',
                displayName: 'Substance',
                title: 'Substances',
                state: 'entities.substances',
                legal: true,
                sections: true
            },
            mixtures: {
                docType: 'MIXTURE',
                displayName: 'Mixture',
                title: 'Mixtures',
                state: 'entities.mixtures',
                legal: true,
                sections: true
            },
            templates: {
                docType: 'TEMPLATE',
                displayName: 'Template',
                title: 'Templates',
                state: 'entities.templates',
                legal: true,
                sections: true
            },
            categories: {
                docType: 'CATEGORY',
                displayName: 'Category',
                title: 'Categories',
                state: 'entities.categories',
                legal: true,
                sections: false
            },
            literature: {
                docType: 'LITERATURE',
                displayName: 'Literature',
                title: 'Literature',
                state: 'entities.literature',
                legal: false,
                sections: false
            },
            dossier: {
                docType: 'DOSSIER',
                displayName: 'Dossier',
                title: 'Dossier',
                state: 'entities.dossier',
                legal: false,
                sections: true
            },
            'legal-entities': {
                docType: 'LEGAL_ENTITY',
                displayName: 'Legal Entity',
                title: 'Legal Entities',
                state: 'entities.legal-entities',
                legal: false,
                sections: false
            },
            annotations: {
                docType: 'ANNOTATION',
                displayName: 'Annotation',
                title: 'Annotations',
                state: 'entities.annotation',
                legal: false,
                sections: false
            },
            sites: {
                docType: 'SITE',
                displayName: 'Site',
                title: 'Sites',
                state: 'entities.site',
                legal: true,
                sections: false
            },
            'reference-substances': {
                docType: 'REFERENCE_SUBSTANCE',
                displayName: 'Reference Substance',
                title: 'Reference Substances',
                state: 'entities.reference-substances',
                legal: false,
                sections: false
            },
            contacts: {
                docType: 'CONTACT',
                displayName: 'Contact',
                title: 'Contacts',
                state: 'entities.contacts',
                legal: false,
                sections: false
            }
        };
    })(Const = calypso.Const || (calypso.Const = {}));
})(calypso || (calypso = {}));

var calypso;
(function (calypso) {
    var Const;
    (function (Const) {
        var Events;
        (function (Events) {
            Events.loadSubstances = 'substances.load';
            Events.loadSubmissionType = 'submission-type.load';
            Events.loadDocumentDefinition = 'documentDefinition.load';
            Events.loadDocumentData = 'documentData.load';
            Events.filterDocumentDefinition = 'documentDefinition.filter';
            Events.entitySearch = 'entity.search';
            Events.toggleSideBar = 'side-bar.toggle';
            Events.hideSideBar = 'side-bar.hide';
            Events.collapseAllSideBarSections = 'side-bar.sections.collapse';
            Events.setCompletedSections = 'completed-sections.set';
            Events.setTitle = 'title.set';
            Events.collapseAllSections = 'sections.collapse';
            Events.loadTabs = 'tabs.load';
        })(Events = Const.Events || (Const.Events = {}));
    })(Const = calypso.Const || (calypso.Const = {}));
})(calypso || (calypso = {}));

var calypso;
(function (calypso) {
    var Const;
    (function (Const) {
        var Paging;
        (function (Paging) {
            Paging.DEFAULT_LIMIT = 20;
        })(Paging = Const.Paging || (Const.Paging = {}));
    })(Const = calypso.Const || (calypso.Const = {}));
})(calypso || (calypso = {}));

var calypso;
(function (calypso) {
    var Const;
    (function (Const) {
        var Templates;
        (function (Templates) {
            var BASE = '/templates/';
            // PAGES
            Templates.ENTITIES_TPL = BASE + 'entities.html';
            Templates.NEW_ENTITY_TPL = BASE + 'new-entity.html';
            Templates.EDIT_ENTITY_TPL = BASE + 'edit-entity.html';
            Templates.NOT_FOUND_TPL = BASE + 'not-found.html';
            Templates.SEARCH_BAR_TPL = BASE + 'directives/search-bar.html';
            Templates.ENTITY_LIST_TPL = BASE + 'directives/entity-list.html';
            Templates.SIDE_TREE_TPL = BASE + 'directives/side-tree/side-tree.html';
            Templates.SIDE_TREE_SECTION_TPL = BASE + 'directives/side-tree/side-tree-section.html';
            /*******************************************************************************************************************
             * FORM RELATED TEMPLATES
             */
            Templates.IUCLID_FORM_TPL = BASE + 'directives/iuclid-form/iuclid-form.html';
            Templates.IUCLID_FORM_TABS_TPL = BASE + 'directives/iuclid-form/form-tabs.html';
            Templates.IUCLID_FORM_TOOLBAR_TPL = BASE + 'directives/iuclid-form/form-toolbar.html';
            Templates.IUCLID_FORM_PICKER_TPL = BASE + 'directives/iuclid-form/iuclid-form-picker.html';
            Templates.IUCLID_FORM_CONTENTS_TPL = BASE + 'directives/iuclid-form/iuclid-form-contents.html';
            Templates.IUCLID_ATTRIBUTE_BLOCK_TPL = BASE + 'directives/iuclid-attributes/iuclid-block.html';
            Templates.IUCLID_ATTRIBUTE_CHECKBOX_TPL = BASE + 'directives/iuclid-attributes/iuclid-checkbox.html';
            Templates.IUCLID_ATTRIBUTE_TEXT_TPL = BASE + 'directives/iuclid-attributes/iuclid-text.html';
            Templates.IUCLID_ATTRIBUTE_PICK_LIST_TPL = BASE + 'directives/iuclid-attributes/iuclid-pick-list.html';
            Templates.IUCLID_ATTRIBUTE_ATTACHMENT_TPL = BASE + 'directives/iuclid-attributes/iuclid-attachment.html';
            Templates.IUCLID_ATTRIBUTE_RANGE_TPL = BASE + 'directives/iuclid-attributes/iuclid-range.html';
            Templates.IUCLID_ATTRIBUTE_NUMERIC_TPL = BASE + 'directives/iuclid-attributes/iuclid-numeric.html';
            Templates.IUCLID_ATTRIBUTE_DATE_TPL = BASE + 'directives/iuclid-attributes/iuclid-date.html';
        })(Templates = Const.Templates || (Const.Templates = {}));
    })(Const = calypso.Const || (calypso.Const = {}));
})(calypso || (calypso = {}));

if (!String.prototype.startsWith) {
    String.prototype.startsWith = function (searchString, position) {
        position = position || 0;
        return this.substr(position, searchString.length) === searchString;
    };
}
var calypso;
(function (calypso) {
    var Templates = calypso.Const.Templates;
    /**
     * Module to contain all calypso Services
     */
    angular.module('calypso.services', []);
    /**
     * Module to contain all calypso Directives
     */
    angular.module('calypso.directives', []);
    /**
     * Main Calypso Search Module
     */
    angular.module('calypso', [
        'ui.router',
        'calypso.services',
        'calypso.directives'
    ]);
    /**
     * Setup injectable constants for libs
     */
    angular.module('calypso').constant('_', _);
    angular.module('calypso').constant('FuzzySearch', window.FuzzySearch);
    /**
     * Configure routes
     */
    angular.module('calypso').config([
        '$stateProvider',
        '$urlRouterProvider',
        '$compileProvider',
        function ($stateProvider, $urlRouterProvider, $compileProvider) {
            $compileProvider.debugInfoEnabled(false);
            $stateProvider.state({
                name: 'entities',
                url: '/entities',
                template: '<entity-page></entity-page>'
            });
            Object.keys(calypso.Const.Entities).forEach(function (entityName) {
                var entityContext = calypso.Const.Entities[entityName];
                entityContext.name = entityName;
                $stateProvider.state({
                    name: "entities." + entityName,
                    url: "/" + entityName,
                    template: '<entity-list></entity-list>',
                    data: entityContext
                });
            });
            $stateProvider.state({
                name: 'new-entity',
                url: '/entities/:entityType/new',
                template: '<new-entity></new-entity>'
            });
            $stateProvider.state({
                name: 'edit-entity',
                url: '/entities/:entityType/:entityKey/:snapshot',
                template: '<edit-entity></edit-entity>'
            });
            $stateProvider.state({
                name: 'not-found',
                url: '/not-found',
                templateUrl: Templates.NOT_FOUND_TPL
            });
            $urlRouterProvider.when('', '/entities/substances');
            $urlRouterProvider.when('/', '/entities/substances');
            $urlRouterProvider.when('/entities', '/entities/substances');
            $urlRouterProvider.otherwise('/not-found');
        }
    ]);
    angular.module('calypso').run([
        'AppConfig',
        function (AppConfig) {
            // We're currently always using Substances
            AppConfig.loadSubmissionTypes('SUBSTANCE');
        }
    ]);
})(calypso || (calypso = {}));

var calypso;
(function (calypso) {
    var Services;
    (function (Services) {
        var API = calypso.Const.API;
        var self;
        var AppConfig = (function () {
            function AppConfig($http, DB) {
                this.$http = $http;
                this.DB = DB;
                self = this;
            }
            AppConfig.prototype.loadSubmissionTypes = function (entityType) {
                self.$http.get(API.SUBMISSION_TYPES_URI, {
                    headers: { 'Accept': API.DEFINITION_ACCEPT_HEADER },
                    params: { 'for': entityType }
                }).then(function (result) {
                    self.DB.setSubmissionTypes(result.data);
                })["catch"](function (e) {
                    console.error("Failed to load Submission Types: " + JSON.stringify(e));
                });
            };
            return AppConfig;
        }());
        AppConfig.$inject = [
            '$http',
            'DB'
        ];
        Services.AppConfig = AppConfig;
        angular.module('calypso.services').service('AppConfig', AppConfig);
    })(Services = calypso.Services || (calypso.Services = {}));
})(calypso || (calypso = {}));

var calypso;
(function (calypso) {
    var Services;
    (function (Services) {
        var Credentials = (function () {
            function Credentials() {
            }
            Credentials.prototype.getUser = function () {
                return 'SuperUser';
            };
            Credentials.prototype.getPass = function () {
                return '%PASSWORD%';
            };
            return Credentials;
        }());
        Services.Credentials = Credentials;
        angular.module('calypso.services').service('Credentials', Credentials);
    })(Services = calypso.Services || (calypso.Services = {}));
})(calypso || (calypso = {}));

var calypso;
(function (calypso) {
    var Services;
    (function (Services) {
        var self;
        var DB = (function () {
            function DB($parse, _, EventBus) {
                this.$parse = $parse;
                this._ = _;
                this.EventBus = EventBus;
                self = this;
                self._db = {
                    submissionTypes: [],
                    submissionType: null,
                    entities: {},
                    entityContext: null,
                    completedSections: {},
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
            DB.prototype.setSubmissionTypes = function (types) {
                var submissionTypes = self.getSubmissionTypes();
                submissionTypes.splice(0, submissionTypes.length);
                submissionTypes.push.apply(submissionTypes, types);
            };
            DB.prototype.getSubmissionTypes = function () {
                return self.$parse('_db.submissionTypes')(self);
            };
            DB.prototype.setSubmissionType = function (type) {
                self._db.submissionType = type;
            };
            DB.prototype.getSubmissionType = function () {
                return self.$parse('_db.submissionType')(self);
            };
            /**
             * SUBSTANCES
             */
            DB.prototype.loadEntities = function (response) {
                var newEntities = response.results;
                var entities = self.getEntities(response.docType);
                entities.splice(0, entities.length);
                entities.push.apply(entities, newEntities);
            };
            DB.prototype.getEntities = function (docType) {
                return self.$parse("_db.entities." + docType)(self);
            };
            DB.prototype.setEntities = function (docType, entities) {
                self._db.entities[docType] = entities;
            };
            /**
             * PAGING
             */
            DB.prototype.getPaging = function () {
                return self.$parse('_db.paging')(self);
            };
            DB.prototype.setPaging = function (paging) {
                self._db.paging = paging;
            };
            DB.prototype.getEntityContext = function () {
                return self.$parse('_db.entityContext')(self);
            };
            DB.prototype.setEntityContext = function (context) {
                self._db.entityContext = context;
            };
            DB.prototype.getCompletedSections = function () {
                return self.$parse('_db.completedSections')(self);
            };
            DB.prototype.setCompletedSections = function (sections) {
                self._db.completedSections = sections;
            };
            return DB;
        }());
        DB.$inject = [
            '$parse',
            '_',
            'EventBus'
        ];
        Services.DB = DB;
        angular.module('calypso.services').service('DB', DB);
    })(Services = calypso.Services || (calypso.Services = {}));
})(calypso || (calypso = {}));

var calypso;
(function (calypso) {
    var Services;
    (function (Services) {
        var Events = calypso.Const.Events;
        var self;
        var DocumentFilter = (function () {
            function DocumentFilter(EventBus) {
                this.EventBus = EventBus;
                /**
                 * This indicates whether the document definition
                 * filters are applied by default. If this is true
                 * then they are, if this is false they aren't.
                 *
                 * The button in the form toolbar will remain pressed
                 * or un-pressed across document loads
                 */
                this.filtersApplied = true;
                /**
                 * This object contains the DocumentDefinitionFilter
                 * If we do create a UI to enable people to modify the definition
                 * filters we should be modifying this object.
                 */
                this.filters = {
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
                self = this;
            }
            /**
             * Just returns the filters object
             * We currently don't support setDefinitionFilter
             * but that's how people could dynamically modify
             * the definition filters
             */
            DocumentFilter.prototype.getDefinitionFilter = function () {
                return self.filters;
            };
            DocumentFilter.prototype.isApplied = function () {
                return self.filtersApplied;
            };
            DocumentFilter.prototype.toggle = function () {
                self.filtersApplied = !self.filtersApplied;
                self.EventBus.publish(Events.filterDocumentDefinition, self.filtersApplied);
            };
            return DocumentFilter;
        }());
        DocumentFilter.$inject = [
            'EventBus'
        ];
        Services.DocumentFilter = DocumentFilter;
        angular.module('calypso.services').service('DocumentFilter', DocumentFilter);
    })(Services = calypso.Services || (calypso.Services = {}));
})(calypso || (calypso = {}));

var calypso;
(function (calypso) {
    var Services;
    (function (Services) {
        var API = calypso.Const.API;
        var self;
        var DocumentService = (function () {
            function DocumentService($q, $http, $timeout, $parse, $stateParams, DB, Credentials, DocumentFilter) {
                this.$q = $q;
                this.$http = $http;
                this.$timeout = $timeout;
                this.$parse = $parse;
                this.$stateParams = $stateParams;
                this.DB = DB;
                this.Credentials = Credentials;
                this.DocumentFilter = DocumentFilter;
                this._cache = {};
                self = this;
            }
            DocumentService.prototype.getDocumentDefinition = function (code) {
                var deferred = self.$q.defer();
                var URI = API.BASE_DEFINITIONS_URI + "/document/" + code;
                if (self._cache[code]) {
                    self.$timeout(function () {
                        deferred.resolve(angular.copy(self._cache[code]));
                    }, 50);
                }
                else {
                    self.$http.get(URI, {
                        /**
                         * Weirdly enough some of the document definition endpoints will not return
                         * a JSON Object unless we ensure that the request is unique (I think there's
                         * some caching taking place in GlassFish. Either way adding a query parameter
                         * with the current timestamp will make it unique. And we can handle
                         * caching within the service
                         */
                        params: { '_c': new Date().getTime() },
                        headers: { 'Accept': API.DEFINITION_ACCEPT_HEADER }
                    }).then(function (result) {
                        self._cache[code] = angular.copy(result.data);
                        deferred.resolve(result.data);
                    })["catch"](function (e) {
                        alert('Failed to Get Document Definition: ' + JSON.stringify(e));
                        deferred.reject(e);
                    });
                }
                return deferred.promise;
            };
            DocumentService.prototype.getDocumentSections = function (code, uuid) {
                var deferred = self.$q.defer();
                var URI = API.BASE_RAW_URI + "/" + code + "/" + uuid + "/documents";
                self.$http.get(URI, {
                    params: {
                        'formatter': 'iuclid6.Document',
                        'l': '1000'
                    },
                    headers: {
                        'iuclid6-user': self.Credentials.getUser(),
                        'iuclid6-pass': self.Credentials.getPass(),
                        'Accept': API.DOCUMENT_CONTENT_TYPE_HEADER
                    }
                }).then(function (result) {
                    deferred.resolve(result.data.results);
                })["catch"](function (e) {
                    deferred.reject(e);
                });
                return deferred.promise;
            };
            DocumentService.prototype.getDocumentData = function (entityType, documentKey, documentCode) {
                var deferred = self.$q.defer();
                var URI = API.BASE_RAW_URI + "/" + entityType + "/" + documentKey + "/document/" + documentCode;
                self.$http.get(URI, {
                    params: {
                        'formatter': 'iuclid6.Document'
                    },
                    headers: {
                        'iuclid6-user': self.Credentials.getUser(),
                        'iuclid6-pass': self.Credentials.getPass()
                    }
                }).then(function (result) {
                    deferred.resolve(result.data.results);
                })["catch"](function (e) {
                    deferred.reject(e);
                });
                return deferred.promise;
            };
            DocumentService.prototype.filter = function (definition) {
                var filters = self.DocumentFilter.getDefinitionFilter();
                var traverse = function (contents, path) {
                    contents = contents.filter(function (content) {
                        var currPath = path === '' ? content.name : path + "." + content.name;
                        return filters.filter[currPath] !== true;
                    });
                    contents.forEach(function (content) {
                        var currPath = path === '' ? content.name : path + "." + content.name;
                        if (filters.replace[currPath]) {
                            var replaceInfo = filters.replace[currPath];
                            content[replaceInfo.attribute] = replaceInfo.value;
                        }
                        if (content.type === 'block') {
                            content.contents = traverse(content.contents, currPath);
                        }
                    });
                    return contents;
                };
                definition.contents = traverse(definition.contents, '');
            };
            DocumentService.prototype.apply = function (definition, data) {
                self.eachContent(definition.contents, function (content, path) {
                    if (content.type !== 'block') {
                        var val = self.$parse(path)(data);
                        if (val) {
                            switch (content.type) {
                                case 'boolean':
                                case 'text': {
                                    content.value = val;
                                    break;
                                }
                                case 'picklist': {
                                    content.value = val.code;
                                    break;
                                }
                            }
                        }
                    }
                });
            };
            DocumentService.prototype.generateJsonDocumentEnvelope = function (document, documentData) {
                var context = self.DB.getEntityContext();
                var header = {};
                var body = document.contents.reduce(self.generateJsonBody, (documentData || {})) || {};
                if (context.sectionCode && context.sectionCode !== context.docType) {
                    header.definition = context.sectionCode;
                    if (context.sectionUuid) {
                        header.key = context.sectionUuid;
                    }
                }
                else {
                    header.definition = context.docType;
                    if (self.$stateParams.entityKey) {
                        header.key = self.$stateParams.entityKey;
                    }
                }
                // TODO: Make this dynamic somehow
                // The OwnerLegalEntity is necessary to create a Substance
                // Currently I'm hard coding it to the default Legal Entity
                // when the context requires legal
                // But I guess this should be chosen somehow.
                if (context.sectionCode === context.docType && context.legal) {
                    body['OwnerLegalEntity'] = '4f88bc7f-395c-4d0b-997b-14e8c9aef605/0';
                }
                return [header, body];
            };
            DocumentService.prototype["delete"] = function (entityCode, entityUuid, sectionCode, sectionUuid) {
                var deferred = self.$q.defer();
                var URI = API.BASE_RAW_URI + "/" + entityCode + "/" + entityUuid;
                if (sectionCode && sectionUuid) {
                    URI += "/document/" + sectionCode + "/" + sectionUuid;
                }
                var requestConfig = {
                    url: URI,
                    method: 'DELETE',
                    headers: {
                        'iuclid6-user': self.Credentials.getUser(),
                        'iuclid6-pass': self.Credentials.getPass()
                    }
                };
                self.$http(requestConfig)
                    .then(function (result) {
                    deferred.resolve(result.data);
                })["catch"](function (e) {
                    deferred.reject(e);
                });
                return deferred.promise;
            };
            DocumentService.prototype.save = function (jsonDocumentEnvelope) {
                var deferred = self.$q.defer();
                var context = self.DB.getEntityContext();
                var entityUuid = self.$stateParams.entityKey;
                var isCreate = true;
                var header = jsonDocumentEnvelope[0];
                var URI = API.BASE_RAW_URI + "/" + context.docType;
                // if we're saving an existing entity
                if (entityUuid) {
                    isCreate = false;
                    URI += "/" + entityUuid;
                    // if we're editing a section within an existing entity
                    if (context.sectionCode && context.sectionCode !== context.docType) {
                        // if we're editing an existing section within an existing entity
                        if (context.sectionUuid) {
                            isCreate = false;
                            URI += "/document/" + context.sectionCode + "/" + context.sectionUuid;
                        }
                        else {
                            isCreate = true;
                            URI += "/document/" + context.sectionCode;
                        }
                    }
                }
                var requestConfig = {
                    url: URI,
                    method: isCreate ? 'POST' : 'PUT',
                    data: jsonDocumentEnvelope,
                    headers: {
                        'Content-Type': API.DOCUMENT_CONTENT_TYPE_HEADER,
                        'iuclid6-user': self.Credentials.getUser(),
                        'iuclid6-pass': self.Credentials.getPass()
                    }
                };
                self.$http(requestConfig)
                    .then(function (result) {
                    if (isCreate) {
                        var sourceParts = result.data.source.split('/');
                        header.key = sourceParts[sourceParts.length - 1];
                    }
                    deferred.resolve({
                        isCreate: isCreate,
                        header: header,
                        body: jsonDocumentEnvelope[1]
                    });
                })["catch"](function (e) {
                    deferred.reject(e);
                });
                return deferred.promise;
            };
            DocumentService.prototype.generateJsonBody = function (json, content) {
                json = json || {};
                switch (content.type) {
                    case 'block': {
                        json[content.name] = content.contents.reduce(self.generateJsonBody, {});
                        break;
                    }
                    // Same parser for text and boolean
                    case 'boolean':
                    case 'text': {
                        if (content.value) {
                            json[content.name] = content.value;
                        }
                        break;
                    }
                    case 'picklist': {
                        if (content.value) {
                            json[content.name] = {
                                code: content.value
                            };
                        }
                        break;
                    }
                }
                // cleanup empty objects
                Object.keys(json).forEach(function (key) {
                    if (json[key] === undefined) {
                        delete json[key];
                    }
                });
                return Object.keys(json).length > 0 ? json : undefined;
            };
            DocumentService.prototype.eachContent = function (contents, cb) {
                var traverse = function (contents, path) {
                    contents.forEach(function (content, idx) {
                        var currPath = path === '' ? content.name : path + "." + content.name;
                        cb(content, currPath);
                        if (content.type === 'block') {
                            traverse(content.contents, currPath);
                        }
                    });
                };
                traverse(contents, '');
            };
            DocumentService.prototype.deleteAttr = function (obj, path) {
                var partials = path.split('.');
                var attrKey = partials.pop();
                var parentPath = partials.join('.');
                var parent = self.$parse(parentPath)(obj);
                delete parent[attrKey];
            };
            return DocumentService;
        }());
        DocumentService.$inject = [
            '$q',
            '$http',
            '$timeout',
            '$parse',
            '$stateParams',
            'DB',
            'Credentials',
            'DocumentFilter'
        ];
        Services.DocumentService = DocumentService;
        angular.module('calypso.services').service('DocumentService', DocumentService);
    })(Services = calypso.Services || (calypso.Services = {}));
})(calypso || (calypso = {}));

var calypso;
(function (calypso) {
    var Services;
    (function (Services) {
        var Events = calypso.Const.Events;
        var API = calypso.Const.API;
        var self;
        var Entity = (function () {
            function Entity($window, $q, $http, EventBus, Credentials) {
                this.$window = $window;
                this.$q = $q;
                this.$http = $http;
                this.EventBus = EventBus;
                this.Credentials = Credentials;
                self = this;
            }
            Entity.prototype.search = function (docType) {
                var deferred = self.$q.defer();
                self.performSearch({
                    docType: docType
                }).then(function (response) {
                    response.docType = docType;
                    self.EventBus.publish(Events.loadSubstances, response);
                })["catch"](function (e) {
                    alert('Error: ' + JSON.stringify(e));
                })["finally"](function () {
                    deferred.resolve();
                });
                return deferred.promise;
            };
            Entity.prototype.performSearch = function (searchReq) {
                var deferred = self.$q.defer();
                var URI = API.BASE_API_URI + "/byType";
                self.$http.get(URI, {
                    params: {
                        'doc.type': searchReq.docType,
                        'l': 20,
                        'o': 0,
                        'count': true,
                        'order': 'modified-',
                        'formatter': 'iuclid6.DocumentSecuredRepresentation'
                    },
                    headers: {
                        'Accept': API.DEFAULT_ACCEPT_HEADER,
                        'iuclid6-user': self.Credentials.getUser(),
                        'iuclid6-pass': self.Credentials.getPass()
                    }
                }).then(function (result) {
                    deferred.resolve(result.data);
                })["catch"](function (error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            };
            Entity.prototype.deleteEntity = function (entity) {
                var deferred = self.$q.defer();
                var entityType = entity.representation.definition;
                var entityUuid = entity.representation.key.split('/')[0];
                var URI = API.BASE_RAW_URI + "/" + entityType + "/" + entityUuid;
                self.$http["delete"](URI, {
                    headers: {
                        'iuclid6-user': self.Credentials.getUser(),
                        'iuclid6-pass': self.Credentials.getPass()
                    }
                }).then(function () {
                    deferred.resolve();
                })["catch"](function (e) {
                    deferred.reject(e);
                });
                return deferred.promise;
            };
            return Entity;
        }());
        Entity.$inject = [
            '$window',
            '$q',
            '$http',
            'EventBus',
            'Credentials'
        ];
        Services.Entity = Entity;
        angular.module('calypso.services').service('Entity', Entity);
    })(Services = calypso.Services || (calypso.Services = {}));
})(calypso || (calypso = {}));

var calypso;
(function (calypso) {
    var Services;
    (function (Services) {
        var self;
        /**
         * This is a very simple EventBus Implementation for
         * subscribe/publish capabilities
         */
        var EventBus = (function () {
            function EventBus() {
                self = this;
                self._topics = {};
                self._subUid = -1;
            }
            EventBus.prototype.subscribe = function (topic, scope, handler, priority) {
                if (!self._topics[topic]) {
                    self._topics[topic] = [];
                }
                var token = (++self._subUid).toString();
                self._topics[topic].push({
                    token: token,
                    handler: handler,
                    scope: scope,
                    priority: priority || 10000
                });
                return token;
            };
            EventBus.prototype.publish = function (topic, args) {
                if (!self._topics[topic]) {
                    return false;
                }
                var subscribers = self._topics[topic];
                var len = subscribers ? subscribers.length : 0;
                if (len > 0) {
                    subscribers.sort(function (a, b) {
                        return a.priority - b.priority;
                    }).forEach(function (subscriber) {
                        if (angular.isFunction(subscriber.handler)) {
                            subscriber.handler.call(subscriber.scope, args);
                        }
                    });
                }
                return true;
            };
            EventBus.prototype.unsubscribe = function (token) {
                for (var topic in self._topics) {
                    if (self._topics[topic]) {
                        for (var i = 0, j = self._topics[topic].length; i < j; i++) {
                            if (self._topics[topic][i].token === token) {
                                self._topics[topic].splice(i, 1);
                                return true;
                            }
                        }
                    }
                }
                return false;
            };
            return EventBus;
        }());
        Services.EventBus = EventBus;
        angular.module('calypso.services').service('EventBus', EventBus);
    })(Services = calypso.Services || (calypso.Services = {}));
})(calypso || (calypso = {}));

var calypso;
(function (calypso) {
    var Services;
    (function (Services) {
        var API = calypso.Const.API;
        var self;
        var IuclidPhraseGroup = (function () {
            function IuclidPhraseGroup($q, $http) {
                this.$q = $q;
                this.$http = $http;
                this._cache = {};
                self = this;
            }
            IuclidPhraseGroup.prototype.get = function (code) {
                var deferred = self.$q.defer();
                var URI = API.BASE_DEFINITIONS_URI + "/phrasegroup/" + code + "/phrases";
                if (self._cache[code]) {
                    deferred.resolve(self._cache[code]);
                }
                else {
                    self.$http.get(URI)
                        .then(function (result) {
                        self._cache[code] = result.data;
                        deferred.resolve(result.data);
                    })["catch"](function (result) {
                        console.error('Error: ' + result);
                    });
                }
                return deferred.promise;
            };
            return IuclidPhraseGroup;
        }());
        IuclidPhraseGroup.$inject = [
            '$q',
            '$http'
        ];
        Services.IuclidPhraseGroup = IuclidPhraseGroup;
        angular.module('calypso.services').service('IuclidPhraseGroup', IuclidPhraseGroup);
    })(Services = calypso.Services || (calypso.Services = {}));
})(calypso || (calypso = {}));

var calypso;
(function (calypso) {
    var Services;
    (function (Services) {
        var self;
        var Loading = (function () {
            function Loading($rootScope) {
                this.$rootScope = $rootScope;
                this._shows = 0;
                self = this;
            }
            Loading.prototype.show = function () {
                self._shows += 1;
                self.$rootScope.loading = true;
            };
            Loading.prototype.hide = function () {
                self._shows -= 1;
                if (self._shows <= 0) {
                    self.$rootScope.loading = false;
                    self._shows = 0;
                }
            };
            return Loading;
        }());
        Loading.$inject = [
            '$rootScope'
        ];
        Services.Loading = Loading;
        angular.module('calypso.services').service('Loading', Loading);
    })(Services = calypso.Services || (calypso.Services = {}));
})(calypso || (calypso = {}));

var calypso;
(function (calypso) {
    var Services;
    (function (Services) {
        var API = calypso.Const.API;
        var self;
        var TreeService = (function () {
            function TreeService($q, $http, $timeout, DB) {
                this.$q = $q;
                this.$http = $http;
                this.$timeout = $timeout;
                this.DB = DB;
                this._treeCache = {};
                self = this;
            }
            TreeService.prototype._formatTreeDefinition = function (treeNode) {
                var completedSections = self.DB.getCompletedSections();
                var result = {
                    code: treeNode.code,
                    title: treeNode.title,
                    sections: {
                        completed: {
                            title: 'Completed',
                            documents: []
                        },
                        required: {
                            title: 'Required',
                            documents: []
                        },
                        endpointStudies: {
                            title: 'Endpoint Studies',
                            documents: []
                        },
                        endpointSummaries: {
                            title: 'Endpoint Summaries',
                            documents: []
                        },
                        others: {
                            title: 'Others',
                            documents: []
                        }
                    }
                };
                var _format = function (sections) {
                    if (sections && sections.length > 0) {
                        sections.forEach(function (section) {
                            section.documents.forEach(function (doc) {
                                if (completedSections[doc.code]) {
                                    result.sections.completed.documents.push(doc);
                                }
                                else if (doc.required === true) {
                                    result.sections.required.documents.push(doc);
                                }
                                else if (doc.code.toUpperCase().startsWith('ENDPOINT_STUDY_RECORD')) {
                                    result.sections.endpointStudies.documents.push(doc);
                                }
                                else if (doc.code.toUpperCase().startsWith('ENDPOINT_SUMMARY')) {
                                    result.sections.endpointSummaries.documents.push(doc);
                                }
                                else {
                                    result.sections.others.documents.push(doc);
                                }
                            });
                            _format(section.sections);
                        });
                    }
                };
                _format(treeNode.sections);
                return result;
            };
            TreeService.prototype.getTreeDefinition = function (identifier, clearCache) {
                var deferred = self.$q.defer();
                var URI = API.DOCUMENT_TREE_URI + "/" + identifier;
                if (self._treeCache[identifier] && !clearCache) {
                    self.$timeout(function () {
                        var treeDefinition = self._formatTreeDefinition(self._treeCache[identifier]);
                        deferred.resolve(treeDefinition);
                    }, 50);
                }
                else {
                    self.$http.get(URI, {
                        headers: { 'Accept': API.DEFAULT_ACCEPT_HEADER },
                        params: { 'for': 'SUBSTANCE' }
                    }).then(function (result) {
                        self._treeCache[identifier] = result.data;
                        var treeDefinition = self._formatTreeDefinition(result.data);
                        deferred.resolve(treeDefinition);
                    })["catch"](function (e) {
                        alert('Failed to Get Tree Definition: ' + JSON.stringify(e));
                    });
                }
                return deferred.promise;
            };
            return TreeService;
        }());
        TreeService.$inject = [
            '$q',
            '$http',
            '$timeout',
            'DB'
        ];
        Services.TreeService = TreeService;
        angular.module('calypso.services').service('TreeService', TreeService);
    })(Services = calypso.Services || (calypso.Services = {}));
})(calypso || (calypso = {}));

var calypso;
(function (calypso) {
    var Directives;
    (function (Directives) {
        var Templates = calypso.Const.Templates;
        var Events = calypso.Const.Events;
        angular.module('calypso.directives').directive('editEntity', [
            '$timeout',
            '$parse',
            '$stateParams',
            'EventBus',
            'DB',
            'DocumentService',
            function ($timeout, $parse, $stateParams, EventBus, DB, DocumentService) {
                return {
                    restrict: 'E',
                    scope: {},
                    templateUrl: Templates.EDIT_ENTITY_TPL,
                    link: function (scope) {
                        var entityContext = DB.getEntityContext();
                        scope.state = {
                            context: entityContext
                        };
                        EventBus.publish(Events.setTitle, "Editing " + $parse('displayName')(entityContext));
                        if (entityContext.sections) {
                            DocumentService.getDocumentSections(entityContext.docType, $stateParams.entityKey)
                                .then(function (results) {
                                results = results || [];
                                var completedSections = results.reduce(function (sections, section) {
                                    var header = section.representation[0];
                                    sections[header.definition] = true;
                                    return sections;
                                }, {});
                                DB.setCompletedSections(completedSections);
                                $timeout(function () {
                                    EventBus.publish(Events.setCompletedSections, completedSections);
                                }, 100);
                            })["catch"](function () {
                                alert('Failed to get Document Sections');
                            });
                        }
                        $timeout(function () {
                            EventBus.publish(Events.loadDocumentDefinition, entityContext.docType);
                        }, 100);
                    }
                };
            }
        ]);
    })(Directives = calypso.Directives || (calypso.Directives = {}));
})(calypso || (calypso = {}));

var calypso;
(function (calypso) {
    var Directives;
    (function (Directives) {
        var Templates = calypso.Const.Templates;
        angular.module('calypso.directives').directive('entityList', [
            '$timeout',
            '$parse',
            '$state',
            'DB',
            'EventBus',
            'Entity',
            'Loading',
            function ($timeout, $parse, $state, DB, EventBus, Entity, Loading) {
                return {
                    restrict: 'E',
                    scope: {},
                    templateUrl: Templates.ENTITY_LIST_TPL,
                    link: function ($scope) {
                        var docType = $state.current.data.docType;
                        $scope.entityDocType = docType;
                        $scope.entityDisplayName = $state.current.data.displayName;
                        $scope.entityUrl = $state.current.url;
                        $scope.entities = DB.getEntities(docType);
                        var search = function () {
                            Loading.show();
                            Entity.performSearch({
                                docType: docType
                            }).then(function (response) {
                                response.docType = docType;
                                if (angular.isArray($scope.entities)) {
                                    $scope.entities.splice(0, $scope.entities.length);
                                    $scope.entities.push.apply($scope.entities, response.results);
                                }
                                else {
                                    $scope.entities = response.results;
                                    DB.setEntities(docType, $scope.entities);
                                }
                            })["catch"](function (e) {
                                console.error("Error Searching for " + docType + ": " + JSON.stringify(e));
                            })["finally"](function () {
                                Loading.hide();
                            });
                        };
                        $scope.refresh = search;
                        $scope.deleteEntity = function (entity, idx) {
                            var msg = "Are you sure you want to delete '" + (entity.representation.publicName || entity.representation.name) + "'";
                            if ($parse('representation.key')(entity) === '4f88bc7f-395c-4d0b-997b-14e8c9aef605/0') {
                                alert('Preventing Deletion of Predefined Legal Entity - This is necessary for creating Entities');
                            }
                            else if (window.confirm(msg)) {
                                Loading.show();
                                Entity.deleteEntity(entity)
                                    .then(function () {
                                    $scope.entities.splice(idx, 1);
                                })["catch"](function (e) {
                                    console.error("Error Deleting Entity: " + JSON.stringify(e));
                                })["finally"](function () {
                                    Loading.hide();
                                });
                            }
                        };
                        search();
                    }
                };
            }
        ]);
    })(Directives = calypso.Directives || (calypso.Directives = {}));
})(calypso || (calypso = {}));

var calypso;
(function (calypso) {
    var Directives;
    (function (Directives) {
        var Templates = calypso.Const.Templates;
        var Events = calypso.Const.Events;
        angular.module('calypso.directives').directive('entityPage', [
            '$rootScope',
            '$timeout',
            '$parse',
            '$state',
            'DB',
            'EventBus',
            function ($rootScope, $timeout, $parse, $state, DB, EventBus) {
                return {
                    restrict: 'E',
                    scope: {},
                    templateUrl: Templates.ENTITIES_TPL,
                    link: function ($scope) {
                        var entityContext = DB.getEntityContext();
                        $scope.state = {
                            new_link: $parse('name')(entityContext),
                            treeOpen: false
                        };
                        EventBus.publish(Events.setTitle, "" + $parse('title')(entityContext));
                        var setContext = function () {
                            var entityContext = DB.getEntityContext();
                            $scope.state.new_link = $parse('name')(entityContext);
                            EventBus.publish(Events.setTitle, "" + $parse('title')(entityContext));
                        };
                        setContext();
                        var toggleSideBar = function () {
                            $scope.state.treeOpen = !$scope.state.treeOpen;
                            if (!$scope.state.treeOpen) {
                                // If we're closing the side bar it's nice
                                // to wait until the bar is closed before
                                // removing the overlay
                                $timeout(function () {
                                    $rootScope.overlay = false;
                                }, 200);
                            }
                            else {
                                $rootScope.overlay = true;
                            }
                        };
                        var hideSideBar = function () {
                            $scope.state.treeOpen = false;
                            $rootScope.overlay = false;
                        };
                        var offChangeHandler = $rootScope.$on('$stateChangeSuccess', function () {
                            hideSideBar();
                            setContext();
                        });
                        var toggleSideBarToken = EventBus.subscribe(Events.toggleSideBar, $scope, toggleSideBar);
                        var hideSideBarToken = EventBus.subscribe(Events.hideSideBar, $scope, hideSideBar);
                        $scope.$on('$destroy', function () {
                            offChangeHandler();
                            EventBus.unsubscribe(toggleSideBarToken);
                            EventBus.unsubscribe(hideSideBarToken);
                        });
                    }
                };
            }
        ]);
    })(Directives = calypso.Directives || (calypso.Directives = {}));
})(calypso || (calypso = {}));

var calypso;
(function (calypso) {
    var Directives;
    (function (Directives) {
        var Templates = calypso.Const.Templates;
        var Events = calypso.Const.Events;
        angular.module('calypso.directives').directive('newEntity', [
            '$timeout',
            '$rootScope',
            '$parse',
            '$stateParams',
            'EventBus',
            'DB',
            function ($timeout, $rootScope, $parse, $stateParams, EventBus, DB) {
                return {
                    restrict: 'E',
                    scope: {},
                    templateUrl: Templates.NEW_ENTITY_TPL,
                    link: function () {
                        $rootScope.overlay = false;
                        var entityContext = DB.getEntityContext();
                        EventBus.publish(Events.setTitle, "New " + $parse('displayName')(entityContext));
                        if (entityContext) {
                            $timeout(function () {
                                EventBus.publish(Events.loadDocumentDefinition, entityContext.docType);
                            }, 50);
                        }
                        else {
                            alert("Unknown Entity Context: " + $stateParams.entityType);
                        }
                    }
                };
            }
        ]);
    })(Directives = calypso.Directives || (calypso.Directives = {}));
})(calypso || (calypso = {}));

var calypso;
(function (calypso) {
    var Directives;
    (function (Directives) {
        var Templates = calypso.Const.Templates;
        var Events = calypso.Const.Events;
        angular.module('calypso.directives').directive('searchBar', [
            '$rootScope',
            '$state',
            '$stateParams',
            'DB',
            'EventBus',
            function ($rootScope, $state, $stateParams, DB, EventBus) {
                return {
                    restrict: 'E',
                    replace: true,
                    scope: {},
                    templateUrl: Templates.SEARCH_BAR_TPL,
                    link: function ($scope) {
                        $scope.state = {
                            showHamburger: true
                        };
                        $scope.toggleSidebar = function () {
                            EventBus.publish(Events.toggleSideBar);
                        };
                        $scope.goHome = function (event) {
                            event.preventDefault();
                            var context = DB.getEntityContext();
                            $state.go(context.state || 'entities.substances');
                        };
                        $rootScope.$on('$stateChangeSuccess', function () {
                            $rootScope.overlay = false;
                            if ($state.current.name === 'entities') {
                                $state.go('entities.substances');
                            }
                            else {
                                if ($stateParams.entityType) {
                                    var context_1 = DB.getEntityContext();
                                    if (!$stateParams.entityKey || !angular.isObject(context_1)) {
                                        DB.setEntityContext(calypso.Const.Entities[$stateParams.entityType]);
                                    }
                                }
                                else {
                                    DB.setEntityContext($state.current.data);
                                }
                            }
                            var context = DB.getEntityContext();
                            $scope.state.showHamburger = !$stateParams.entityKey || context.sections;
                        });
                        EventBus.subscribe(Events.setTitle, $scope, function (title) {
                            if (angular.isString(title)) {
                                $scope.state.title = title;
                            }
                        });
                    }
                };
            }
        ]);
    })(Directives = calypso.Directives || (calypso.Directives = {}));
})(calypso || (calypso = {}));

var calypso;
(function (calypso) {
    var Directives;
    (function (Directives) {
        var Events = calypso.Const.Events;
        angular.module('calypso.directives').directive('formTabs', [
            'EventBus',
            function (EventBus) {
                return {
                    scope: {
                        documentDefinitions: '='
                    },
                    templateUrl: calypso.Const.Templates.IUCLID_FORM_TABS_TPL,
                    link: function (scope) {
                        scope.state = {
                            definitions: null
                        };
                        scope.addTab = function () {
                            alert('Unfortunately multiple document instances is not currently supported');
                        };
                        var setDefinitions = function () {
                            if (scope.documentDefinitions) {
                                scope.state.definitions = Object.keys(scope.documentDefinitions).map(function (key) {
                                    return scope.documentDefinitions[key];
                                });
                            }
                        };
                        setDefinitions();
                        var loadTabsToken = EventBus.subscribe(Events.loadTabs, scope, function (tabs) {
                            if (tabs) {
                                scope.state.definitions = Object.keys(tabs).map(function (key) {
                                    return tabs[key];
                                });
                            }
                            else {
                                scope.state.definitions = null;
                            }
                        });
                        scope.$on('$destroy', function () {
                            EventBus.unsubscribe(loadTabsToken);
                        });
                    }
                };
            }
        ]);
    })(Directives = calypso.Directives || (calypso.Directives = {}));
})(calypso || (calypso = {}));

var calypso;
(function (calypso) {
    var Directives;
    (function (Directives) {
        var Events = calypso.Const.Events;
        var API = calypso.Const.API;
        angular.module('calypso.directives').directive('formToolbar', [
            '$parse',
            '$http',
            '$state',
            '$stateParams',
            'EventBus',
            'DB',
            'DocumentService',
            'DocumentFilter',
            'Loading',
            function ($parse, $http, $state, $stateParams, EventBus, DB, DocumentService, DocumentFilter, Loading) {
                return {
                    scope: {
                        document: '=',
                        documentDefinitions: '=',
                        documentData: '=',
                        filterDefinition: '='
                    },
                    templateUrl: calypso.Const.Templates.IUCLID_FORM_TOOLBAR_TPL,
                    link: function (scope) {
                        scope.state = {
                            downloadTxtUrl: calypso.Const.API.BASE_URL + "/txt/" + scope.document.identifier,
                            downloadCsvUrl: API.BASE_URL + "/csv/" + scope.document.identifier
                        };
                        scope.cancel = function () {
                            var context = DB.getEntityContext();
                            $state.go(context.state);
                        };
                        scope.save = function () {
                            var context = DB.getEntityContext();
                            var documentData = scope.documentData ? angular.copy(scope.documentData[1]) : {};
                            var envelope = DocumentService.generateJsonDocumentEnvelope(scope.document, documentData);
                            Loading.show();
                            DocumentService.save(envelope)
                                .then(function (result) {
                                if (context.docType === context.sectionCode) {
                                    if (result.isCreate) {
                                        context.sectionUuid = result.header.key;
                                        DB.setEntityContext(context);
                                        $state.go('edit-entity', {
                                            entityType: context.docType,
                                            entityKey: result.header.key,
                                            snapshot: 0
                                        });
                                    }
                                    else {
                                        $state.go(context.state);
                                    }
                                }
                                else {
                                    var completedSections = DB.getCompletedSections();
                                    if (context.sectionCode) {
                                        completedSections[context.sectionCode] = result.header;
                                    }
                                    if (result.isCreate) {
                                        var definitions = scope.documentDefinitions || {};
                                        context.sectionUuid = result.header.key;
                                        DB.setEntityContext(context);
                                        definitions[(result.header.name || result.header.definition)] = result.header;
                                        EventBus.publish(Events.loadTabs, definitions);
                                        EventBus.publish(Events.loadDocumentData, result.body);
                                    }
                                    EventBus.publish(Events.setCompletedSections);
                                }
                            })["catch"](function (e) {
                                var error = ($parse('data.info.errors')(e) || [{}])[0];
                                var msg;
                                if (!error.code && !error.message) {
                                    msg = $parse('data.message')(e);
                                }
                                else {
                                    msg = error.code + ": " + error.message + "\nPath: " + error.path;
                                }
                                alert(msg);
                            })["finally"](function () {
                                Loading.hide();
                            });
                        };
                        scope["delete"] = function () {
                            var context = DB.getEntityContext();
                            if (window.confirm("Are you sure you want to delete this " + context.sectionCode + "?")) {
                                Loading.show();
                                DocumentService["delete"](context.docType, $stateParams.entityKey, context.sectionCode, context.sectionUuid)
                                    .then(function () {
                                    var completedSections = DB.getCompletedSections();
                                    if (context.sectionCode) {
                                        completedSections[context.sectionCode] = null;
                                    }
                                    context.sectionUuid = null;
                                    DB.setEntityContext(context);
                                    DB.setCompletedSections(completedSections);
                                    EventBus.publish(Events.setCompletedSections);
                                    EventBus.publish(Events.loadDocumentDefinition, context.docType);
                                })["catch"](function () {
                                    alert('Error deleting document');
                                })["finally"](function () {
                                    Loading.hide();
                                });
                            }
                        };
                        scope.filter = function () {
                            DocumentFilter.toggle();
                        };
                        scope.collapseAll = function () {
                            EventBus.publish(Events.collapseAllSections);
                        };
                    }
                };
            }
        ]);
    })(Directives = calypso.Directives || (calypso.Directives = {}));
})(calypso || (calypso = {}));

var calypso;
(function (calypso) {
    var Directives;
    (function (Directives) {
        angular.module('calypso.directives').directive('iuclidForm', [
            function () {
                return {
                    scope: {
                        document: '=',
                        documentDefinitions: '=',
                        documentData: '=',
                        filterDefinition: '='
                    },
                    templateUrl: calypso.Const.Templates.IUCLID_FORM_TPL
                };
            }
        ]);
    })(Directives = calypso.Directives || (calypso.Directives = {}));
})(calypso || (calypso = {}));

var calypso;
(function (calypso) {
    var Directives;
    (function (Directives) {
        angular.module('calypso.directives').directive('iuclidFormContent', [
            function () {
                return {
                    scope: {
                        contents: '='
                    },
                    templateUrl: calypso.Const.Templates.IUCLID_FORM_CONTENTS_TPL
                };
            }
        ]);
    })(Directives = calypso.Directives || (calypso.Directives = {}));
})(calypso || (calypso = {}));

var calypso;
(function (calypso) {
    var Directives;
    (function (Directives) {
        var Events = calypso.Const.Events;
        angular.module('calypso.directives').directive('iuclidFormPicker', [
            '$rootScope',
            '$timeout',
            '$stateParams',
            'EventBus',
            'DB',
            'DocumentService',
            'DocumentFilter',
            'Loading',
            function ($rootScope, $timeout, $stateParams, EventBus, DB, DocumentService, DocumentFilter, Loading) {
                return {
                    scope: {
                        documentDefinitions: '='
                    },
                    templateUrl: calypso.Const.Templates.IUCLID_FORM_PICKER_TPL,
                    link: function (scope, el) {
                        scope.state = {
                            documentDefinition: null,
                            documentDefinitions: [],
                            documentData: null,
                            submissionType: DB.getSubmissionType(),
                            filterDefinition: DocumentFilter.isApplied()
                        };
                        scope.loadSubmissionType = function () {
                            EventBus.publish(Events.loadSubmissionType, scope.state.submissionType);
                        };
                        if (scope.state.submissionType) {
                            scope.loadSubmissionType();
                        }
                        var render = function (documentCode, documentDefinition) {
                            EventBus.publish(Events.loadTabs, scope.state.documentDefinitions);
                            var container = el[0].querySelector('.iuclid-form-content-wrapper');
                            if (container) {
                                container.scrollTop = 0;
                            }
                            if (scope.state.filterDefinition) {
                                DocumentService.filter(documentDefinition);
                            }
                            // If we have document data we should apply it on top of the definition
                            if (scope.state.documentData) {
                                DocumentService.apply(documentDefinition, scope.state.documentData);
                            }
                            scope.state.documentDefinition = documentDefinition;
                            Loading.hide();
                        };
                        var loadSubToken = EventBus.subscribe(Events.loadSubmissionType, scope, function (type) {
                            scope.state.documentDefinition = null;
                            scope.state.submissionType = type;
                        });
                        var loadDocDataToken = EventBus.subscribe(Events.loadDocumentData, scope, function (data) {
                            scope.state.documentData = data;
                        });
                        var reduceDataDefinitions = function (definitions, definition) {
                            var def = (definition.representation || {})[0];
                            if (def) {
                                definitions = definitions || {};
                                definitions[def.name || def.definition] = def;
                                return definitions;
                            }
                        };
                        // LOAD THE DEFINITION
                        var loadDocToken = EventBus.subscribe(Events.loadDocumentDefinition, scope, function (documentCode) {
                            var entityContext = DB.getEntityContext();
                            Loading.show();
                            // LOAD THE DATA
                            DocumentService.getDocumentDefinition(documentCode)
                                .then(function (documentDefinition) {
                                entityContext.sectionCode = documentCode;
                                DB.setEntityContext(entityContext);
                                if ($stateParams.entityKey) {
                                    DocumentService.getDocumentData(entityContext.docType, $stateParams.entityKey, documentCode)
                                        .then(function (data) {
                                        scope.state.documentDefinitions = data.reduce(reduceDataDefinitions, null);
                                        var documentData = data[0];
                                        if (documentData && documentData.representation && documentData.representation[1]) {
                                            scope.state.documentData = documentData.representation[1];
                                            entityContext.sectionUuid = documentData.representation[0].key.split('/')[0];
                                            if (entityContext.sectionCode === entityContext.docType) {
                                                var header = documentData.representation[0];
                                                EventBus.publish(Events.setTitle, "Editing " + entityContext.displayName + " - " + header.name);
                                            }
                                        }
                                        else {
                                            scope.state.documentData = null;
                                            delete entityContext.sectionUuid;
                                        }
                                        DB.setEntityContext(entityContext);
                                    })["catch"](function (e) {
                                        console.error("Failed to get document data: " + JSON.stringify(e));
                                        scope.state.documentData = null;
                                        scope.state.documentDefinitions = null;
                                    })["finally"](function () {
                                        render(documentCode, documentDefinition);
                                    });
                                }
                                else {
                                    scope.state.documentData = null;
                                    scope.state.documentDefinitions = null;
                                    render(documentCode, documentDefinition);
                                }
                            })["catch"](function (e) {
                                alert('Failed to Get Document Definition: ' + JSON.stringify(e));
                                Loading.hide();
                            });
                        });
                        var filterDocToken = EventBus.subscribe(Events.filterDocumentDefinition, scope, function (filterDefinition) {
                            var context = DB.getEntityContext();
                            scope.state.filterDefinition = !!(filterDefinition);
                            EventBus.publish(Events.loadDocumentDefinition, (context.sectionCode || context.docType));
                        });
                        scope.$on('$destroy', function () {
                            EventBus.unsubscribe(filterDocToken);
                            EventBus.unsubscribe(loadDocToken);
                            EventBus.unsubscribe(loadSubToken);
                            EventBus.unsubscribe(loadDocDataToken);
                        });
                    }
                };
            }
        ]);
    })(Directives = calypso.Directives || (calypso.Directives = {}));
})(calypso || (calypso = {}));

var calypso;
(function (calypso) {
    var Directives;
    (function (Directives) {
        /**
         * This is used on an <input/> tag since trying to interpolate
         * using the built-in "multiple" attribute does not work.
         * Ex: <input multiple="{{ scope.someVal }}" /> does NOT work.
         *
         * Instead we need to use our extended angular directive to
         * do the work for us.
         * Ex: <input ngx-multiple="{{ scope.someVal }}" /> does work.
         */
        angular.module('calypso.directives').directive('ngxMultiple', [
            function () {
                return {
                    restrict: 'A',
                    link: function (scope, element, attr) {
                        if (attr.ngxMultiple === 'true' || attr.ngxMultiple === true) {
                            element.attr('multiple', true);
                        }
                    }
                };
            }
        ]);
    })(Directives = calypso.Directives || (calypso.Directives = {}));
})(calypso || (calypso = {}));

var calypso;
(function (calypso) {
    var Directives;
    (function (Directives) {
        var Events = calypso.Const.Events;
        var Templates = calypso.Const.Templates;
        angular.module('calypso.directives').directive('sideTree', [
            '$rootScope',
            '$timeout',
            '$interval',
            '_',
            'FuzzySearch',
            'DB',
            'EventBus',
            'TreeService',
            'Loading',
            function ($rootScope, $timeout, $interval, _, FuzzySearch, DB, EventBus, TreeService, Loading) {
                return {
                    restrict: 'E',
                    scope: {},
                    templateUrl: Templates.SIDE_TREE_TPL,
                    link: function (scope, el) {
                        var DEFAULT_SUB_TYPE_IDX = 1;
                        var submissionTypes = DB.getSubmissionTypes();
                        scope.state = {
                            submissionTypes: submissionTypes,
                            submissionType: submissionTypes[DEFAULT_SUB_TYPE_IDX],
                            filter: '',
                            tree: null,
                            treeDisplay: null,
                            treeOpen: false
                        };
                        scope.props = {
                            selectedCode: null
                        };
                        var _filter = function () {
                            var filterVal = scope.state.filter.toLowerCase();
                            if (scope.state.filter) {
                                scope.state.treeDisplay = angular.copy(scope.state.tree);
                                Object.keys(scope.state.treeDisplay.sections).forEach(function (treeName) {
                                    var tree = scope.state.treeDisplay.sections[treeName];
                                    if (tree && tree.documents.length > 0) {
                                        tree.documents = (new FuzzySearch(tree.documents, ['title'])).search(filterVal);
                                    }
                                });
                            }
                            else {
                                scope.state.treeDisplay = scope.state.tree;
                            }
                        };
                        var loadTree = function (clearCache) {
                            if (scope.state.submissionType) {
                                TreeService.getTreeDefinition(scope.state.submissionType.identifier, clearCache)
                                    .then(function (tree) {
                                    scope.state.tree = tree;
                                    _filter();
                                })["catch"](function (e) {
                                    alert('Failed to Load Tree: ' + JSON.stringify(e));
                                })["finally"](function () {
                                    Loading.hide();
                                });
                            }
                            else {
                                Loading.hide();
                            }
                        };
                        var toggleSideBar = function () {
                            scope.state.treeOpen = !scope.state.treeOpen;
                            if (!scope.state.treeOpen) {
                                // If we're closing the side bar it's nice
                                // to wait until the bar is closed before
                                // removing the overlay
                                $timeout(function () {
                                    $rootScope.overlay = false;
                                }, 200);
                            }
                            else {
                                $rootScope.overlay = true;
                            }
                        };
                        var hideSideBar = function () {
                            scope.state.treeOpen = false;
                            $rootScope.overlay = false;
                        };
                        var setCompletedSections = function () {
                            Loading.show();
                            loadTree(true);
                        };
                        var setCompletedSectionsToken = EventBus.subscribe(Events.setCompletedSections, scope, setCompletedSections);
                        var toggleSideBarToken = EventBus.subscribe(Events.toggleSideBar, scope, toggleSideBar);
                        var hideSideBarToken = EventBus.subscribe(Events.hideSideBar, scope, hideSideBar);
                        var loadDocumentDefinitionToken = EventBus.subscribe(Events.loadDocumentDefinition, scope, function (code) {
                            scope.props.selectedCode = code;
                        });
                        scope.$on('$destroy', function () {
                            EventBus.unsubscribe(toggleSideBarToken);
                            EventBus.unsubscribe(hideSideBarToken);
                            EventBus.unsubscribe(loadDocumentDefinitionToken);
                            EventBus.unsubscribe(setCompletedSectionsToken);
                        });
                        scope.filter = _.debounce(function () {
                            scope.$apply(_filter);
                        }, 100);
                        scope.loadSubmissionType = function () {
                            Loading.show();
                            scope.props.selectedCode = null;
                            loadTree(false);
                        };
                        if (scope.state.submissionType) {
                            scope.loadSubmissionType();
                        }
                        else {
                            var loadSubTypesInterval_1 = $interval(function () {
                                var submissionTypes = DB.getSubmissionTypes();
                                if (submissionTypes) {
                                    scope.state.submissionTypes = submissionTypes;
                                    scope.state.submissionType = submissionTypes[DEFAULT_SUB_TYPE_IDX];
                                    $interval.cancel(loadSubTypesInterval_1);
                                    scope.loadSubmissionType();
                                }
                            }, 100);
                        }
                    }
                };
            }
        ]);
    })(Directives = calypso.Directives || (calypso.Directives = {}));
})(calypso || (calypso = {}));

var calypso;
(function (calypso) {
    var Directives;
    (function (Directives) {
        var Events = calypso.Const.Events;
        var Templates = calypso.Const.Templates;
        angular.module('calypso.directives').directive('sideTreeSection', [
            'EventBus',
            function (EventBus) {
                return {
                    restrict: 'E',
                    scope: {
                        section: '=',
                        props: '='
                    },
                    templateUrl: Templates.SIDE_TREE_SECTION_TPL,
                    link: function (scope) {
                        scope.state = {
                            collapsed: true
                        };
                        scope.loadNodeDocument = function (node) {
                            EventBus.publish(Events.hideSideBar);
                            EventBus.publish(Events.loadDocumentDefinition, node.code);
                        };
                        scope.toggleSection = function () {
                            if (scope.state.collapsed) {
                                EventBus.publish(Events.collapseAllSideBarSections);
                                scope.state.collapsed = false;
                            }
                            else {
                                scope.state.collapsed = true;
                            }
                        };
                        var setCompletedSectionsToken = EventBus.subscribe(Events.setCompletedSections, scope, function () {
                            // collapse all sections except the completed
                            scope.state.collapsed = (scope.section.title !== 'Completed');
                        });
                        var collapseAllToken = EventBus.subscribe(Events.collapseAllSideBarSections, scope, function () {
                            scope.state.collapsed = true;
                        });
                        scope.$on('$destroy', function () {
                            EventBus.unsubscribe(setCompletedSectionsToken);
                            EventBus.unsubscribe(collapseAllToken);
                        });
                    }
                };
            }
        ]);
    })(Directives = calypso.Directives || (calypso.Directives = {}));
})(calypso || (calypso = {}));

var calypso;
(function (calypso) {
    var Directives;
    (function (Directives) {
        angular.module('calypso.directives').directive('iuclidAttachment', [
            function () {
                return {
                    scope: {
                        content: '='
                    },
                    templateUrl: calypso.Const.Templates.IUCLID_ATTRIBUTE_ATTACHMENT_TPL
                };
            }
        ]);
    })(Directives = calypso.Directives || (calypso.Directives = {}));
})(calypso || (calypso = {}));

var calypso;
(function (calypso) {
    var Directives;
    (function (Directives) {
        var Events = calypso.Const.Events;
        angular.module('calypso.directives').directive('iuclidBlock', [
            'EventBus',
            function (EventBus) {
                return {
                    scope: {
                        content: '='
                    },
                    templateUrl: calypso.Const.Templates.IUCLID_ATTRIBUTE_BLOCK_TPL,
                    link: function (scope) {
                        scope.state = {
                            expanded: false
                        };
                        scope.toggleWrapper = function () {
                            scope.state.expanded = !scope.state.expanded;
                        };
                        var collapseAllToken = EventBus.subscribe(Events.collapseAllSections, scope, function () {
                            scope.state.expanded = false;
                        });
                        scope.$on('$destroy', function () {
                            EventBus.unsubscribe(collapseAllToken);
                        });
                    }
                };
            }
        ]);
    })(Directives = calypso.Directives || (calypso.Directives = {}));
})(calypso || (calypso = {}));

var calypso;
(function (calypso) {
    var Directives;
    (function (Directives) {
        angular.module('calypso.directives').directive('iuclidCheckbox', [
            function () {
                return {
                    scope: {
                        content: '='
                    },
                    templateUrl: calypso.Const.Templates.IUCLID_ATTRIBUTE_CHECKBOX_TPL
                };
            }
        ]);
    })(Directives = calypso.Directives || (calypso.Directives = {}));
})(calypso || (calypso = {}));

var calypso;
(function (calypso) {
    var Directives;
    (function (Directives) {
        angular.module('calypso.directives').directive('iuclidDate', [
            function () {
                return {
                    scope: {
                        content: '='
                    },
                    templateUrl: calypso.Const.Templates.IUCLID_ATTRIBUTE_DATE_TPL
                };
            }
        ]);
    })(Directives = calypso.Directives || (calypso.Directives = {}));
})(calypso || (calypso = {}));

var calypso;
(function (calypso) {
    var Directives;
    (function (Directives) {
        angular.module('calypso.directives').directive('iuclidNumeric', [
            function () {
                return {
                    scope: {
                        content: '='
                    },
                    templateUrl: calypso.Const.Templates.IUCLID_ATTRIBUTE_NUMERIC_TPL
                };
            }
        ]);
    })(Directives = calypso.Directives || (calypso.Directives = {}));
})(calypso || (calypso = {}));

var calypso;
(function (calypso) {
    var Directives;
    (function (Directives) {
        angular.module('calypso.directives').directive('iuclidPickList', [
            'IuclidPhraseGroup',
            function (IuclidPhraseGroup) {
                return {
                    scope: {
                        content: '='
                    },
                    templateUrl: calypso.Const.Templates.IUCLID_ATTRIBUTE_PICK_LIST_TPL,
                    link: function (scope) {
                        scope.state = {
                            phraseGroup: []
                        };
                        IuclidPhraseGroup.get(scope.content.phrasegroup)
                            .then(function (result) {
                            scope.state.phraseGroup = result;
                        })["catch"](function (e) {
                            console.error('Error Getting Phrase Group: ' + JSON.stringify(e));
                        });
                    }
                };
            }
        ]);
    })(Directives = calypso.Directives || (calypso.Directives = {}));
})(calypso || (calypso = {}));

var calypso;
(function (calypso) {
    var Directives;
    (function (Directives) {
        angular.module('calypso.directives').directive('iuclidRange', [
            function () {
                return {
                    scope: {
                        content: '='
                    },
                    templateUrl: calypso.Const.Templates.IUCLID_ATTRIBUTE_RANGE_TPL
                };
            }
        ]);
    })(Directives = calypso.Directives || (calypso.Directives = {}));
})(calypso || (calypso = {}));

var calypso;
(function (calypso) {
    var Directives;
    (function (Directives) {
        angular.module('calypso.directives').directive('iuclidText', [
            function () {
                return {
                    scope: {
                        content: '='
                    },
                    templateUrl: calypso.Const.Templates.IUCLID_ATTRIBUTE_TEXT_TPL
                };
            }
        ]);
    })(Directives = calypso.Directives || (calypso.Directives = {}));
})(calypso || (calypso = {}));

angular.module('calypso').run(['$templateCache', function($templateCache) {$templateCache.put('/templates/edit-entity.html','<side-tree ng-if="state.context.sections"></side-tree>\n<div class="main-view"\n     ng-class="{ \'main-view--no-side\': state.context.sections === false }">\n    <iuclid-form-picker document-definitions="state.documentDefinitions"></iuclid-form-picker>\n</div>\n');
$templateCache.put('/templates/entities.html','<div class="side-tree"\n     ng-class="{ \'tree-open\': state.treeOpen }">\n    <ul class="side-tree__node-container side-tree__entities-node-container">\n        <li class="side-tree__block-node">\n            <a href="/#/entities/{{ state.new_link }}/new" class="btn btn-primary">Create New</a>\n        </li>\n        <li class="side-tree__anchor-node">\n            <a ui-sref="entities.substances" ui-sref-active="active">SUBSTANCES</a>\n        </li>\n        <li class="side-tree__anchor-node">\n            <a ui-sref="entities.reference-substances" ui-sref-active="active">REFERENCE SUBSTANCES</a>\n        </li>\n        <li class="side-tree__anchor-node">\n            <a ui-sref="entities.mixtures" ui-sref-active="active">MIXTURES</a>\n        </li>\n        <li class="side-tree__anchor-node">\n            <a ui-sref="entities.templates" ui-sref-active="active">TEMPLATES</a>\n        </li>\n        <li class="side-tree__anchor-node">\n            <a ui-sref="entities.categories" ui-sref-active="active">CATEGORIES</a>\n        </li>\n        <li class="side-tree__separator"></li>\n        <li class="side-tree__anchor-node">\n            <a ui-sref="entities.literature" ui-sref-active="active">LITERATURE</a>\n        </li>\n        <li class="side-tree__anchor-node">\n            <a ui-sref="entities.legal-entities" ui-sref-active="active">LEGAL ENTITIES</a>\n        </li>\n        <li class="side-tree__anchor-node">\n            <a ui-sref="entities.contacts" ui-sref-active="active">CONTACTS</a>\n        </li>\n        <li class="side-tree__anchor-node">\n            <a ui-sref="entities.sites" ui-sref-active="active">SITES</a>\n        </li>\n        <li class="side-tree__anchor-node">\n            <a ui-sref="entities.annotations" ui-sref-active="active">ANNOTATIONS</a>\n        </li>\n        <li class="side-tree__anchor-node">\n            <a ui-sref="entities.dossier" ui-sref-active="active">DOSSIER</a>\n        </li>\n    </ul>\n</div>\n<div class="main-view">\n    <ui-view></ui-view>\n</div>\n');
$templateCache.put('/templates/new-entity.html','<div class="new-entity__container">\n    <iuclid-form-picker></iuclid-form-picker>\n</div>');
$templateCache.put('/templates/not-found.html','<div style="text-align: center; padding: 100px;">\n    <h1>We couldn\'t find the page you\'re looking for</h1>\n    <h3>\n        <a href="#/">Return Home</a>\n    </h3>\n</div>\n');
$templateCache.put('/templates/directives/entity-list.html','<div class="entity-list">\n    <div class="entity-list-container">\n        <div class="list-header" style="display: flex; padding: 20px; border-bottom: 1px solid #e7e7e7;">\n            <span class="entity-header__name">Name</span>\n            <span class="entity-header__created-on">Created On</span>\n            <span class="entity-header__modified-on sort sort-desc">Modified On <i class="fa fa-caret-down"></i></span>\n            <span class="entity-header__actions">\n                <i class="fa fa-repeat entity-item__action" ng-click="refresh()"></i>\n            </span>\n        </div>\n        <ul class="entity-item__container">\n            <li ng-repeat="entity in entities" class="entity-item">\n                <a href="/#/entities{{ entityUrl }}/{{ entity.representation.key }}"\n                   class="entity-item__name">{{ entity.representation.name || entity.representation.publicName }}</a>\n                <span class="entity-item__created-on">{{ entity.representation.createdOn | date:\'medium\' }}</span>\n                <span class="entity-item__modified-on">{{ entity.representation.modifiedOn | date:\'medium\' }}</span>\n                <div class="entity-item__actions">\n                    <i class="fa fa-trash entity-item__action" ng-click="deleteEntity(entity, $index)"></i>\n                </div>\n            </li>\n        </ul>\n\n        <div ng-if="entities.length === 0" class="entity-list__empty-state">\n            <h1><i class="fa fa-cloud"></i></h1>\n            <h2>No {{ entityDisplayName }} could be found!</h2>\n        </div>\n    </div>\n</div>\n');
$templateCache.put('/templates/directives/search-bar.html','<div class="search-bar">\n    <a class="on-mobile side-bar-toggle"\n       ng-click="toggleSidebar()"\n       ng-if="state.showHamburger">\n        <i class="fa fa-bars"></i>\n    </a>\n    <a ui-sref="entities"\n       ui-sref-active="active"\n       ng-click="goHome($event)">\n        HOME\n    </a>\n    <span class="search-bar__title">\n        {{ state.title }}\n    </span>\n</div>\n');
$templateCache.put('/templates/directives/iuclid-attributes/iuclid-attachment.html','<div class="form__content form__content--attachment">\n    <label>{{ content.title }}</label>\n    <input type="file"\n           name="{{ content.name }}"\n           accept="{{ content.mimeType }}"\n           ngx-multiple="{{ !!content.name }}" />\n</div>\n');
$templateCache.put('/templates/directives/iuclid-attributes/iuclid-block.html','<div class="form__content form__content--block"\n        ng-class="{ \'form__content--block--expanded\': state.expanded }">\n    <h3 class="form__conent--block__title"\n            ng-click="toggleWrapper()">\n        <i class="fa collapse-toggle"\n           ng-class="{ \'fa-chevron-down\': state.expanded, \'fa-chevron-right\': !state.expanded }">\n        </i>\n        {{ content.title }}\n        <i class="fa fa-check-circle"\n            ng-class="content.invalid === true ? \'fa-exclamation-circle\' : \'fa-check-circle\'">\n        </i>\n    </h3>\n    <div class="form__content--block__wrapper">\n        <iuclid-form-content contents="content.contents"></iuclid-form-content>\n    </div>\n</div>\n');
$templateCache.put('/templates/directives/iuclid-attributes/iuclid-checkbox.html','<div class="form__content form__content--checkbox">\n    <label>\n        <input type="checkbox" ng-model="content.value" />\n        {{ content.title }}\n    </label>\n</div>\n');
$templateCache.put('/templates/directives/iuclid-attributes/iuclid-date.html','<div class="form__content form__content--date">\n    <label>{{ content.title }}</label>\n    <input type="date"\n           ng-model="content.value" />\n</div>\n');
$templateCache.put('/templates/directives/iuclid-attributes/iuclid-numeric.html','<div class="form__content form__content--numeric">\n    <label>{{ content.title }}</label>\n    <input type="number"\n           ng-model="content.value"\n           min="{{ content.min }}"\n           max="{{ content.max }}" />\n</div>\n');
$templateCache.put('/templates/directives/iuclid-attributes/iuclid-pick-list.html','<div class="form__content form__content--pick-list">\n    <label>{{ content.title }}</label>\n\n    <select ng-options="item.phrase.code as item.phrase.text for item in state.phraseGroup"\n            ngx-multiple="{{ content.multiple }}"\n            ng-model="content.value"\n            class="form__content--pick-list__select">\n    </select>\n</div>\n');
$templateCache.put('/templates/directives/iuclid-attributes/iuclid-range.html','<div class="form__content form__content--range">\n    <label>{{ content.title }}</label>\n    <input type="range"\n           ng-model="content.value" />\n</div>\n');
$templateCache.put('/templates/directives/iuclid-attributes/iuclid-text.html','<div class="form__content form__content--text">\n    <label>{{ content.title }}</label>\n    <!--\n        If the content\'s max length is greater than 256\n        then we should use a text input to provide the\n        ability to provide a larger body of text.\n        Maybe in the future we want to provide some rich\n        text editor?\n    -->\n    <textarea ng-if="content.maxLength && content.maxLength > 256"\n              ng-model="content.value"\n              maxlength="{{ content.maxLength }}">\n    </textarea>\n    <!--\n        Otherwise for type text where the max length is less\n        then 256 we should use a regular text input since\n        it\'s more likely this is a relatively shorter value\n    -->\n    <input ng-if="!content.maxLength || content.maxLength <= 256"\n           type="text"\n           maxlength="{{ content.maxLength }}"\n           ng-model="content.value" />\n</div>\n');
$templateCache.put('/templates/directives/iuclid-form/form-tabs.html','<div class="form-tab__container"\n     ng-if="state.definitions">\n    <div class="form-tab active"\n         ng-repeat="documentDefinition in state.definitions">\n        <span class="form-tab__label">\n            {{ documentDefinition.name || documentDefinition.definition }}\n        </span>\n    </div>\n    <div class="form-tab form-tab--add" ng-click="addTab()">\n        <span class="form-tab__label form-tab__label--add">\n            <i class="fa fa-plus"></i>\n        </span>\n    </div>\n</div>\n');
$templateCache.put('/templates/directives/iuclid-form/form-toolbar.html','<div class="form-toolbar">\n    <!-- FILTER -->\n    <button class="btn"\n            ng-class="{ \'pressed\': filterDefinition }"\n            ng-click="filter()"\n            title="Toggle custom filters">\n        <i class="fa fa-filter"></i>\n    </button>\n\n    <!-- COLLAPSE ALL SECTIONS -->\n    <button class="btn"\n            ng-click="collapseAll()"\n            title="Collapse all sections">\n        <i class="fa fa-indent"></i>\n    </button>\n\n    <div class="form-toolbar--filler"></div>\n\n    <!-- SAVE DOCUMENT -->\n    <button class="btn"\n            ng-click="save()"\n            ng-if="document"\n            title="Save document">\n        <i class="fa fa-save"></i>\n    </button>\n\n    <!-- DOWNLOAD CSV -->\n    <a href="{{ state.downloadCsvUrl }}"\n       class="btn"\n       title="Download csv extract"\n       ng-if="documentData">\n        <i class="fa fa-file-excel-o"></i>\n    </a>\n\n    <!-- DOWNLOAD TXT -->\n    <a href="{{ state.downloadTxtUrl }}"\n       class="btn"\n       title="Download text extract"\n       ng-if="document">\n        <i class="fa fa-file-text-o"></i>\n    </a>\n\n    <span class="form-toolbar__separator" ng-if="documentData"></span>\n\n    <!-- DELETE -->\n    <button class="btn"\n            ng-click="delete()"\n            title="Delete"\n            ng-if="documentData">\n        <i class="fa fa-trash"></i>\n    </button>\n</div>\n');
$templateCache.put('/templates/directives/iuclid-form/iuclid-form-contents.html','<div ng-repeat="content in contents" ng-switch="content.type">\n    <iuclid-block ng-switch-when="block" content="content"></iuclid-block>\n    <iuclid-text ng-switch-when="text" content="content"></iuclid-text>\n    <iuclid-checkbox ng-switch-when="boolean" content="content"></iuclid-checkbox>\n    <iuclid-range ng-switch-when="range" content="content"></iuclid-range>\n    <iuclid-numeric ng-switch-when="numeric" content="content"></iuclid-numeric>\n    <iuclid-pick-list ng-switch-when="picklist" content="content"></iuclid-pick-list>\n    <iuclid-attachment ng-switch-when="attachment" content="content"></iuclid-attachment>\n    <iuclid-date ng-switch-when="date" content="content"></iuclid-date>\n\n    <div ng-switch-default class="form__content">\n        <p class="no-type-warn">\n            <b>No Form Attribute Implementation for Type:</b>[ {{ content.type }} ]<br>\n            <b>Content:</b> {{ content }}\n        </p>\n    </div>\n</div>\n');
$templateCache.put('/templates/directives/iuclid-form/iuclid-form-picker.html','<div class="form-picker__wrapper">\n    <h2 class="form-picker__title" ng-if="state.documentDefinition">\n        {{ state.documentDefinition.identifier }}\n        <small>{{ state.documentDefinition.provider }} {{ state.documentDefinition.version }}</small>\n    </h2>\n\n    <div ng-if="!state.documentDefinition" class="empty-state">\n        <h2 class="empty-state__title">Choose a Document</h2>\n        <i class="fa fa-arrow-circle-left empty-state__icon"></i>\n        <p class="empty-state__description">Select a document from the Tree on the left. Note that there are required vs. optional Documents</p>\n    </div>\n\n    <div ng-if="state.documentDefinition">\n        <iuclid-form document="state.documentDefinition"\n                     document-definitions="state.documentDefinitions"\n                     document-data="state.documentData"\n                     filter-definition="state.filterDefinition">\n        </iuclid-form>\n    </div>\n</div>\n');
$templateCache.put('/templates/directives/iuclid-form/iuclid-form.html','<div class="iuclid-form">\n    <form-tabs document-definitions="documentDefinitions"></form-tabs>\n    <form-toolbar document="document"\n                  document-definitions="documentDefinitions"\n                  document-data="documentData"\n                  filter-definition="filterDefinition">\n    </form-toolbar>\n    <div class="iuclid-form-content-wrapper">\n        <iuclid-form-content contents="document.contents"></iuclid-form-content>\n    </div>\n</div>\n');
$templateCache.put('/templates/directives/side-tree/side-tree-section.html','<h3 class="side-tree__section__title"\n        ng-click="toggleSection($event)">\n    <i class="fa collapse-toggle"\n        ng-class="{ \'fa-chevron-down\': !state.collapsed, \'fa-chevron-right\': state.collapsed }"> </i>\n    {{ section.title }}\n    <span class="badge">{{ section.documents.length }}</span>\n</h3>\n<ul class="side-tree__node-container"\n        ng-class="{ \'side-tree__node-container--collapsed\': state.collapsed }">\n    <li class="side-tree__node"\n        ng-class="{ \'active\': (props.selectedCode === document.code) }"\n        ng-click="loadNodeDocument(document)"\n        ng-repeat="document in section.documents">\n        {{ document.title }}\n    </li>\n    <li class="empty-state__side-tree-section" ng-if="section.documents.length === 0">\n        <i class="fa fa-folder-open-o"></i>\n        <br/>\n        <span>Nothing here!</span>\n    </li>\n</ul>');
$templateCache.put('/templates/directives/side-tree/side-tree.html','<div class="side-tree"\n     ng-class="{ \'tree-open\': state.treeOpen }">\n    <select class="submission-type__select"\n            ng-model="state.submissionType"\n            ng-change="loadSubmissionType()"\n            ng-options="type as type.title for type in state.submissionTypes">\n    </select>\n    <div ng-if="state.tree">\n        <div class="side-tree__filter-container">\n            <input type="text"\n                   class="side-tree__filter"\n                   placeholder="Filter..."\n                   ng-model="state.filter"\n                   ng-change="filter()">\n        </div>\n        <side-tree-section section="state.treeDisplay.sections.completed" props="props"></side-tree-section>\n        <side-tree-section section="state.treeDisplay.sections.required" props="props"></side-tree-section>\n        <side-tree-section section="state.treeDisplay.sections.endpointStudies" props="props"></side-tree-section>\n        <side-tree-section section="state.treeDisplay.sections.endpointSummaries" props="props"></side-tree-section>\n        <side-tree-section section="state.treeDisplay.sections.others" props="props"></side-tree-section>\n    </div>\n</div>\n');}]);