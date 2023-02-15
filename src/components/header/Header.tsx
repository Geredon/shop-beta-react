import SearchField from "./components/searchField/searchField";
import Shopping from "./components/shopping/shopping";
import style from "./Header.module.css"
import React from "react";

const Header = () => {

    return (
        <header className={style.mainHeader}>
            <SearchField/>
            <Shopping />
        </header>
    )
}
export default Header;