
import style from "./ProductImg.module.css"
import {mainUrl} from "../../../../../constants/constants";

const ProductImg = (props) => {
    let path = `${mainUrl}${props?.img?.path}`
    return(
        <div className={style.productImg}>
            <div className={style.wrapperImg}>
                <img src={path} alt={props.img.alt}/>
            </div>
        </div>
    )
}

export default ProductImg;