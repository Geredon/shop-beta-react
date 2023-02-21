
import style from "./ProductPrice.module.css"
import {FC} from "react";

export type PropsPriceType = {
        value: number
        currency: string
}

const ProductPrice:FC<PropsPriceType> = ({value, currency}) => {
    const price = Math.floor(value);
    return(
        <p className={style.productPrice}>
            {currency} {price}
        </p>
    )
}

export default ProductPrice;