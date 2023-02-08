import  {ADD_ERROR_MESSAGE} from "./actions";
import  {SET_SEARCH_VALUE} from "./actions";


const defaultState = {
    errorMessage: null,
    searchValue: "",
}
export const common = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_ERROR_MESSAGE:
            return {...state,  errorMessage: action.payload}
        case SET_SEARCH_VALUE:
            return {...state,   searchValue: action.payload}
        default:
            return state
    }
}

