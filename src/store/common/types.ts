import {ADD_ERROR_MESSAGE, SET_SEARCH_VALUE} from "./actions";


export type ADD_ERROR_MESSAGE_TYPE = {
    type: typeof ADD_ERROR_MESSAGE
    payload: string
}
export type SET_SEARCH_VALUE_TYPE = {
    type: typeof SET_SEARCH_VALUE
    payload: string
}

export type APP_ACTION =
    | ADD_ERROR_MESSAGE_TYPE
    | SET_SEARCH_VALUE_TYPE

export type DEFAULT_STATE_TYPE = {
    errorMessage: null  | string
    searchValue: string
}