import style from "./DetailedProduct.module.css"
import {FC} from "react";

type DetailedDescriptionType = {
    detailedDescription?: string
    detailedInfo?: string
    detailedName?: string

}

const DetailedProduct: FC<DetailedDescriptionType> = (props) => {
    return (
        <div className={style.detailedProduct}>
            <h3 className={style.detailedName}>{props?.detailedName}</h3>
            <p>{props?.detailedDescription}{props?.detailedInfo}</p>
        </div>
    )
};

export default DetailedProduct;