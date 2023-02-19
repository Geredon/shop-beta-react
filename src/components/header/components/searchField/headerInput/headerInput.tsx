import style from "./headerInput.module.css"
import {setSearchValue} from "../../../../../store/common/actionCreators";
import {debounce} from "../../../../../lib/debounce";
import {useDispatch} from "react-redux";
import { TextField} from "@mui/material";


const HeaderInput = () => {
    const dispatch = useDispatch()

    return (
        <div className={style.headerInput}>
            <TextField variant="standard"  InputProps={{ disableUnderline: true }}
                     onChange={debounce((event: any) => dispatch(setSearchValue(event.target.value)), 300)}
                     placeholder="Search products"/>
        </div>
    )
}

export default HeaderInput;