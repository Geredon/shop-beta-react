
import style from "./DetailedDesctiption.module.css"


const DetailedDescription = (props) => {
    return(
        <div className={style.detailedDescription}>
            <h5>Details</h5>
            <p>{props.detailedInfo.details}</p>
        </div>
    )
};

export default DetailedDescription;