import style from "./DetailedInfo.module.css"
import DetailedProduct from "./detailedProduct/DetailedProduct";
import DetailedDescription from "./detailedDescription/DetailedDescription";
import CartPrice from "./cartPrice/CartPrice";
import CartAdd from "./cartAdd/CartAdd";
import Favorite from "../../catalog/product/productFavorite/Favorite";

import s from "./cartFavorite/cartFavorute.module.css"
const DetailedInfo = (props) => {
    return (
        <div className={style.detailedInfo}>
            <DetailedProduct detailedInfo={props.detailedInfo}/>
            <DetailedDescription detailedInfo={props.detailedInfo}/>
            <div className={style.cartInfo}>
                <CartPrice detailedInfo={props.detailedInfo}/>
                <CartAdd/>
                <div className={s.cartFavorite}>
                    <Favorite/>
                </div>
            </div>
        </div>
    )
};

export default DetailedInfo;