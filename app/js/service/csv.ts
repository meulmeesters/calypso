module calypso.Services {

    import Events = calypso.Const.Events;
    import API = calypso.Const.API;

    let self: any;

    export class CSV {
        static $inject = [
            '$http'
        ];

        constructor(private $http: ng.IHttpService) {
            self = this;
        }

        private _fields = [{
            label: 'Substance',
            value: 'substance',
            default: 'X'
        }, {
            label: 'Test organism',
            value: 'organism',
            default: 'X'
        }, {
            label: 'Endpoint',
            value: 'endpoint',
            default: 'X'
        }, {
            label: 'Value (mg/L)',
            value: 'value',
            default: 'X'
        }, {
            label: 'Reference',
            value: 'reference',
            default: 'X'
        }];

        private _data = [{
            substance: 'Malachite green',
            organism: 'Rainbow trout (Oncorhynchus mykiss)',
            endpoint: '21 d EC50 growth rate',
            value: 0.68,
            reference: 'Smith et al. 2017'
        }, {
            substance: 'Crystal violet',
            organism: 'Water flea (Daphnia magna)',
            endpoint: '48 h EC50 immobilization',
            value: 4.5,
            reference: 'Johnson and Jones 2010'
        }, {
            substance: undefined,
            organism: undefined,
            endpoint: '96 h LC50 mortality',
            value: undefined,
            reference: undefined
        }];

        public download(doc: Models.DocumentDefinition) {
            self.$http.post(`${API.BASE_URL}/csv/${doc.identifier}`, {
                fields: self._fields,
                data: self._data
            }).then((result: any) => {
                let blob = new Blob([result.data]);
                let link = document.createElement('a');
                link.href = window.URL.createObjectURL(blob);

                link.download=`${doc.identifier}.csv`;
                link.click();
            }).catch((e: any) => {
                alert('Unable to download CSV at this time!');
            });
        }
    }

    angular.module('calypso.services').service('CSV', CSV);
}
