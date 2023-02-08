import {ADD_ERROR_MESSAGE, SET_SEARCH_VALUE} from "./actions";

export function addErrorMessage(payload) {
    return {
        type: ADD_ERROR_MESSAGE,
        payload
    }
}

export function setSearchValue(payload) {

    return {
        type: SET_SEARCH_VALUE,
        payload
    }
}
