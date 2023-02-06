import  {ADD_NOTIFICATION} from "../common/actions";


const defaultState = {
    errorMessageText: null,
}
export const common = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_NOTIFICATION:
            return {...state,  errorMessageText: action.payload}
        default:
            return state
    }
}

