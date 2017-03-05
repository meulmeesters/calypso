module calypso.Services {

    import API = calypso.Const.API;

    let self: any;

    export class TreeService {
        static $inject = [
            '$q',
            '$http'
        ];

        constructor(private $q: ng.IQService,
                    private $http: ng.IHttpService) {
            self = this;
        }

        private _formatTreeDefinition(treeNode: calypso.Models.TreeNode) {
            let result: calypso.Models.SideTree = {
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

            let _format = function(sections: calypso.Models.TreeNode[]) {
                if (sections && sections.length > 0) {
                    sections.forEach((section) => {
                        section.documents.forEach((doc) => {
                            if (doc.required === true) {
                                result.required.documents.push(doc);
                            } else {
                                result.optional.documents.push(doc);
                            }
                        });
                        _format(section.sections);
                    });
                }
            };

            _format(treeNode.sections);
            return result;
        }

        getTreeDefinition(identifier: string): ng.IPromise<calypso.Models.SideTree> {
            let deferred = self.$q.defer();
            let URI = `${API.DOCUMENT_TREE_URI}/${identifier}`;

            self.$http.get(URI, {
                headers: { 'Accept': API.DEFAULT_ACCEPT_HEADER },
                params: { 'for': 'SUBSTANCE' }
            }).then((result: any) => {
                let treeDefinition = self._formatTreeDefinition(result.data);
                deferred.resolve(treeDefinition);
            }).catch((e: any) => {
                alert('Failed to Get Tree Definition: ' + JSON.stringify(e));
            });

            return deferred.promise;
        }
    }

    angular.module('calypso.services').service('TreeService', TreeService);
}