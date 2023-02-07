
import style from "./Quentuty.module.css"
import minusSvg from "./minus.svg"
import plusSvg from "./plus.svg"

const Quantity = () => {
    return(
            <div className={style.quantity}>
                <div className={style.cartBtnMinus}>
                    <button className={style.minusBtn} type="button" name="button">
                        <img src={minusSvg} alt="plusButton"/>
                    </button>
                </div>
                <div className={style.cartInput}>
                    <input type="text" name="name" defaultValue="1"/>
                </div>
                <div className={style.cartBtnPlus}>
                    <button className={style.plusBtn} type="button" name="button">
                        <img src={plusSvg} alt="minusButton"/>
                    </button>
                </div>
            </div>
    )
};

export default Quantity;