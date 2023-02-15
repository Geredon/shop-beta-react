import style from "./DetailedInfo.module.css"
import DetailedProduct from "./detailedProduct/DetailedProduct";
import DetailedDescription from "./detailedDescription/DetailedDescription";
import CartPrice from "./cartPrice/CartPrice";
import CartAdd from "./cartAdd/CartAdd";
import Favorite from "../../../catalog/components/product/productFavorite/Favorite";
import {FC} from "react";

export type TDetailedInfo = {
   content: {
       id?: string
       like?: boolean
       picture?: {
           path: string
           alt: string
       }
       name?: string
       price?: {
           value: number
           currency: string
       }
       description?: string
       info?: string
       details?: string
   }
}

const DetailedInfo:FC<TDetailedInfo> = (props) => {
    return (
        <div className={style.detailedInfo}>
            <DetailedProduct detailedDescription={props?.content?.description} detailedInfo={props?.content?.info} detailedName={props?.content?.name}/>
            <DetailedDescription details={props?.content?.details}/>
            <div className={style.cartInfo}>
                <CartPrice price={props?.content?.price}/>
                <CartAdd/>
                <div className={style.cartFavorite}>
                    <Favorite  like/>
                </div>
            </div>
        </div>
    )
};

export default DetailedInfo;