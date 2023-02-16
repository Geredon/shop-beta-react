
import style from "./ProductTitle.module.css"
import {FC} from "react";

type PropsTitleType = {
    name: string
}
const ProductTitle:FC<PropsTitleType> = ({name}) => {
    return(
        <p className={style.productTitle}>
            {name}
        </p>
    )
}

export default ProductTitle;