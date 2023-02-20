import style from "./CartBtnAdd.module.css"
import {Box, Button} from "@mui/material";

const CartBtnAdd = () => {
    return (
        <div className={style.cartBtnAdd}>
              <Button sx={{
                  width: "160px",
                  height: "40px",
                  fontSize: "24px",
                  color:" #ffffff",
                  background: "var(--orange)",
                  border: "none",
                  borderRadius: "10px",
                  textTransform: "none",
              }}>
                  Add to cart
              </Button>
        </div>
    )
};
export default CartBtnAdd;


