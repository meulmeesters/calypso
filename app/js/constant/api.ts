module calypso.Const.API {
    export const DEFAULT_ACCEPT_HEADER = 'application/vnd.iuclid6.ext+json';
    export const DEFINITION_ACCEPT_HEADER = 'application/vnd.iuclid6.ext+json;type=iuclid6.Definition';

    export const BASE_URL = 'http://iuclid.ca:3000';
    export const BASE_URI = `${BASE_URL}/iuclid6-ext/api/ext/v1`;
    export const BASE_DEFINITIONS_URI = `${BASE_URI}/definition`;

    export const SUBMISSION_TYPES_URI = `${BASE_DEFINITIONS_URI}/submissiontypes`;
    export const DOCUMENT_TREE_URI = `${BASE_DEFINITIONS_URI}/tree`;

    //Mock API
    //export const BASE_URL = 'http://localhost:3001';
    //export const BASE_URI = BASE_URL;
    export const SUBSTANCE_URI = BASE_URI;
    export const END_POINT_STUDY_URI = BASE_URI + '/endpointstudy';
}
