
import style from "./ProductTitle.module.css"
import {FC} from "react";

type PropsTitleType = {
    title: string
}
const ProductTitle:FC<PropsTitleType> = (props) => {
    return(
        <p className={style.productTitle}>
            {props.title}
        </p>
    )
}

export default ProductTitle;