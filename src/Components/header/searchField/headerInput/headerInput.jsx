import style from "./headerInput.module.css"
import {debounce} from "../../../../debounce";


const HeaderInput = (props) => {

    return (
        <div className={style.headerInput}>
            <input type="text" onChange={(event) => debounce(props.setValue, 300)(event.target.value)} className={style.inputSearch} placeholder="Search products"/>
        </div>
    )
}

export default HeaderInput;