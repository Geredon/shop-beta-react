import {httpClient} from "./httpClient";

export const catalogData = async () => {
    const data = await httpClient.get('/item/')
        .then(res => res.data.content)
    return data
}

export const detailedData = async (id) => {
    const data = await httpClient.get('/item/' + id)
        .then(res => res.data.content)
    return data
}
