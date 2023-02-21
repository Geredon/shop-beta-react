import style from "./shopping.module.css"
const profile = require ("./profile.svg").default
const cart =  require("./cart.svg").default


const Shopping = () => {
    return (
        <div className={style.shopping}>
            <img src={cart} alt="cartImg"/>
            <img src={profile} alt="profile.Img"/>
        </div>
    )
}

export default Shopping;