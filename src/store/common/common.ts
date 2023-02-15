import {ADD_ERROR_MESSAGE, SET_SEARCH_VALUE} from "./actions";
import {APP_ACTION, DEFAULT_STATE_TYPE} from "./types";


const defaultState: DEFAULT_STATE_TYPE = {
    errorMessage: null ,
    searchValue: "",
}
export const common = (state = defaultState, action: APP_ACTION): DEFAULT_STATE_TYPE => {
    switch (action.type) {
        case ADD_ERROR_MESSAGE:
            return {...state, errorMessage: action.payload}
        case SET_SEARCH_VALUE:
            return {...state, searchValue: action.payload}
        default:
            return state
    }
}

