import {setSearchValue} from "../../../../../store/common/actionCreators";
import {debounce} from "../../../../../lib/debounce";
import {useDispatch} from "react-redux";
import {TextField} from "@mui/material";


const HeaderInput = () => {
    const dispatch = useDispatch()

    return (
        <div>
            <TextField variant="standard" InputProps={{disableUnderline: true}} fullWidth sx={{minWidth: "125px"}}
                       onChange={debounce((event: any) => dispatch(setSearchValue(event.target.value)), 300)}
                       placeholder="Search products"/>
        </div>
    )
}

export default HeaderInput;