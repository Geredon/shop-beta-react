import SearchField from "./components/searchField/searchField";
import Shopping from "./components/shopping/shopping";
import style from "./Header.module.css"

const Header = () => {

    return (
        <header className={style.mainHeader}>
            <SearchField/>
            <Shopping />
        </header>
    )
}
export default Header;