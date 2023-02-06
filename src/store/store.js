import {combineReducers, createStore} from "redux";
import {common} from "./common/common";

const rootReducer = combineReducers({
    common
})

export const store = createStore(rootReducer , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())