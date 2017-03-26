module calypso.Services {

    import API = calypso.Const.API;

    let self: any;

    export class TreeService {
        static $inject = [
            '$q',
            '$http',
            '$timeout',
            'DB'
        ];

        constructor(private $q: ng.IQService,
                    private $http: ng.IHttpService,
                    private $timeout: ng.ITimeoutService,
                    private DB: calypso.Services.DB) {
            self = this;
        }

        private _formatTreeDefinition(treeNode: calypso.Models.TreeNode) {
            let completedSections = self.DB.getCompletedSections();
            let result: calypso.Models.SideTree = {
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

            let _format = function(sections: calypso.Models.TreeNode[]) {
                if (sections && sections.length > 0) {
                    sections.forEach((section) => {
                        section.documents.forEach((doc) => {
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
        }

        private _treeCache = {};

        getTreeDefinition(identifier: string, clearCache: boolean): ng.IPromise<calypso.Models.SideTree> {
            let deferred = self.$q.defer();
            let URI = `${API.DOCUMENT_TREE_URI}/${identifier}`;

            if (self._treeCache[identifier] && !clearCache) {
                self.$timeout(() => {
                    let treeDefinition = self._formatTreeDefinition(self._treeCache[identifier]);
                    deferred.resolve(treeDefinition);
                }, 50);
            }
            else {
                self.$http.get(URI, {
                    headers: {'Accept': API.DEFAULT_ACCEPT_HEADER},
                    params: {'for': 'SUBSTANCE'}
                }).then((result: any) => {
                    self._treeCache[identifier] = result.data;
                    let treeDefinition = self._formatTreeDefinition(result.data);
                    deferred.resolve(treeDefinition);
                }).catch((e: any) => {
                    alert('Failed to Get Tree Definition: ' + JSON.stringify(e));
                });
            }

            return deferred.promise;
        }

    }

    angular.module('calypso.services').service('TreeService', TreeService);
}