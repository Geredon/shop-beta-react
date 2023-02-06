import style from "./Favorite.module.css"
import {ReactComponent as FavoriteSvg} from './favorite.svg';

const Favorite = (props) => {
    const favorite = `${style.productFavorite} ${(props.like === true) ? `${style.productFavoriteShow}` : ""}`
    return (
        <div className={favorite}>
            <FavoriteSvg/>
        </div>
    )
}
export default Favorite;