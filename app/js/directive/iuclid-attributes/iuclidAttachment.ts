module calypso.Directives {

    interface Scope extends ng.IScope {
        content: calypso.Models.AttachmentContent
    }

    angular.module('calypso.directives').directive('iuclidAttachment', [
        function() {
            return {
                scope: {
                    content: '='
                },
                templateUrl: calypso.Const.Templates.IUCLID_ATTRIBUTE_ATTACHMENT_TPL
            }
        }
    ]);
}
