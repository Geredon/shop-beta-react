import style from "./DetailedImg.module.css"
import {MAIN_URL} from "../../../../constants/constants";


const DetailedImg = (props) => {
    let path = `${MAIN_URL}${props.picture?.path}`
    let altImg = props.picture?.alt

    return (
        <div className={style.detailedProductImg}>
            <img src={path} alt={altImg}/>
        </div>
    )
};

export default DetailedImg;