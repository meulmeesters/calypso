declare namespace calypso {

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
            filters: SearchFilter[]
            sort: SearchSort
            paging: SearchPaging
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

        export interface IuclidSubstance {
            _favorite?: boolean
            ClickUri: string
            clickUri: string
            key: string
            name : string
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
    }
}
