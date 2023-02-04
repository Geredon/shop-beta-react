import style from './showModal.module.css'
import imgClose from "./close.png"
import { useSelector} from "react-redux";
import {store} from "../../store/store";

const ShowModal = () => {
    const cash = useSelector(state => state.cash)
    function close() {
        store.dispatch({type:"ADD_CASH", payload: null})
    }

    return (
        <div className={cash === null ? style.popup : `${style.popup} ${style.popupShow}`}>
            <div className={style.popupBody}>
                <div className={style.popupContent}>
                    <div className={style.popupCloseImg}>
                        <img src={imgClose} alt="closeImg"/>
                    </div>
                    <h6 className={style.popupTitle}>Что-то пошло не так!</h6>
                    <div className={style.popupText}>
                        {cash}
                    </div>
                    <div className={style.popupCloseBtn}>
                        <button onClick={() => close()} className={style.popupClose}>Ок</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowModal;