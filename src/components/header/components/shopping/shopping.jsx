import style from "./shopping.module.css"
import profile from "./profile.svg"
import cart from "./cart.svg"
const Shopping = () => {
    return (
        <div className={style.shopping}>
            <img src={cart}/>
            <img src={profile}/>
        </div>
    )
}

export default Shopping;