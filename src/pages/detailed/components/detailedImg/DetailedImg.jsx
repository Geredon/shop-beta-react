import style from "./DetailedImg.module.css"
import {mainUrl} from "../../../../constants/constants";


const DetailedImg = (props) => {
    let path = `${mainUrl}${props.picture?.path}`
    let altImg = props.picture?.alt

    return (
        <div className={style.detailedProductImg}>
            <img src={path} alt={altImg}/>
        </div>
    )
};

export default DetailedImg;

//optional chaining