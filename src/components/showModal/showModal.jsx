import style from './showModal.module.css'
import imgClose from "./close.png"
import {useSelector} from "react-redux";
import {store} from "../../store/store";
import {addNotification} from "../../store/common/actionCreators";

const ShowModal = () => {
    const message = useSelector(state => state.common.errorMessageText)
    function close() {
        store.dispatch(addNotification(null))
    }

    return (
        <div className={message === null ? style.popup : `${style.popup} ${style.popupShow}`}>
            <div className={style.popupBody}>
                <div className={style.popupContent}>
                    <div className={style.popupCloseImg}>
                        <img src={imgClose} alt="closeImg"/>
                    </div>
                    <h6 className={style.popupTitle}>Что-то пошло не так!</h6>
                    <div className={style.popupText}>
                        {message}
                    </div>
                    <div className={style.popupCloseBtn}>
                        <button onClick={close} className={style.popupClose}>Ок</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ShowModal;