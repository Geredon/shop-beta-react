import style from "./Product.module.css"
import Favorite from "./productFavorite/Favorite";
import ProductImg from "./productImg/ProductImg";
import ProductTitle from "./productTitle/ProductTitle";
import ProductPrice, {PropsPriceType} from "./productPrice/ProductPrice";
import {NavLink} from "react-router-dom";
import {PATH_DETAILED} from "../../../../constants/constants";
import {FC} from "react";


type PropsProductType = {
    id: string
    like: boolean
    img: {
        path:string
        alt:string
    }
    name:string
    price: {
        value: number
        currency:string
    }
}

const Product:FC<PropsProductType> = (props) => {

    const productPath = PATH_DETAILED.replace(':id', props.id)

    return (
        <li className={style.product}>
            <NavLink to={productPath}>
                <Favorite like={props.like}/>
                <ProductImg img={props.img}/>
                <ProductTitle title={props.name}/>
                <ProductPrice price={props.price}/>
            </NavLink>
        </li>
    )
}
export default Product;