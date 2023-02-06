import {ADD_NOTIFICATION} from "./actions";

export function addNotification(payload) {
    return {
        type: ADD_NOTIFICATION,
        payload
    }
}