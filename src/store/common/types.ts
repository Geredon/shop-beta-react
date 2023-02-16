import {ADD_ERROR_MESSAGE, SET_SEARCH_VALUE} from "./actions";


export type AddsErrorMessageType = {
    type: typeof ADD_ERROR_MESSAGE
    payload: string
}
export type SetSearchValueType = {
    type: typeof SET_SEARCH_VALUE
    payload: string
}

export type AppAction =
    | AddsErrorMessageType
    | SetSearchValueType

export type DefaultStateType = {
    errorMessage: null  | string
    searchValue: string
}