var calypso;
(function (calypso) {
    var Const;
    (function (Const) {
        var API;
        (function (API) {
            API.DEFAULT_ACCEPT_HEADER = 'application/vnd.iuclid6.ext+json';
            API.DEFINITION_ACCEPT_HEADER = 'application/vnd.iuclid6.ext+json;type=iuclid6.Definition';
            API.BASE_URL = 'http://iuclid.ca:3000';
            API.BASE_URI = API.BASE_URL + "/iuclid6-ext/api/ext/v1";
            API.BASE_DEFINITIONS_URI = API.BASE_URI + "/definition";
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
            Events.loadIuclidSubstances = 'iuclidSubstance.load';
            Events.performSearch = 'search.load';
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
            Paging.DEFAULT_LIMIT = 12;
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
            Templates.IUCLID_SUBSTANCE_FILTER_TPL = BASE + 'directives/iuclid-substance-filter.html';
            Templates.IUCLID_SUBSTANCE_LIST_TPL = BASE + 'directives/iuclid-substance-list.html';
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
            Templates.IUCLID_ATTRIBUTE_DATE_TPL = BASE + 'directives/iuclid-attributes/iuclid-attribute-date.html';
            Templates.IUCLID_ATTRIBUTE_PICK_LIST_TPL = BASE + 'directives/iuclid-attributes/iuclid-pick-list.html';
            Templates.IUCLID_ATTRIBUTE_ATTACHMENT_TPL = BASE + 'directives/iuclid-attributes/iuclid-attachment.html';
            Templates.IUCLID_ATTRIBUTE_RANGE_TPL = BASE + 'directives/iuclid-attributes/iuclid-range.html';
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
    /**
     * Configure routes
     */
    angular.module('calypso').config([
        '$routeProvider',
        '$compileProvider',
        function ($routeProvider, $compileProvider) {
            $compileProvider.debugInfoEnabled(false);
            $routeProvider.when('/', {
                templateUrl: Templates.HOME_TPL
            }).when('/substances', {
                templateUrl: Templates.SUBSTANCES_TPL
            }).when('/endpointstudies', {
                templateUrl: Templates.ENDPOINTSTUDIES_TPL
            }).when('/substances/new', {
                templateUrl: Templates.NEW_SUBSTANCE_TPL
            }).when('/picklist', {
                templateUrl: Templates.IUCLID_ATTRIBUTE_PICK_LIST_TPL
            }).otherwise({
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
        angular.module('calypso.directives').directive('iuclidSubstanceFilter', [
            '_',
            'DB',
            'EventBus',
            function (_, DB, EventBus) {
                return {
                    restrict: 'E',
                    scope: {
                        filter: '='
                    },
                    templateUrl: Templates.IUCLID_SUBSTANCE_FILTER_TPL,
                    link: function (scope) {
                        scope.onChange = function (option, iuclidSubstancefilter) {
                            switch (iuclidSubstancefilter.type) {
                                case 'checkbox':
                                    // If there are any options which are selected then add this filter
                                    // otherwise it should be removed
                                    var event_1 = option.value === true ?
                                        calypso.Const.Events.addFilter : calypso.Const.Events.removeFilter;
                                    // If this is not a multi filter then we need to remove any other selections made
                                    if (option.multi === false) {
                                        iuclidSubstancefilter.options.forEach(function (_option) {
                                            if (_option.key !== option.key && _option.value === true) {
                                                _option.skipApply = true;
                                                _option.value = false;
                                                EventBus.publish(calypso.Const.Events.removeFilter, _option);
                                            }
                                        });
                                    }
                                    EventBus.publish(event_1, option);
                                    break;
                            }
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
        angular.module('calypso.directives').directive('iuclidEndPointStudyList', [
            '$window',
            'DB',
            'EventBus',
            function ($window, DB, EventBus) {
                return {
                    restrict: 'E',
                    scope: {},
                    templateUrl: Templates.IUCLID_END_POINT_STUDY_LIST_TPL,
                    link: function (scope, element) {
                        scope.iuclidEndPointStudies = DB.getIuclidEndPointStudies();
                        scope.openIuclidEndPointStudy = function (iuclidEndPointStudy) {
                            if (iuclidEndPointStudy && iuclidEndPointStudy.clickUri) {
                                $window.open(iuclidEndPointStudy.clickUri);
                            }
                        };
                        scope.favoriteIuclidEndPointStudy = function (iuclidEndPointStudy, $event) {
                            $event.preventDefault();
                            $event.stopPropagation();
                            var itemKey = calypso.Const.LocalStorage.FAVORITE_IUCLID_END_POINT_STUDIES;
                            var favoritesStr = $window.localStorage.getItem(itemKey);
                            var favorites = (favoritesStr) ? JSON.parse(favoritesStr) : {};
                            if (iuclidEndPointStudy._favorite === true) {
                                iuclidEndPointStudy._favorite = false;
                                delete favorites[iuclidEndPointStudy.key];
                            }
                            else {
                                iuclidEndPointStudy._favorite = true;
                                favorites[iuclidEndPointStudy.key] = true;
                            }
                            $window.localStorage.setItem(itemKey, JSON.stringify(favorites));
                        };
                        EventBus.subscribe(calypso.Const.Events.loadIuclidEndPointStudies, scope, function () {
                            document.querySelector('div.iuclid-end-point-study-list').scrollTop = 0;
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
        angular.module('calypso.directives').directive('iuclidSubstanceList', [
            '$window',
            'DB',
            'EventBus',
            function ($window, DB, EventBus) {
                return {
                    restrict: 'E',
                    scope: {},
                    templateUrl: Templates.IUCLID_SUBSTANCE_LIST_TPL,
                    link: function (scope, element) {
                        scope.iuclidSubstances = DB.getIuclidSubstances();
                        scope.openIuclidSubstance = function (iuclidSubstance) {
                            if (iuclidSubstance && iuclidSubstance.clickUri) {
                                $window.open(iuclidSubstance.clickUri);
                            }
                        };
                        scope.favoriteIuclidSubstance = function (iuclidSubstance, $event) {
                            $event.preventDefault();
                            $event.stopPropagation();
                            var itemKey = calypso.Const.LocalStorage.FAVORITE_IUCLID_SUBSTANCES;
                            var favoritesStr = $window.localStorage.getItem(itemKey);
                            var favorites = (favoritesStr) ? JSON.parse(favoritesStr) : {};
                            if (iuclidSubstance._favorite === true) {
                                iuclidSubstance._favorite = false;
                                delete favorites[iuclidSubstance.key];
                            }
                            else {
                                iuclidSubstance._favorite = true;
                                favorites[iuclidSubstance.key] = true;
                            }
                            $window.localStorage.setItem(itemKey, JSON.stringify(favorites));
                        };
                        EventBus.subscribe(calypso.Const.Events.loadIuclidSubstances, scope, function () {
                            document.querySelector('div.iuclid-substance-list').scrollTop = 0;
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
        angular.module('calypso.directives').directive('searchBar', [
            'EventBus',
            'IuclidSubstanceFilter',
            function (EventBus, Filter) {
                return {
                    restrict: 'E',
                    scope: {},
                    templateUrl: Templates.SEARCH_BAR_TPL,
                    link: function (scope, element) {
                        //run an initial blank search
                        // EventBus.publish(calypso.Const.Events.applyFilters);
                        var mainSearchInput = element.find('input');
                        mainSearchInput.bind('keydown', function (event) {
                            debugger;
                            if (event.which === 13) {
                                var searchTerm = mainSearchInput.val();
                                EventBus.publish(calypso.Const.Events.addFilter, {
                                    category: 'main-search',
                                    key: 'main-search',
                                    label: '',
                                    bcDisplay: searchTerm,
                                    multi: false,
                                    value: searchTerm,
                                    submitValue: searchTerm
                                });
                                mainSearchInput.val('');
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
                    filters: {},
                    iuclidSubstances: [],
                    submissionTypes: [],
                    sort: {
                        field: 'tpmillesime',
                        dir: calypso.Const.Filters.Sort.DESC
                    },
                    paging: {
                        offset: 0,
                        limit: calypso.Const.Paging.DEFAULT_LIMIT
                    }
                };
                EventBus.subscribe(calypso.Const.Events.addFilter, self, self.addFilter);
                EventBus.subscribe(calypso.Const.Events.removeFilter, self, self.removeFilter);
                EventBus.subscribe(calypso.Const.Events.loadIuclidSubstances, self, self.loadIuclidSubstances);
            }
            DB.prototype.addFilter = function (option) {
                if (option) {
                    if (option.multi) {
                        self._db.filters[option.category] = (self._db.filters[option.category] || []);
                        self._db.filters[option.category].push(option);
                    }
                    else {
                        self._db.filters[option.category] = option;
                    }
                    self.EventBus.publish(calypso.Const.Events.afterAddFilter, option);
                    self.EventBus.publish(calypso.Const.Events.applyFilters);
                }
            };
            DB.prototype.removeFilter = function (option) {
                var filters = self._db.filters;
                if (filters && filters[option.category]) {
                    if (option.multi) {
                        var options = filters[option.category];
                        options.splice(_.findIndex(options, { key: option.key }), 1);
                        // If there are no more options selected remove the category
                        if (options.length === 0) {
                            delete filters[option.category];
                        }
                    }
                    else {
                        delete filters[option.category];
                    }
                    self.EventBus.publish(calypso.Const.Events.afterRemoveFilter, option);
                    if (option.skipApply !== true) {
                        self.EventBus.publish(calypso.Const.Events.applyFilters);
                    }
                }
                // TODO: This is not good but currently using calypso.Const.Filters as the src
                // for the iuclid-substance-filters component. It should use DB instead
                var idx = self._.findIndex(calypso.Const.Filters.IUCLID_SUBSTANCE_FILTERS, { category: option.category });
                var _filter = calypso.Const.Filters.IUCLID_SUBSTANCE_FILTERS[idx];
                if (_filter) {
                    if (option.multi) {
                        idx = self._.findIndex(_filter.options, { key: option.key });
                        if (_filter.options[idx]) {
                            switch (_filter.type) {
                                case 'checkbox':
                                    _filter.options[idx].value = false;
                                    break;
                            }
                        }
                    }
                    else {
                        switch (_filter.type) {
                            case 'checkbox':
                                var _option = self._.find(_filter.options, { key: option.key }) || {};
                                _option.value = false;
                                break;
                        }
                    }
                }
            };
            DB.prototype.loadIuclidSubstances = function (response) {
                var newIuclidSubstances = response.results;
                var iuclidSubstances = self.getIuclidSubstances();
                iuclidSubstances.splice(0, iuclidSubstances.length);
                iuclidSubstances.push.apply(iuclidSubstances, newIuclidSubstances);
            };
            DB.prototype.loadIuclidEndPointStudies = function (response) {
                var newIuclidEndPointStudies = response.results;
                var iuclidEndPointStudies = self.getIuclidEndPointStudies();
                iuclidEndPointStudies.splice(0, iuclidEndPointStudies.length);
                iuclidEndPointStudies.push.apply(iuclidEndPointStudies, newIuclidEndPointStudies);
            };
            DB.prototype.getFilters = function () {
                return self.$parse('_db.filters')(self);
            };
            DB.prototype.getIuclidEndPointStudies = function () {
                return self.$parse('_db.iuclidEndPointStudies')(self);
            };
            DB.prototype.getIuclidSubstances = function () {
                return self.$parse('_db.iuclidSubstances')(self);
            };
            DB.prototype.getSorting = function () {
                return self.$parse('_db.sort')(self);
            };
            DB.prototype.getPaging = function () {
                return self.$parse('_db.paging')(self);
            };
            DB.prototype.setPaging = function (paging) {
                self._db.paging = paging;
            };
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
        var IuclidSubstance = (function () {
            function IuclidSubstance($window, $q, $http, EventBus, ReqBuilder) {
                this.$window = $window;
                this.$q = $q;
                this.$http = $http;
                this.EventBus = EventBus;
                this.ReqBuilder = ReqBuilder;
                self = this;
                EventBus.subscribe(calypso.Const.Events.performSearch, self, self.performSearch);
            }
            IuclidSubstance.prototype.search = function (searchReq) {
                var deferred = self.$q.defer();
                var uri = self.ReqBuilder.getUri(searchReq) + '/raw/SUBSTANCE/8082ace8-26b8-4800-914f-5c44988ebebc';
                console.log("The Substance uri is " + uri);
                var data = self.ReqBuilder.getData(searchReq);
                console.log("The Data is " + data);
                var config = { headers: { 'accept': 'application/vnd.iuclid6.ext+json; type=iuclid6.Document',
                        'iuclid6-user': 'SuperUser',
                        'iuclid6-pass': 'root' }
                };
                self.$http.get(uri, config, data)
                    .then(function (result) {
                    var modifiedResult = {
                        totalCount: result.data.length,
                        results: result.data
                    };
                    self.enrich(modifiedResult);
                    deferred.resolve(modifiedResult);
                })["catch"](function (error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            };
            IuclidSubstance.prototype.enrich = function (searchRes) {
                var favoritesKey = calypso.Const.LocalStorage.FAVORITE_IUCLID_SUBSTANCES;
                var favoritesStr = self.$window.localStorage.getItem(favoritesKey);
                var favorites = (favoritesStr) ? JSON.parse(favoritesStr) : {};
                //var substance = JSON.parse(searchRes);
                //console.log(substance);
                console.log(JSON.stringify(searchRes));
                searchRes.results.forEach(function (iuclidSubstance) {
                    iuclidSubstance._favorite = (favorites[iuclidSubstance.key]) ? true : false;
                    console.log(iuclidSubstance.name);
                    // use HTTPS urls for the image thumbnails
                    // iuclidSubstance.raw.tpthumbnailuri = iuclidSubstance.raw.tpthumbnailuri.replace('http', 'https');
                });
            };
            return IuclidSubstance;
        }());
        IuclidSubstance.$inject = [
            '$window',
            '$q',
            '$http',
            'EventBus',
            'ReqBuilder'
        ];
        Services.IuclidSubstance = IuclidSubstance;
        angular.module('calypso.services').service('IuclidSubstance', IuclidSubstance);
    })(Services = calypso.Services || (calypso.Services = {}));
})(calypso || (calypso = {}));

var calypso;
(function (calypso) {
    var Services;
    (function (Services) {
        var self;
        var IuclidSubstanceFilter = (function () {
            function IuclidSubstanceFilter($rootScope, EventBus, DB, IuclidSubstance) {
                this.$rootScope = $rootScope;
                this.EventBus = EventBus;
                this.DB = DB;
                this.IuclidSubstance = IuclidSubstance;
                self = this;
                EventBus.subscribe(calypso.Const.Events.applyFilters, self, self.applyFilters);
                EventBus.subscribe(calypso.Const.Events.performSearch, self, self.performSearch);
            }
            IuclidSubstanceFilter.prototype.buildSearchReq = function () {
                var filters = self.DB.getFilters();
                var searchFilters = Object.keys(filters).map(function (key) {
                    return filters[key];
                });
                return {
                    filters: searchFilters,
                    sort: self.DB.getSorting(),
                    paging: self.DB.getPaging()
                };
            };
            IuclidSubstanceFilter.prototype.performSearch = function () {
                self.$rootScope.loading = true;
                self.IuclidSubstance.search(self.buildSearchReq())
                    .then(function (searchRes) {
                    self.EventBus.publish(calypso.Const.Events.loadIuclidSubstances, searchRes);
                    self.$rootScope.loading = false;
                })["catch"](function (error) {
                    alert('Error searching for Iuclid Substances');
                    self.$rootScope.loading = false;
                });
            };
            IuclidSubstanceFilter.prototype.applyFilters = function () {
                self.performSearch();
            };
            return IuclidSubstanceFilter;
        }());
        IuclidSubstanceFilter.$inject = [
            '$rootScope',
            'EventBus',
            'DB',
            'IuclidSubstance'
        ];
        Services.IuclidSubstanceFilter = IuclidSubstanceFilter;
        angular.module('calypso.services').service('IuclidSubstanceFilter', IuclidSubstanceFilter);
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
        var API = calypso.Const.API;
        var self;
        var TreeService = (function () {
            function TreeService($q, $http) {
                this.$q = $q;
                this.$http = $http;
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
                        title: 'Others',
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
                self.$http.get(URI, {
                    headers: { 'Accept': API.DEFAULT_ACCEPT_HEADER },
                    params: { 'for': 'SUBSTANCE' }
                }).then(function (result) {
                    var treeDefinition = self._formatTreeDefinition(result.data);
                    deferred.resolve(treeDefinition);
                })["catch"](function (e) {
                    alert('Failed to Get Tree Definition: ' + JSON.stringify(e));
                });
                return deferred.promise;
            };
            return TreeService;
        }());
        TreeService.$inject = [
            '$q',
            '$http'
        ];
        Services.TreeService = TreeService;
        angular.module('calypso.services').service('TreeService', TreeService);
    })(Services = calypso.Services || (calypso.Services = {}));
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
        angular.module('calypso.directives').directive('formToolbar', [
            function () {
                return {
                    templateUrl: calypso.Const.Templates.IUCLID_FORM_TOOLBAR_TPL
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
                            submissionType: null,
                            submissionTypes: DB.getSubmissionTypes()
                        };
                        scope.loadSubmissionType = function () {
                            scope.state.document = null;
                            loadedDocumentCode = null;
                            EventBus.publish(Events.loadSubmissionType, scope.state.submissionType);
                        };
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
        var Events = calypso.Const.Events;
        var Templates = calypso.Const.Templates;
        angular.module('calypso.directives').directive('sideTree', [
            '$rootScope',
            'EventBus',
            'TreeService',
            function ($rootScope, EventBus, TreeService) {
                return {
                    restrict: 'E',
                    scope: {},
                    templateUrl: Templates.SIDE_TREE_TPL,
                    link: function (scope) {
                        scope.state = {
                            tree: null
                        };
                        scope.props = {
                            selectedCode: null
                        };
                        EventBus.subscribe(Events.loadSubmissionType, scope, function (type) {
                            $rootScope.loading = true;
                            scope.props.selectedCode = null;
                            TreeService.getTreeDefinition(type.identifier)
                                .then(function (tree) {
                                scope.state.tree = tree;
                            })["catch"](function (e) {
                                alert('Failed to Load Tree: ' + JSON.stringify(e));
                            })["finally"](function () {
                                $rootScope.loading = false;
                            });
                        });
                        EventBus.subscribe(Events.loadDocument, scope, function (code) {
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
