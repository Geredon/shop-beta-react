import style from "./DetailedInfo.module.css"
import DetailedProduct from "./detailedProduct/DetailedProduct";
import DetailedDescription from "./detailedDescription/DetailedDescription";
import CartPrice from "./cartPrice/CartPrice";
import CartAdd from "./cartAdd/CartAdd";
import Favorite from "../../../catalog/components/product/productFavorite/Favorite";

const DetailedInfo = (props) => {
    return (
        <div className={style.detailedInfo}>
            <DetailedProduct detailedInfo={props.detailedInfo}/>
            <DetailedDescription detailedInfo={props.detailedInfo}/>
            <div className={style.cartInfo}>
                <CartPrice detailedInfo={props.detailedInfo}/>
                <CartAdd/>
                <div className={style.cartFavorite}>
                    <Favorite/>
                </div>
            </div>
        </div>
    )
};

export default DetailedInfo;