import style from "./DetailedInfo.module.css"
import DetailedProduct from "./detailedProduct/DetailedProduct";
import DetailedDescription from "./detailedDescription/DetailedDescription";
import CartPrice from "./cartPrice/CartPrice";
import CartAdd from "./cartAdd/CartAdd";
import Favorite from "../../../catalog/components/product/productFavorite/Favorite";
import {FC} from "react";
import {TDetailed} from "../../../../api/api";


const DetailedInfo:FC<TDetailed> = ({details,description,info,name,price}) => {
    return (
        <div className={style.detailedInfo}>
            <DetailedProduct description={description} info={info} name={name}/>
            <DetailedDescription details={details}/>
            <div className={style.cartInfo}>
                <CartPrice value={price?.value} currency={price?.currency}/>
                <CartAdd/>
                <div className={style.cartFavorite}>
                    <Favorite  like/>
                </div>
            </div>
        </div>
    )
};

export default DetailedInfo;