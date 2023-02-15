import style from "./DetailedImg.module.css"
import {MAIN_URL} from "../../../../constants/constants";


export type PropsImgDetailedType = {
    pictureImg?: {
        path: string
        alt: string
    }
}

const DetailedImg = ({ pictureImg }: PropsImgDetailedType) => {
    const path = `${MAIN_URL}${pictureImg?.path}`
    const altImg = pictureImg?.alt

    return (
        <div className={style.detailedProductImg}>
            <img src={path} alt={altImg}/>
        </div>
    )
};

export default DetailedImg;