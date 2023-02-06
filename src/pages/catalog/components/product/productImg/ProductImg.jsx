
import style from "./ProductImg.module.css"
import {MAIN_URL} from "../../../../../constants/constants";

const ProductImg = (props) => {
    let path = `${MAIN_URL}${props?.img?.path}`
    return(
        <div className={style.productImg}>
            <div className={style.wrapperImg}>
                <img src={path} alt={props.img.alt}/>
            </div>
        </div>
    )
}

export default ProductImg;