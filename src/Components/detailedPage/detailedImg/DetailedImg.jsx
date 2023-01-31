
import style from "./DetailedImg.module.css"
import {mainUrl} from "../../../constants";

const DetailedImg = (props) => {
    const pathImg =`${mainUrl}${props.detailedInfo.path} `
    return(
        <div className={style.detailedProductImg}>
            <img src={pathImg} alt={props.detailedInfo.alt}/>
        </div>
    )
};

export default DetailedImg;