
import style from "./ProductPrice.module.css"
import {FC} from "react";

export type PropsPriceType = {
    price: {
        value: number
        currency: string
    }
}

const ProductPrice:FC<PropsPriceType> = (props) => {
    const price = Math.floor(props.price.value);
    return(
        <p className={style.productPrice}>
            {props.price.currency} {price}
        </p>
    )
}

export default ProductPrice;