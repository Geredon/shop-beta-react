import style from "./DetailedProduct.module.css"
import {TDetailed} from "../../../../../api/api";


type DetailedDescriptionType = Pick<TDetailed, "description" | "name" | "info">


const DetailedProduct = ({description, info, name}: DetailedDescriptionType) => {
    return (
        <div className={style.detailedProduct}>
            <h3 className={style.detailedName}>{name}</h3>
            <p>{description}{info}</p>
        </div>
    )
};

export default DetailedProduct;