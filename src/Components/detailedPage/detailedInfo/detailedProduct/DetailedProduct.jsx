
import style from "./DetailedProduct.module.css"


const DetailedProduct = (props) => {
    return(
        <div className={style.detailedProduct}>
            <h3 className={style.detailesName}>{props.detailedInfo.name}</h3>
            <p>{props.detailedInfo.info}</p>
        </div>
    )
};

export default DetailedProduct;