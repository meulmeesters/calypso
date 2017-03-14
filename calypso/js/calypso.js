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
            API.BASE_URL = 'http://iuclid.ca:3000';
            API.BASE_URI = API.BASE_URL + "/iuclid6-ext/api/ext/v1";
            API.BASE_DEFINITIONS_URI = API.BASE_URI + "/definition";
            API.BASE_API_URI = API.BASE_URI + "/query/iuclid6";
            API.BASE_RAW_URI = API.BASE_URI + "/raw";
            API.SUBMISSION_TYPES_URI = API.BASE_DEFINITIONS_URI + "/submissiontypes";
            API.DOCUMENT_TREE_URI = API.BASE_DEFINITIONS_URI + "/tree";
            //Mock API
            //export const BASE_URL = 'http://localhost:3001';
            //export const BASE_URI = BASE_URL;
            API.SUBSTANCE_URI = API.BASE_URI;
            API.END_POINT_STUDY_URI = API.BASE_URI + '/endpointstudy';
        })(API = Const.API || (Const.API = {}));
    })(Const = calypso.Const || (calypso.Const = {}));
})(calypso || (calypso = {}));

var calypso;
(function (calypso) {
    var Const;
    (function (Const) {
        var Events;
        (function (Events) {
            Events.addFilter = 'filter.add';
            Events.afterAddFilter = 'filter.add.after';
            Events.removeFilter = 'filter.remove';
            Events.afterRemoveFilter = 'filter.remove.after';
            Events.applyFilters = 'filter.apply';
            Events.afterApplyFilters = 'filter.apply.after';
            Events.loadIuclidEndPointStudies = 'iuclidEndPointStudy.load';
            Events.loadSubstances = 'substances.load';
            Events.searchSubstances = 'search.load';
            Events.loadSubmissionType = 'submission-type.load';
            Events.loadDocument = 'document.load';
        })(Events = Const.Events || (Const.Events = {}));
    })(Const = calypso.Const || (calypso.Const = {}));
})(calypso || (calypso = {}));

var calypso;
(function (calypso) {
    var Const;
    (function (Const) {
        var Filters;
        (function (Filters) {
            Filters.Sort = {
                ASC: 'fieldAscending',
                DESC: 'fieldDescending'
            };
            Filters.ORGANIZATION = {
                title: 'Organization',
                type: 'checkbox',
                category: 'ORGANIZATION',
                options: [{
                        category: 'ORGANIZATION',
                        key: 'OECD',
                        label: 'OECD',
                        value: false,
                        submitValue: 'OECD',
                        multi: false
                    }, {
                        category: 'ORGANIZATION',
                        key: 'HC',
                        label: 'Health Canada',
                        value: false,
                        submitValue: 'HC',
                        multi: false
                    }, {
                        category: 'ORGANIZATION',
                        key: 'EC',
                        label: 'Environment Canada and Climate Change',
                        value: false,
                        submitValue: 'EC',
                        multi: false
                    }]
            };
            Filters.IUCLID_SUBSTANCE_FILTERS = [
                Filters.ORGANIZATION
            ];
        })(Filters = Const.Filters || (Const.Filters = {}));
    })(Const = calypso.Const || (calypso.Const = {}));
})(calypso || (calypso = {}));

var calypso;
(function (calypso) {
    var Const;
    (function (Const) {
        var LocalStorage;
        (function (LocalStorage) {
            LocalStorage.FAVORITE_IUCLID_END_POINT_STUDIES = 'calypso.iuclidEndPointStudies.favorites';
            LocalStorage.FAVORITE_IUCLID_SUBSTANCES = 'calypso.iuclidSubstances.favorites';
        })(LocalStorage = Const.LocalStorage || (Const.LocalStorage = {}));
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
            Templates.SUBSTANCES_TPL = BASE + "substances.html";
            Templates.NEW_SUBSTANCE_TPL = BASE + "new-substance.html";
            Templates.ENDPOINTSTUDIES_TPL = BASE + "endpointstudies.html";
            Templates.HOME_TPL = BASE + 'home.html';
            Templates.NOT_FOUND_TPL = BASE + 'not-found.html';
            Templates.GENERIC_FORM_TPL = BASE + 'directives/generic-form.html';
            Templates.SEARCH_BAR_TPL = BASE + 'directives/search-bar.html';
            Templates.SIDE_FILTER_TPL = BASE + 'directives/side-filter.html';
            Templates.SIDE_TREE_TPL = BASE + 'directives/side-tree/side-tree.html';
            Templates.SIDE_TREE_SECTION_TPL = BASE + 'directives/side-tree/side-tree-section.html';
            Templates.SUBSTANCE_LIST_TPL = BASE + 'directives/substance-list.html';
            Templates.IUCLID_SUBSTANCE_FILTER_TPL = BASE + 'directives/iuclid-substance-filter.html';
            Templates.IUCLID_END_POINT_STUDY_FILTER_TPL = BASE + 'directives/iuclid-end-point-study-filter.html';
            Templates.IUCLID_END_POINT_STUDY_LIST_TPL = BASE + 'directives/iuclid-end-point-study-list.html';
            Templates.BREADCRUMB_TPL = BASE + 'directives/breadcrumbs.html';
            Templates.PAGING_TPL = BASE + 'directives/paging.html';
            /*******************************************************************************************************************
             * FORM RELATED TEMPLATES
             */
            Templates.IUCLID_FORM_TPL = BASE + 'directives/iuclid-form/iuclid-form.html';
            Templates.IUCLID_FORM_TOOLBAR_TPL = BASE + 'directives/iuclid-form/form-toolbar.html';
            Templates.IUCLID_FORM_CONTENTS_TPL = BASE + 'directives/iuclid-form/iuclid-form-contents.html';
            Templates.IUCLID_FORM_PICKER_TPL = BASE + 'directives/iuclid-form/iuclid-form-picker.html';
            Templates.IUCLID_ATTRIBUTE_BLOCK_TPL = BASE + 'directives/iuclid-attributes/iuclid-block.html';
            Templates.IUCLID_ATTRIBUTE_CHECKBOX_TPL = BASE + 'directives/iuclid-attributes/iuclid-checkbox.html';
            Templates.IUCLID_ATTRIBUTE_TEXT_TPL = BASE + 'directives/iuclid-attributes/iuclid-text.html';
            Templates.IUCLID_ATTRIBUTE_PICK_LIST_TPL = BASE + 'directives/iuclid-attributes/iuclid-pick-list.html';
            Templates.IUCLID_ATTRIBUTE_ATTACHMENT_TPL = BASE + 'directives/iuclid-attributes/iuclid-attachment.html';
            Templates.IUCLID_ATTRIBUTE_RANGE_TPL = BASE + 'directives/iuclid-attributes/iuclid-range.html';
            Templates.IUCLID_ATTRIBUTE_NUMERIC_TPL = BASE + 'directives/iuclid-attributes/iuclid-numeric.html';
            Templates.IUCLID_ATTRIBUTE_DATE_TPL = BASE + 'directives/iuclid-attributes/iuclid-date.html';
            /*******************************************************************************************************************
             * NGX TEMPLATES
             */
            Templates.NGX_DROP_DOWN_TPL = BASE + 'directives/ngx/drop-down.html';
        })(Templates = Const.Templates || (Const.Templates = {}));
    })(Const = calypso.Const || (calypso.Const = {}));
})(calypso || (calypso = {}));

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
        'ngRoute',
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
        '$routeProvider',
        '$compileProvider',
        function ($routeProvider, $compileProvider) {
            $compileProvider.debugInfoEnabled(false);
            $routeProvider
                .when('/', {
                redirectTo: '/substances'
            })
                .when('/substances', {
                templateUrl: Templates.SUBSTANCES_TPL
            })
                .when('/substances/new', {
                templateUrl: Templates.NEW_SUBSTANCE_TPL
            })
                .when('/endpointstudies', {
                templateUrl: Templates.ENDPOINTSTUDIES_TPL
            })
                .otherwise({
                templateUrl: Templates.NOT_FOUND_TPL
            });
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
    var Directives;
    (function (Directives) {
        var Templates = calypso.Const.Templates;
        var Events = calypso.Const.Events;
        angular.module('calypso.directives').directive('searchBar', [
            'DB',
            'EventBus',
            function (DB, EventBus) {
                return {
                    restrict: 'E',
                    replace: true,
                    scope: {},
                    templateUrl: Templates.SEARCH_BAR_TPL,
                    link: function (scope) {
                        scope.data = {
                            submissionTypes: []
                        };
                        scope.data.submissionTypes = DB.getSubmissionTypes();
                        scope.onSubmissionTypeSelect = function (type) {
                            DB.setSubmissionType(type);
                            EventBus.publish(Events.loadSubmissionType, type);
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
        var Templates = calypso.Const.Templates;
        angular.module('calypso.directives').directive('sideFilter', [
            function () {
                return {
                    restrict: 'E',
                    scope: {
                        filters: '='
                    },
                    templateUrl: Templates.SIDE_FILTER_TPL,
                    link: function (scope) {
                        console.log('FILTERS:' + scope.filters);
                        scope.filters = calypso.Const.Filters.IUCLID_SUBSTANCE_FILTERS;
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
        angular.module('calypso.directives').directive('substanceList', [
            '$window',
            'DB',
            'EventBus',
            'Substances',
            function ($window, DB, EventBus, Substances) {
                return {
                    restrict: 'E',
                    scope: {},
                    templateUrl: Templates.SUBSTANCE_LIST_TPL,
                    link: function (scope) {
                        scope.substances = DB.getSubstances();
                        if (scope.substances.length === 0) {
                            Substances.search();
                        }
                    }
                };
            }
        ]);
    })(Directives = calypso.Directives || (calypso.Directives = {}));
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
            DB.prototype.loadSubstances = function (response) {
                var newSubstances = response.results;
                var substances = self.getSubstances();
                substances.splice(0, substances.length);
                substances.push.apply(substances, newSubstances);
            };
            DB.prototype.getSubstances = function () {
                return self.$parse('_db.substances')(self);
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
        var API = calypso.Const.API;
        var self;
        var DocumentService = (function () {
            function DocumentService($q, $http, $timeout) {
                this.$q = $q;
                this.$http = $http;
                this.$timeout = $timeout;
                this._cache = {};
                self = this;
            }
            DocumentService.prototype.getDocumentDefinition = function (code) {
                var deferred = self.$q.defer();
                var URI = API.BASE_DEFINITIONS_URI + "/document/" + code;
                if (self._cache[code]) {
                    self.$timeout(function () {
                        deferred.resolve(self._cache[code]);
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
                        self._cache[code] = result.data;
                        deferred.resolve(result.data);
                    })["catch"](function (e) {
                        alert('Failed to Get Document Definition: ' + JSON.stringify(e));
                    });
                }
                return deferred.promise;
            };
            DocumentService.prototype.generateJsonDocumentEnvelope = function (document) {
                var header = {
                    definition: "SUBSTANCE",
                    name: "A demo sbustance reference"
                };
                var body = document.contents.reduce(DocumentService.generateJsonBody, {});
                return [header, body];
            };
            DocumentService.generateJsonBody = function (json, content) {
                json = json || {};
                switch (content.type) {
                    case 'block':
                        json[content.name] = content.contents.reduce(DocumentService.generateJsonBody, {});
                        break;
                    case 'text':
                        if (content.value) {
                            json[content.name] = content.value;
                        }
                        break;
                }
                Object.keys(json).forEach(function (key) {
                    if (json[key] === undefined) {
                        delete json[key];
                    }
                });
                return Object.keys(json).length > 0 ? json : undefined;
            };
            DocumentService.prototype.saveDocument = function (jsonDocumentEnvelope) {
                var deferred = self.$q.defer();
                var header = jsonDocumentEnvelope[0];
                if (header && header.definition) {
                    var URI = API.BASE_RAW_URI + "/" + header.definition;
                    self.$http.post(URI, jsonDocumentEnvelope, {
                        headers: {
                            'Content-Type': API.DOCUMENT_CONTENT_TYPE_HEADER,
                            'iuclid6-user': 'SuperUser',
                            'iuclid6-pass': 'Baboon22!!',
                            '_c': new Date().getTime()
                        }
                    }).then(function (result) {
                        console.log(result);
                    })["catch"](function (e) {
                        console.log('Error: ' + JSON.stringify(e));
                    });
                }
                else {
                    deferred.reject('Invalid jsonDocumentEnvelope');
                }
                return deferred.promise;
            };
            return DocumentService;
        }());
        DocumentService.$inject = [
            '$q',
            '$http',
            '$timeout'
        ];
        Services.DocumentService = DocumentService;
        angular.module('calypso.services').service('DocumentService', DocumentService);
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
        var ReqBuilder = (function () {
            function ReqBuilder(_) {
                this._ = _;
                this.defaultSearchReqData = {
                    aq: '',
                    searchHub: 'default',
                    language: 'en',
                    pipeline: 'default',
                    firstResult: 0,
                    numberOfResults: calypso.Const.Paging.DEFAULT_LIMIT,
                    excerptLength: 200,
                    filterField: null,
                    enableDidYouMean: true,
                    sortCriteria: 'fieldDescending',
                    sortField: '@tpmillesime',
                    queryFunctions: [],
                    rankingFunctions: [],
                    retrieveFirstSentences: true,
                    timezone: 'America/New_York',
                    enableDuplicateFiltering: false,
                    enableCollaborativeRating: false
                };
                self = this;
            }
            // Currently only accessing the SUBSTANCE API
            ReqBuilder.prototype.getUri = function (searchReq) {
                return "" + calypso.Const.API.SUBSTANCE_URI;
            };
            ReqBuilder.prototype.getData = function (searchReq) {
                var data = angular.extend({}, self.defaultSearchReqData, {
                    aq: self.getFilters(searchReq.filters),
                    q: self.getMainSearch(searchReq.filters),
                    sortField: "@" + searchReq.sort.field,
                    sortCriteria: searchReq.sort.dir,
                    firstResult: searchReq.paging.offset,
                    numberOfResults: searchReq.paging.limit
                });
                return data;
            };
            ReqBuilder.prototype.getMainSearch = function (filters) {
                return (self._.find(filters, { key: 'main-search' }) || {}).submitValue;
            };
            ReqBuilder.prototype.getFilters = function (filters) {
                var _formattedFilters = {};
                filters.forEach(function (filterCategory) {
                    if (angular.isArray(filterCategory) && filterCategory.length > 0) {
                        _formattedFilters[filterCategory[0].category] = filterCategory;
                    }
                    else {
                        _formattedFilters[filterCategory.category] = filterCategory;
                    }
                });
                var _categories = Object.keys(_formattedFilters);
                return _categories.reduce(function (qp, category) {
                    if (category !== 'main-search') {
                        var filter_1 = _formattedFilters[category];
                        if (angular.isArray(filter_1) && filter_1.length > 0) {
                            if (filter_1.length > 1) {
                                qp += "(@" + category + "==(";
                                filter_1.forEach(function (option, i) {
                                    qp += option.submitValue;
                                    qp += (i < (filter_1.length - 1)) ? ',' : '';
                                });
                                qp += '))';
                            }
                            else {
                                qp += "(@" + category + "==" + filter_1[0].submitValue + ")";
                            }
                        }
                        else {
                            qp += "(@" + category + "==" + filter_1.submitValue + ")";
                        }
                    }
                    return qp;
                }, '');
            };
            return ReqBuilder;
        }());
        ReqBuilder.$inject = [
            '_'
        ];
        Services.ReqBuilder = ReqBuilder;
        angular.module('calypso.services').service('ReqBuilder', ReqBuilder);
    })(Services = calypso.Services || (calypso.Services = {}));
})(calypso || (calypso = {}));

var calypso;
(function (calypso) {
    var Services;
    (function (Services) {
        var Events = calypso.Const.Events;
        var API = calypso.Const.API;
        var self;
        var Substances = (function () {
            function Substances($window, $q, $http, EventBus, ReqBuilder) {
                this.$window = $window;
                this.$q = $q;
                this.$http = $http;
                this.EventBus = EventBus;
                this.ReqBuilder = ReqBuilder;
                self = this;
                EventBus.subscribe(calypso.Const.Events.searchSubstances, self, self.performSearch);
            }
            Substances.prototype.search = function () {
                self.performSearch({})
                    .then(function (response) {
                    self.EventBus.publish(Events.loadSubstances, response);
                })["catch"](function (e) {
                    alert('Error: ' + JSON.stringify(e));
                });
            };
            Substances.prototype.performSearch = function (searchReq) {
                var deferred = self.$q.defer();
                var URI = API.BASE_API_URI + "/byType";
                self.$http.get(URI, {
                    params: {
                        'doc.type': 'SUBSTANCE',
                        'l': 20,
                        'o': 0,
                        'count': true,
                        'order': 'modified',
                        'formatter': 'iuclid6.DocumentSecuredRepresentation'
                    },
                    headers: {
                        'Accept': API.DEFAULT_ACCEPT_HEADER,
                        'iuclid6-user': 'SuperUser',
                        'iuclid6-pass': 'Baboon22!!'
                    }
                }).then(function (result) {
                    deferred.resolve(result.data);
                })["catch"](function (error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            };
            return Substances;
        }());
        Substances.$inject = [
            '$window',
            '$q',
            '$http',
            'EventBus',
            'ReqBuilder'
        ];
        Services.Substances = Substances;
        angular.module('calypso.services').service('Substances', Substances);
    })(Services = calypso.Services || (calypso.Services = {}));
})(calypso || (calypso = {}));

var calypso;
(function (calypso) {
    var Services;
    (function (Services) {
        var API = calypso.Const.API;
        var self;
        var TreeService = (function () {
            function TreeService($q, $http, $timeout) {
                this.$q = $q;
                this.$http = $http;
                this.$timeout = $timeout;
                this._treeCache = {};
                self = this;
            }
            TreeService.prototype._formatTreeDefinition = function (treeNode) {
                var result = {
                    code: treeNode.code,
                    title: treeNode.title,
                    completed: {
                        title: 'Completed',
                        documents: []
                    },
                    required: {
                        title: 'Required',
                        documents: []
                    },
                    optional: {
                        title: 'Optional',
                        documents: []
                    }
                };
                var _format = function (sections) {
                    if (sections && sections.length > 0) {
                        sections.forEach(function (section) {
                            section.documents.forEach(function (doc) {
                                if (doc.required === true) {
                                    result.required.documents.push(doc);
                                }
                                else {
                                    result.optional.documents.push(doc);
                                }
                            });
                            _format(section.sections);
                        });
                    }
                };
                _format(treeNode.sections);
                return result;
            };
            TreeService.prototype.getTreeDefinition = function (identifier) {
                var deferred = self.$q.defer();
                var URI = API.DOCUMENT_TREE_URI + "/" + identifier;
                if (self._treeCache[identifier]) {
                    self.$timeout(function () {
                        deferred.resolve(self._treeCache[identifier]);
                    }, 50);
                }
                else {
                    self.$http.get(URI, {
                        headers: { 'Accept': API.DEFAULT_ACCEPT_HEADER },
                        params: { 'for': 'SUBSTANCE' }
                    }).then(function (result) {
                        var treeDefinition = self._formatTreeDefinition(result.data);
                        self._treeCache[identifier] = treeDefinition;
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
            '$timeout'
        ];
        Services.TreeService = TreeService;
        angular.module('calypso.services').service('TreeService', TreeService);
    })(Services = calypso.Services || (calypso.Services = {}));
})(calypso || (calypso = {}));

var calypso;
(function (calypso) {
    var Directives;
    (function (Directives) {
        angular.module('calypso.directives').directive('formToolbar', [
            'DocumentService',
            function (DocumentService) {
                return {
                    scope: {
                        document: '='
                    },
                    templateUrl: calypso.Const.Templates.IUCLID_FORM_TOOLBAR_TPL,
                    link: function (scope) {
                        scope.state = {
                            downloadUrl: calypso.Const.API.BASE_URL + "/txt/" + scope.document.identifier
                        };
                        scope.save = function () {
                            debugger;
                            var envelope = DocumentService.generateJsonDocumentEnvelope(scope.document);
                            DocumentService.saveDocument(envelope);
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
                        document: '='
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
            'EventBus',
            'DB',
            'DocumentService',
            function ($rootScope, $timeout, EventBus, DB, DocumentService) {
                return {
                    scope: {},
                    templateUrl: calypso.Const.Templates.IUCLID_FORM_PICKER_TPL,
                    link: function (scope, el) {
                        var loadedDocumentCode;
                        scope.state = {
                            document: null,
                            submissionType: null
                        };
                        scope.state.submissionType = DB.getSubmissionType();
                        scope.loadSubmissionType = function () {
                            EventBus.publish(Events.loadSubmissionType, scope.state.submissionType);
                        };
                        if (scope.state.submissionType) {
                            scope.loadSubmissionType();
                        }
                        EventBus.subscribe(Events.loadSubmissionType, scope, function (type) {
                            scope.state.document = null;
                            loadedDocumentCode = null;
                            scope.state.submissionType = type;
                        });
                        EventBus.subscribe(Events.loadDocument, scope, function (documentCode) {
                            if (loadedDocumentCode !== documentCode) {
                                $rootScope.loading = true;
                                DocumentService.getDocumentDefinition(documentCode)
                                    .then(function (document) {
                                    var container = el[0].querySelector('.iuclid-form-content-wrapper');
                                    if (container) {
                                        container.scrollTop = 0;
                                    }
                                    scope.state.document = document;
                                    loadedDocumentCode = documentCode;
                                })["catch"](function (e) {
                                    alert('Failed to Get Document Definition: ' + JSON.stringify(e));
                                })["finally"](function () {
                                    $rootScope.loading = false;
                                });
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
        angular.module('calypso.directives').directive('iuclidBlock', [
            function () {
                return {
                    scope: {
                        content: '='
                    },
                    templateUrl: calypso.Const.Templates.IUCLID_ATTRIBUTE_BLOCK_TPL,
                    link: function (scope) {
                        scope.state = {
                            collapsed: true
                        };
                        scope.toggleWrapper = function () {
                            scope.state.collapsed = !scope.state.collapsed;
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

var calypso;
(function (calypso) {
    var Directives;
    (function (Directives) {
        angular.module('calypso.directives').directive('ngxActiveCls', [
            '$location',
            function ($location) {
                return {
                    restrict: 'A',
                    link: function ($scope, element) {
                        function _configCls() {
                            var el = element[0];
                            var currPath = $location.path();
                            var aPath = el.hash ? el.hash.replace('#', '') : el.pathname;
                            if (currPath.split('/')[1] === aPath.split('/')[1]) {
                                el.classList.add('active');
                            }
                            else {
                                el.classList.remove('active');
                            }
                        }
                        $scope.$on('$locationChangeSuccess', _configCls);
                        _configCls();
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
        angular.module('calypso.directives').directive('ngxDropDown', [
            function () {
                return {
                    restrict: 'E',
                    replace: true,
                    templateUrl: calypso.Const.Templates.NGX_DROP_DOWN_TPL,
                    scope: {
                        placeholder: '@',
                        values: '=',
                        onChange: '&'
                    },
                    link: function ($scope, $element) {
                        $scope.data = {
                            disabled: false,
                            value: null
                        };
                        $scope.data.value = $scope.placeholder || 'Select...';
                        $scope.select = function (value) {
                            $scope.data.value = value.title;
                            if (angular.isFunction($scope.onChange)) {
                                $scope.onChange({ value: value });
                            }
                        };
                        $element.bind('click', function (event) {
                            event.stopPropagation();
                            if (!$scope.data.disabled) {
                                $element.toggleClass('active');
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
            '_',
            'FuzzySearch',
            'EventBus',
            'TreeService',
            function ($rootScope, _, FuzzySearch, EventBus, TreeService) {
                return {
                    restrict: 'E',
                    scope: {},
                    templateUrl: Templates.SIDE_TREE_TPL,
                    link: function (scope, el) {
                        scope.state = {
                            filter: '',
                            tree: null,
                            treeDisplay: null
                        };
                        scope.props = {
                            selectedCode: null
                        };
                        scope.$on('$destroy', function () {
                            EventBus.unsubscribe(loadSubmissionTypeEvent);
                            EventBus.unsubscribe(loadDocumentEvent);
                        });
                        var _filter = function () {
                            var filterVal = scope.state.filter.toLowerCase();
                            if (scope.state.filter) {
                                scope.state.treeDisplay = angular.copy(scope.state.tree);
                                if (scope.state.treeDisplay.completed.documents.length > 0) {
                                    scope.state.treeDisplay.completed.documents = (new FuzzySearch(scope.state.treeDisplay.completed.documents, ['title'])).search(filterVal);
                                }
                                if (scope.state.treeDisplay.required.documents.length > 0) {
                                    scope.state.treeDisplay.required.documents = (new FuzzySearch(scope.state.treeDisplay.required.documents, ['title'])).search(filterVal);
                                }
                                if (scope.state.treeDisplay.optional.documents.length > 0) {
                                    scope.state.treeDisplay.optional.documents = (new FuzzySearch(scope.state.treeDisplay.optional.documents, ['title'])).search(filterVal);
                                }
                            }
                            else {
                                scope.state.treeDisplay = scope.state.tree;
                            }
                        };
                        scope.filter = _.debounce(function () {
                            scope.$apply(_filter);
                        }, 100);
                        var loadSubmissionTypeEvent = EventBus.subscribe(Events.loadSubmissionType, scope, function (type) {
                            $rootScope.loading = true;
                            scope.props.selectedCode = null;
                            TreeService.getTreeDefinition(type.identifier)
                                .then(function (tree) {
                                scope.state.tree = tree;
                                _filter();
                            })["catch"](function (e) {
                                alert('Failed to Load Tree: ' + JSON.stringify(e));
                            })["finally"](function () {
                                $rootScope.loading = false;
                            });
                        });
                        var loadDocumentEvent = EventBus.subscribe(Events.loadDocument, scope, function (code) {
                            scope.props.selectedCode = code;
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
                            EventBus.publish(Events.loadDocument, node.code);
                        };
                        scope.toggleSection = function ($event) {
                            scope.state.collapsed = !scope.state.collapsed;
                        };
                    }
                };
            }
        ]);
    })(Directives = calypso.Directives || (calypso.Directives = {}));
})(calypso || (calypso = {}));

angular.module('calypso').run(['$templateCache', function($templateCache) {$templateCache.put('/templates/endpointstudies.html','<h1>endpointstudies</h1>');
$templateCache.put('/templates/home.html','<side-filter filters="calypso.Const.Filters.IUCLID_SUBSTANCE_FILTERS"></side-filter>\n<div class="main-view">\n    <iuclid-substance-list></iuclid-substance-list>\n</div>\n');
$templateCache.put('/templates/new-substance.html','<side-tree></side-tree>\n<div class="main-view">\n    <iuclid-form-picker></iuclid-form-picker>\n</div>\n');
$templateCache.put('/templates/not-found.html','<div style="text-align: center; padding: 100px;">\n    <h1>We couldn\'t find the page you\'re looking for</h1>\n    <h3>\n        <a href="#/">Return Home</a>\n    </h3>\n</div>\n');
$templateCache.put('/templates/substances.html','<div class="side-tree">\n    <a href="/#/substances/new" class="btn btn-primary" style="margin-left: 20px;">Create New</a>\n</div>\n<div class="main-view">\n    <substance-list></substance-list>\n</div>\n');
$templateCache.put('/templates/directives/search-bar.html','<div class="search-bar">\n    <a href="/#/substances" ngx-active-cls>\n        SUBSTANCES\n    </a>\n    <a href="/#/endpointstudies" ngx-active-cls>\n        ENDPOINT STUDIES\n    </a>\n    <ngx-drop-down values="data.submissionTypes"\n                   on-change="onSubmissionTypeSelect(value)"\n                   placeholder="Select a Submission Type...">\n    </ngx-drop-down>\n</div>\n');
$templateCache.put('/templates/directives/side-filter.html','<div class="side-filter">\n    <div ng-repeat="filter in filters" class="filter-category">\n        <iuclid-substance-filter filter="filter"></iuclid-substance-filter>\n    </div>\n</div>\n');
$templateCache.put('/templates/directives/substance-list.html','<div class="substance-list">\n    <div class="substance-list-container">\n        <div style="display: flex; padding: 20px; border-bottom: 1px solid #e7e7e7;">\n            <span style="flex: 50;">Substance Name</span>\n            <span style="flex: 25;">Created On</span>\n            <span style="flex: 25;">Modified On</span>\n        </div>\n        <ul class="substance-item__container">\n            <li ng-repeat="substance in substances" class="substance-item">\n                <a href="/#/substances/{{ substance.representation.key }}"\n                   class="substance-item__name">{{ substance.representation.publicName }}</a>\n                <span class="substance-item__created-on">{{ substance.representation.createdOn | date:\'medium\' }}</span>\n                <span class="substance-item__modified-on">{{ substance.representation.modifiedOn | date:\'medium\' }}</span>\n            </li>\n        </ul>\n        <div ng-if="!substances.length" class="substance-list-empty">\n            <h1><i class="fa fa-cloud"></i></h1>\n            <h2>No Substances match your Search!</h2>\n        </div>\n    </div>\n</div>\n');
$templateCache.put('/templates/directives/iuclid-attributes/iuclid-attachment.html','<div class="form__content form__content--attachment">\n    <label>{{ content.title }}</label>\n    <input type="file"\n           name="{{ content.name }}"\n           accept="{{ content.mimeType }}"\n           ngx-multiple="{{ !!content.name }}" />\n</div>\n');
$templateCache.put('/templates/directives/iuclid-attributes/iuclid-block.html','<div class="form__content form__content--block"\n        ng-class="{ \'form__content--block--collapsed\': state.collapsed }">\n    <h3 class="form__conent--block__title"\n            ng-click="toggleWrapper()">\n        <i class="fa collapse-toggle"\n           ng-class="{ \'fa-chevron-down\': !state.collapsed, \'fa-chevron-right\': state.collapsed }"> </i>\n        {{ content.title }}\n        <i class="fa fa-check-circle"></i>\n        <!--<i class="fa fa-exclamation-circle"></i>-->\n    </h3>\n    <div class="form__content--block__wrapper">\n        <iuclid-form-content contents="content.contents"></iuclid-form-content>\n    </div>\n</div>\n');
$templateCache.put('/templates/directives/iuclid-attributes/iuclid-checkbox.html','<div class="form__content form__content--checkbox">\n    <label>{{ content.title }}</label>\n    <input type="checkbox"\n           ng-model="content.value" />\n</div>\n');
$templateCache.put('/templates/directives/iuclid-attributes/iuclid-date.html','<div class="form__content form__content--date">\n    <label>{{ content.title }}</label>\n    <input type="date"\n           ng-model="content.value" />\n</div>\n');
$templateCache.put('/templates/directives/iuclid-attributes/iuclid-numeric.html','<div class="form__content form__content--numeric">\n    <label>{{ content.title }}</label>\n    <input type="number"\n           ng-model="content.value"\n           min="{{ content.min }}"\n           max="{{ content.max }}" />\n</div>\n');
$templateCache.put('/templates/directives/iuclid-attributes/iuclid-pick-list.html','<div class="form__content form__content--pick-list">\n    <label>{{ content.title }}</label>\n\n    <select ng-options="item.phrase.text as item.phrase.text for item in state.phraseGroup"\n            ng-model="content.value"\n            class="form__content--pick-list__select">\n    </select>\n</div>\n');
$templateCache.put('/templates/directives/iuclid-attributes/iuclid-range.html','<div class="form__content form__content--range">\n    <label>{{ content.title }}</label>\n    <input type="range"\n           ng-model="content.value" />\n</div>\n');
$templateCache.put('/templates/directives/iuclid-attributes/iuclid-text.html','<div class="form__content form__content--text">\n    <label>{{ content.title }}</label>\n    <!--\n        If the content\'s max length is greater than 256\n        then we should use a text input to provide the\n        ability to provide a larger body of text.\n        Maybe in the future we want to provide some rich\n        text editor?\n    -->\n    <textarea ng-if="content.maxLength && content.maxLength > 256"\n              ng-model="content.value"\n              maxlength="{{ content.maxLength }}">\n    </textarea>\n    <!--\n        Otherwise for type text where the max length is less\n        then 256 we should use a regular text input since\n        it\'s more likely this is a relatively shorter value\n    -->\n    <input ng-if="!content.maxLength || content.maxLength <= 256"\n           type="text"\n           maxlength="{{ content.maxLength }}"\n           ng-model="content.value" />\n</div>\n');
$templateCache.put('/templates/directives/iuclid-form/form-toolbar.html','<div class="form-toolbar">\n    <div class="form-toolbar--filler"></div>\n    <button class="btn" ng-click="save()">\n        <i class="fa fa-save"></i>\n    </button>\n    <button class="btn">\n        <i class="fa fa-trash"></i>\n    </button>\n    <a href="{{ state.downloadUrl }}" class="btn">\n        <i class="fa fa-download"></i>\n    </a>\n</div>\n');
$templateCache.put('/templates/directives/iuclid-form/iuclid-form-contents.html','<div ng-repeat="content in contents" ng-switch="content.type">\n    <iuclid-block ng-switch-when="block" content="content"></iuclid-block>\n    <iuclid-text ng-switch-when="text" content="content"></iuclid-text>\n    <iuclid-checkbox ng-switch-when="boolean" content="content"></iuclid-checkbox>\n    <iuclid-range ng-switch-when="range" content="content"></iuclid-range>\n    <iuclid-numeric ng-switch-when="numeric" content="content"></iuclid-numeric>\n    <iuclid-pick-list ng-switch-when="picklist" content="content"></iuclid-pick-list>\n    <iuclid-attachment ng-switch-when="attachment" content="content"></iuclid-attachment>\n    <iuclid-date ng-switch-when="date" content="content"></iuclid-date>\n\n    <!--\n        The template for adding new form types is like this:\n        <iuclid-$type ng-switch-when="$type" content="content" ></iculid-$type>\n    -->\n\n    <div ng-switch-default class="form__content">\n        <pre class="no-type-warn">No Form Attribute Implementation for Type:[{{ content.type }}]<br><b>Content:</b> {{ content }}</pre>\n    </div>\n</div>\n');
$templateCache.put('/templates/directives/iuclid-form/iuclid-form-picker.html','<div class="form-picker__wrapper">\n    <h2 class="form-picker__title" ng-if="state.document">\n        {{ state.document.identifier }}\n        <small>{{ state.document.provider }} {{ state.document.version }}</small>\n    </h2>\n\n    <div ng-if="!state.submissionType" class="empty-state">\n        <h2 class="empty-state__title">Choose a Submission Type</h2>\n        <i class="fa fa-arrow-circle-up empty-state__icon"></i>\n        <p class="empty-state__description">In order to get started creating a new Substance, you first need to select a Submission Type.</p>\n    </div>\n\n    <div ng-if="state.submissionType && !state.document" class="empty-state">\n        <h2 class="empty-state__title">Choose a Document</h2>\n        <i class="fa fa-arrow-circle-left empty-state__icon"></i>\n        <p class="empty-state__description">Select a document from the Tree on the left. Note that there are required vs. optional Documents</p>\n    </div>\n\n    <div ng-if="state.document">\n        <iuclid-form document="state.document"></iuclid-form>\n    </div>\n</div>\n');
$templateCache.put('/templates/directives/iuclid-form/iuclid-form.html','<div class="iuclid-form">\n    <form-toolbar document="document"></form-toolbar>\n    <div class="iuclid-form-content-wrapper">\n        <iuclid-form-content contents="document.contents"></iuclid-form-content>\n    </div>\n</div>\n');
$templateCache.put('/templates/directives/ngx/drop-down.html','<div class="drop-down__wrapper">\n    <div class="drop-down__label__wrapper">\n        <span class="drop-down__label">{{ data.value }}</span>\n        <i class="fa fa-angle-down"></i>\n    </div>\n    <ul class="drop-down__item-wrapper">\n        <li class="drop-down__item"\n            ng-repeat="item in values"\n            ng-click="select(item)">\n            {{ item.title }}\n        </li>\n    </ul>\n</div>\n');
$templateCache.put('/templates/directives/side-tree/side-tree-section.html','<h3 class="side-tree__section__title"\n        ng-click="toggleSection($event)">\n    <i class="fa collapse-toggle"\n        ng-class="{ \'fa-chevron-down\': !state.collapsed, \'fa-chevron-right\': state.collapsed }"> </i>\n    {{ section.title }}\n    <span class="badge">{{ section.documents.length }}</span>\n</h3>\n<ul class="side-tree__node-container"\n        ng-class="{ \'side-tree__node-container--collapsed\': state.collapsed }">\n    <li class="side-tree__node"\n        ng-class="{ \'side-tree__node--selected\': (props.selectedCode === document.code) }"\n        ng-click="loadNodeDocument(document)"\n        ng-repeat="document in section.documents">\n        {{ document.title }}\n    </li>\n    <li class="empty-state__side-tree-section" ng-if="section.documents.length === 0">\n        <i class="fa fa-folder-open-o"></i>\n        <br/>\n        <span>Nothing here!</span>\n    </li>\n</ul>');
$templateCache.put('/templates/directives/side-tree/side-tree.html','<div class="side-tree" ng-if="state.tree">\n    <div class="side-tree__filter-container">\n        <input type="text"\n               class="side-tree__filter"\n               placeholder="Filter..."\n               ng-model="state.filter"\n               ng-change="filter()">\n    </div>\n    <side-tree-section section="state.treeDisplay.completed" props="props"></side-tree-section>\n    <side-tree-section section="state.treeDisplay.required" props="props"></side-tree-section>\n    <side-tree-section section="state.treeDisplay.optional" props="props"></side-tree-section>\n</div>\n');}]);