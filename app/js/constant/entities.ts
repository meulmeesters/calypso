module calypso.Const {
    export const Entities: {[key:string]: Models.EntityContext} = {
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
    }
}
