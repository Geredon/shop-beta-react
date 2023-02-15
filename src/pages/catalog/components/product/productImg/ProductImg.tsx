
import style from "./ProductImg.module.css"
import {MAIN_URL} from "../../../../../constants/constants";
import {FC} from "react";

export type PropsImgType = {
    img: {
        path:string
        alt:string
    }
}

const ProductImg:FC<PropsImgType> = (props) => {

    const path = `${MAIN_URL}${props?.img?.path}`
    return(
        <div className={style.productImg}>
            <div >
                <img src={path} alt={props.img.alt}/>
            </div>
        </div>
    )
}

export default ProductImg;