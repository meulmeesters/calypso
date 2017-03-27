module calypso.Const.API {
    export const DEFAULT_ACCEPT_HEADER = 'application/vnd.iuclid6.ext+json';
    export const DEFINITION_ACCEPT_HEADER = 'application/vnd.iuclid6.ext+json;type=iuclid6.Definition';
    export const DOCUMENT_CONTENT_TYPE_HEADER = 'application/vnd.iuclid6.ext+json; type=iuclid6.Document';

    export const BASE_URL = 'https://iuclid.ca/api';
    export const BASE_URI = `${BASE_URL}/iuclid6-ext/api/ext/v1`;
    export const BASE_DEFINITIONS_URI = `${BASE_URI}/definition`;
    export const BASE_API_URI = `${BASE_URI}/query/iuclid6`;
    export const BASE_RAW_URI = `${BASE_URI}/raw`;

    export const SUBMISSION_TYPES_URI = `${BASE_DEFINITIONS_URI}/submissiontypes`;
    export const DOCUMENT_TREE_URI = `${BASE_DEFINITIONS_URI}/tree`;
}
