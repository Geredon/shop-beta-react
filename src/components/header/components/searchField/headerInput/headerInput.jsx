import style from "./headerInput.module.css"
import {store} from "../../../../../store/store";
import {searchValue} from "../../../../../store/common/actionCreators";
import {debounce} from "../../../../../lib/debounce";

const HeaderInput = () => {

    return (
        <div className={style.headerInput}>
            <input type="text" onChange={debounce((event) => store.dispatch(searchValue(event.target.value)),300)} className={style.inputSearch} placeholder="Search products"/>
        </div>
    )
}

export default HeaderInput;