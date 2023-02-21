import {ADD_ERROR_MESSAGE, SET_SEARCH_VALUE} from "./actions";
import {AddsErrorMessageType, SetSearchValueType} from "./types";

export function addErrorMessage(payload: string): AddsErrorMessageType {
    return {
        type: ADD_ERROR_MESSAGE,
        payload
    }
}

export function setSearchValue(payload: string): SetSearchValueType {

    return {
        type: SET_SEARCH_VALUE,
        payload
    }
}
