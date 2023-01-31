
import style from "./ProductTitle.module.css"
const ProductTitle = (props) => {
    return(
        <p className={style.productTitle}>
            {props.title}
        </p>
    )
}

export default ProductTitle;