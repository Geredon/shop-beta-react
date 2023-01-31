
import style from "./Quentuty.module.css"


const Quentuty = () => {
    return(
            <div className={style.quantity}>
                <div className={style.cartBtnMinus}>
                    <button className={style.minusBtn} type="button" name="button">
                        <svg width="14" height="2" viewBox="0 0 14 2" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 2H0V0H14V2Z" fill="#E97F03"/>
                        </svg>
                    </button>
                </div>
                <div className={style.cartInput}>
                    <input type="text" name="name" defaultValue="1"/>
                </div>
                <div className={style.cartBtnPlus}>
                    <button className={style.plusBtn} type="button" name="button">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="#E97F03"/>
                        </svg>
                    </button>
                </div>
            </div>
    )
};

export default Quentuty;