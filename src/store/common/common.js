import  {ADD_ERROR_MESSAGE} from "./actions";
import  {SEARCH_VALUE} from "./actions";


const defaultState = {
    errorMessage: null,
    setSearchValue: "",
}
export const common = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_ERROR_MESSAGE:
            return {...state,  errorMessage: action.payload}
        case  SEARCH_VALUE:
            return {...state,   setSearchValue: action.payload}
        default:
            return state
    }
}

