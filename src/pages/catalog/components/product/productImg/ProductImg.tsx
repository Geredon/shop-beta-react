
import style from "./ProductImg.module.css"
import {MAIN_URL} from "../../../../../constants/constants";
import {FC} from "react";

export type PropsImgType = {
        path?:string
        alt?:string
}

const ProductImg:FC<PropsImgType> = ({path, alt}) => {

    const pathImg = `${MAIN_URL}${path}`

    return(
        <div className={style.productImg}>
            <div >
                <img src={pathImg} alt={alt}/>
            </div>
        </div>
    )
}

export default ProductImg;