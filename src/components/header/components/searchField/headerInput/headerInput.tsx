import style from "./headerInput.module.css"
import {setSearchValue} from "../../../../../store/common/actionCreators";
import {debounce} from "../../../../../lib/debounce";
import {useDispatch} from "react-redux";

const HeaderInput = () => {

    const dispatch = useDispatch()

    return (
        <div className={style.headerInput}>
            <input type="text" onChange={debounce((event:any) => dispatch(setSearchValue(event.target.value)), 300)}
                   className={style.inputSearch} placeholder="Search products"/>
        </div>
    )
}

export default HeaderInput;