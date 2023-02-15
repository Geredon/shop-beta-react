import style from "./CartAdd.module.css"
import Quantity from "./quantity/Quentuty";
import CartBtnAdd from "./cartBtnAdd/CartBtnAdd";

const CartAdd = () => {
    return (
        <div className={style.cartAdd}>
            <Quantity/>
            <CartBtnAdd/>
        </div>
    )
};

export default CartAdd;