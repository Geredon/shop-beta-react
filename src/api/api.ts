import {httpClient} from "./httpClient";



export type TCatalogData = {
        id: string
        name: string
        description: string
        like: boolean
        picture: {
            path: string
            alt: string
        }
        price: {
            value: number
            currency: string
        }
}
export type TCatalogContentData = {
    content?: TCatalogData[]

}
export type TDetailed = {
        id?: string
        like?: boolean
        picture?: {
            path?: string
            alt?: string
        }
        name?: string
        price?: {
            value: number
            currency: string
        }
        description?: string
        info?: string
        details?: string
}
export type TDetailedContentData = {
    content: TDetailed;
}


export const catalogData = async () => {
    const data = await httpClient.get<TCatalogContentData>('/item/')
        .then(res => res?.data.content)
    return data
}

export const detailedData = async (id: string) => {
    const data = await httpClient.get<TDetailedContentData>('/item/' + id)
        .then(res => res?.data.content)
    return data
}
