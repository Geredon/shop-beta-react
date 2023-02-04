
import style from "./ProductPrice.module.css"
const ProductPrice = (props) => {
    let price = Math.floor(props.price.value);
    return(
        <p className={style.productPrice}>
            {props.price.currency} {price}
        </p>
    )
}

export default ProductPrice;