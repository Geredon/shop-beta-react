import SearchField from "./components/searchField/searchField";
import Shopping from "./components/shopping/shopping";
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