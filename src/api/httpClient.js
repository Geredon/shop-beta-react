import axios from "axios";
import {MAIN_URL} from "../constants/constants";
import {store} from "../store/store";
import {addErrorMessage} from "../store/common/actionCreators";

export const httpClient = axios.create({
    baseURL: MAIN_URL
});
httpClient.interceptors.response.use(function (response) {
    return (response);
}, function (error) {
    const addCash = () => {
        store.dispatch(addErrorMessage(error.message))
    }
    addCash(error)
    return Promise.reject(error);
})


