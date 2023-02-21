import style from "./DetailedDesctiption.module.css"
import {FC} from "react";

type DetailsType = {
    details?: string
}

const DetailedDescription: FC<DetailsType> = (props) => {
    return (
        <div className={style.detailedDescription}>
            <h5>Details</h5>
            <p>{props?.details}</p>
        </div>
    )
};

export default DetailedDescription;