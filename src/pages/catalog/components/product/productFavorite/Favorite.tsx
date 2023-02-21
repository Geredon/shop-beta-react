import style from "./Favorite.module.css"
import {ReactComponent as FavoriteSvg} from './favorite.svg';
import {FC} from "react";


export type PropsType = {
    like?: boolean
}

const Favorite: FC<PropsType> = (props) => {
    const favorite = `${style.productFavorite} ${props.like ? `${style.productFavoriteShow}` : ""}`
    return (
        <div className={favorite}>
            <FavoriteSvg/>
        </div>
    )
}
export default Favorite;