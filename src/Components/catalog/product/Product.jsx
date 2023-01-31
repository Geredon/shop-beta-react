import style from "./Product.module.css"
import Favorite from "./productFavorite/Favorite";
import ProductImg from "./productImg/ProductImg";
import ProductTitle from "./productTitle/ProductTitle";
import ProductPrice from "./productPrice/ProductPrice";
import { NavLink} from "react-router-dom";

const Product = (props) => {
    let pathId =`detailedPage?id=${props.id}`
    return (
        <li className={style.product}>
            <NavLink to={pathId}>
                <Favorite like={props.like}/>
                <ProductImg img={props.img} />
                <ProductTitle title={props.name}/>
                <ProductPrice price={props.price}/>
            </NavLink>
        </li>
    )
}

export default Product;