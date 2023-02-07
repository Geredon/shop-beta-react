import React from "react";
import HeaderInput from "./headerInput/headerInput";
import style from "./searchField.module.css"
import { ReactComponent as SearchSvg} from "./searchIcon.svg";

const SearchField = () => {
    return (
        <div className={style.searchField}>
            <div className={style.searchIcon}>
                <SearchSvg/>
            </div>
            <HeaderInput/>
        </div>
    )
}

export default SearchField;