import style from "./CartPrice.module.css"
import {FC} from "react";

type PriceType = {
    price?: {
        currency: string
        value: number
    }
}


const CartPrice: FC<PriceType> = (props) => {
    return (
        <div className={style.cartPrice}><p>{props.price?.currency}{props.price?.value}</p>
        </div>
    )
};

export default CartPrice;