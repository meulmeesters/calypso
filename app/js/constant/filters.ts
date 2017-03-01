module calypso.Const.Filters {

    import Models = calypso.Models;

    export const Sort = {
        ASC: 'fieldAscending',
        DESC: 'fieldDescending'
    };


    export const ORGANIZATION: Models.IuclidSubstanceFilter = {
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


    export const IUCLID_SUBSTANCE_FILTERS: Models.IuclidSubstanceFilter[] = [
        ORGANIZATION
    ];
}
