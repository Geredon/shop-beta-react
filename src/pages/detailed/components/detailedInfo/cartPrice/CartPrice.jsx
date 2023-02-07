import style from "./CartPrice.module.css"

const CartPrice = (props) => {
    return (
        <div className={style.cartPrice}><p>{props.detailedInfo?.price?.currency}{props.detailedInfo?.price?.value}</p>
        </div>
    )
};

export default CartPrice;