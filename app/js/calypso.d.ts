interface Window {
    FuzzySearch: any
}

declare namespace calypso {

    export interface RootScope extends ng.IRootScopeService {
        loading: boolean
    }

    export module Models {

        export interface SearchReqData {
            aq: string
            searchHub: string
            language: string
            pipeline: string
            firstResult: number
            numberOfResults: number
            excerptLength: number
            filterField: string
            enableDidYouMean: boolean
            sortCriteria: string
            sortField: string
            queryFunctions: any[]
            rankingFunctions: any[]
            retrieveFirstSentences: boolean
            timezone: string
            enableDuplicateFiltering: boolean
            enableCollaborativeRating: boolean
        }

        export interface SearchReq {
            docType: string
            filters?: SearchFilter[]
            sort?: SearchSort
            paging?: SearchPaging
        }

        export interface SearchSort {
            field: string
            dir: string
        }

        export interface SearchPaging {
            offset: number
            limit: number
        }

        export interface SearchRes<T> {
            results: T[]
            docType: string
            limit: number
            totalCount: number
        }

        export interface SearchFilter {
            key: string
            category: string
            value: string|number|boolean
            applyOnAdd: boolean
            breadCrumbDisplay: boolean
        }

        export interface IuclidEndPointStudyFilter {
            title: string
            type: string
            category: string
            options: IuclidEndPointStudyFilterOption[]
        }

        export interface IuclidEndPointStudyFilterOption {
            category: string
            key: string
            label: string
            bcDisplay?: string|boolean
            multi: boolean
            value: any
            submitValue: any
            skipApply?: boolean
        }

        export interface IuclidSubstanceFilter {
            title: string
            type: string
            category: string
            options: IuclidSubstanceFilterOption[]
        }

        export interface IuclidSubstanceFilterOption {
            category: string
            key: string
            label: string
            bcDisplay?: string|boolean
            multi: boolean
            value: any
            submitValue: any
            skipApply?: boolean
        }

        export interface IuclidEndPointStudy {
            _favorite?: boolean
            ClickUri: string
            clickUri: string
            key: string
            name: string
        }

        export interface Entity {
            uri: string
            representation: SubstanceRepresentation
        }

        export interface Representation {
            accessAllowed: boolean
            accessRight: string
            classtype: string
            createdOn: string
            definition: string
            key: string
            modifiedOn: string
            name: string
        }

        export interface SubstanceRepresentation extends Representation {
            publicName: string
            legalEntityRepresentation: LegalEntityRepresentation
        }

        export interface LegalEntityRepresentation extends Representation {
            country: Country
        }

        export interface Country {
            code: string
        }

        export interface Page {
            num: number|string
            active: boolean
        }

        export interface IuclidPhrase {
           code: string
           descriptor: string
        }

        export interface IuclidPhraseGroup {
            code: string,
            descriptor: string,
            phrases: IuclidPhrase[]
        }

        export interface SubmissionType {
            provider: string
            identifier: string
            title: string
            applicableFor: string
        }

        export interface SideTree {
            code: string
            title: string
            completed: SideTreeSection
            required: SideTreeSection
            optional: SideTreeSection
        }

        export interface SideTreeSection {
            title: string
            documents: calypso.Models.TreeNodeDocument[]
        }

        export interface TreeNode {
            code: string
            title: string
            sections: TreeNode[]
            documents: TreeNodeDocument[]
        }

        export interface TreeNodeDocument {
            code: string
            title: string
            access: string
            required: boolean
            single: boolean
        }

        export interface JsonDocumentEnvelopeHeader {
            key: string
            identifier: string
            definition: string
            parentKey: string
            parentDefinition: string
            order?: number
            name: string
            attachments?: string[]
            createdOn: string
            modifiedOn: string
        }

        export interface Document {
            identifier: string
            version: string
            provider: string
            '@lang': string
            contents: DocumentContent[]
        }

        export interface DocumentContent {
            type: string
            name: string
            value: string
            title: string
            required: boolean
            contents?: DocumentContent[]
        }

        export interface FormContent {
            name: string
            title: string
            type: string
        }

        export interface PickListContent extends FormContent {
            phrasegroup: string
        }

        export interface AttachmentContent extends FormContent {
            multiple: boolean
            mimeType: string
        }
    }
}
