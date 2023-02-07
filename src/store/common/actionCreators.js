import {ADD_ERROR_MESSAGE, SEARCH_VALUE} from "./actions";

export function addErrorMessage(payload) {
    return {
        type: ADD_ERROR_MESSAGE,
        payload
    }
}

export function searchValue(payload) {

    return {
        type: SEARCH_VALUE,
        payload
    }
}
