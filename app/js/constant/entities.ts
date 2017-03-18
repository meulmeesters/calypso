module calypso.Const {
    export const Entities: {[key:string]: Models.EntityContext} = {
        substances: {
            docType: 'SUBSTANCE',
            displayName: 'Substance',
            state: 'entities.substances',
            legal: true
        },
        mixtures: {
            docType: 'MIXTURE',
            displayName: 'Mixture',
            state: 'entities.mixtures',
            legal: true
        },
        templates: {
            docType: 'TEMPLATE',
            displayName: 'Template',
            state: 'entities.templates',
            legal: true
        },
        categories: {
            docType: 'CATEGORY',
            displayName: 'Category',
            state: 'entities.categories',
            legal: true
        },
        literature: {
            docType: 'LITERATURE',
            displayName: 'Literature',
            state: 'entities.literature',
            legal: false
        },
        dossier: {
            docType: 'DOSSIER',
            displayName: 'Dossier',
            state: 'entities.dossier',
            legal: false
        },
        'legal-entities': {
            docType: 'LEGAL_ENTITY',
            displayName: 'Legal Entity',
            state: 'entities.legal-entities',
            legal: false
        },
        annotations: {
            docType: 'ANNOTATION',
            displayName: 'Annotation',
            state: 'entities.annotation',
            legal: false
        },
        sites: {
            docType: 'SITE',
            displayName: 'Site',
            state: 'entities.site',
            legal: true
        },
        'reference-substances': {
            docType: 'REFERENCE_SUBSTANCE',
            displayName: 'Reference Substance',
            state: 'entities.reference-substances',
            legal: false
        },
        contacts: {
            docType: 'CONTACT',
            displayName: 'Contact',
            state: 'entities.contacts',
            legal: false
        }
    }
}
