import axios from "axios";
import {MAIN_URL} from "../constants/constants";
import {store} from "../store/store";
import {ADD_NOTIFICATION} from "../store/common/actions";

export const httpClient = axios.create({
    baseURL: MAIN_URL
});
httpClient.interceptors.response.use(function (response) {
    return (response);
}, function (error) {
    const addCash = () => {
        store.dispatch({type:ADD_NOTIFICATION, payload: error.message})
    }
    addCash(error)
    return Promise.reject(error);
})


