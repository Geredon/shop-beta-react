import {ADD_ERROR_MESSAGE, SET_SEARCH_VALUE} from "./actions";
import {AppAction, DefaultStateType} from "./types";


const defaultState: DefaultStateType = {
    errorMessage: null,
    searchValue: "",
}
export const common = (state = defaultState, action: AppAction): DefaultStateType => {
    switch (action.type) {
        case ADD_ERROR_MESSAGE:
            return {...state, errorMessage: action.payload}
        case SET_SEARCH_VALUE:
            return {...state, searchValue: action.payload}
        default:
            return state
    }
}

