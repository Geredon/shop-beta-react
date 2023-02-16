import style from "./DetailedImg.module.css"
import {MAIN_URL} from "../../../../constants/constants";
import {PropsImgType} from "../../../catalog/components/product/productImg/ProductImg";



const DetailedImg = ({ path, alt }: PropsImgType) => {
    const pathImg = `${MAIN_URL}${path}`

    return (
        <div className={style.detailedProductImg}>
            <img src={pathImg} alt={alt}/>
        </div>
    )
};

export default DetailedImg;