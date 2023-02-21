import style from "./CartPrice.module.css"
import {FC} from "react";

type PriceType = {
        currency?: string
        value?: number
}

const CartPrice: FC<PriceType> = ({currency, value}) => {
    return (
        <div className={style.cartPrice}><p>{currency}{value}</p>
        </div>
    )
};

export default CartPrice;