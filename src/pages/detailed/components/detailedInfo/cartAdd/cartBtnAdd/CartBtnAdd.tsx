import style from "./CartBtnAdd.module.css"
import {Button} from "@mui/material";

const CartBtnAdd = () => {
    return (
        <div className={style.cartBtnAdd}>
            <Button>
                Add to cart
            </Button>
        </div>
    )
};
export default CartBtnAdd;


