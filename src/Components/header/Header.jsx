import SearchField from "./searchField/searchField";
import Shopping from "./shopping/shopping";
import style from "./Header.module.css"

const Header = (props) => {
    return (
        <header className={style.mainHeader}>
            <SearchField setValue={props.setValue}/>
            <Shopping />
        </header>
    )
}

export default Header;