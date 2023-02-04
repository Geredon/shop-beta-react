import axios from "axios";
import {mainUrl} from "../constants/constants";
import {store} from "../store/store";

export const httpClient = axios.create({
    baseURL: mainUrl
});
httpClient.interceptors.response.use(function (response) {
    return (response);
}, function (error) {
    const addCash = () => {
        store.dispatch({type:"ADD_CASH", payload: error.message})
    }
    addCash(error)
    return Promise.reject(error);
})


