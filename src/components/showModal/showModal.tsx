import style from './showModal.module.css'
import imgClose from "./close.png"
import {addErrorMessage} from "../../store/common/actionCreators";
import {useAppDispatch, useAppSelector} from "../../store/store";
import {Button} from "@mui/material";

const ShowModal = () => {
    const message = useAppSelector(state => state.common.errorMessage)
    const dispatch = useAppDispatch()

    function close() {
        dispatch(addErrorMessage(null!))
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
                        <Button onClick={close} variant="contained"
                                sx={{
                                    width: "72px",
                                    color: "black",
                                    border: "none",
                                    borderRadius: "5px",
                                    backgroundColor: "#eb9d45",
                                    '&:hover': {
                                        backgroundColor: '#e7b377',
                                    },
                                }}>
                            Ок
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ShowModal;

