import {combineReducers, createStore} from "redux";
import {common} from "./common/common";
import { composeWithDevTools } from 'redux-devtools-extension'
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";



const rootReducer = combineReducers({
    common
})

export const store = createStore(rootReducer, composeWithDevTools())


export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => RootDispatch = useDispatch;