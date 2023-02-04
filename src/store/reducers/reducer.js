import  {ADD_CASH} from "../actions/actions";

const defaultState = {
    cash: null,
}

export const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_CASH:
            return {...state, cash: action.payload}
        default:
            return state
    }
}