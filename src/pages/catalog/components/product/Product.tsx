import style from "./Product.module.css"
import Favorite from "./productFavorite/Favorite";
import ProductImg from "./productImg/ProductImg";
import ProductTitle from "./productTitle/ProductTitle";
import ProductPrice from "./productPrice/ProductPrice";
import {NavLink} from "react-router-dom";
import {PATH_DETAILED} from "../../../../constants/constants";
import {FC} from "react";
import {TCatalogData} from "../../../../api/api";


type PropsProductType = Omit<TCatalogData, "description">


const Product:FC<PropsProductType> = ({id, like,picture,name,price}) => {

    const productPath = PATH_DETAILED.replace(':id', id!)

    return (
        <li className={style.product}>
            <NavLink to={productPath}>
                <Favorite like={like}/>
                <ProductImg path={picture.path} alt={picture.alt}/>
                <ProductTitle name={name}/>
                <ProductPrice value={price.value} currency={price.currency} />
            </NavLink>
        </li>
    )
}
export default Product;