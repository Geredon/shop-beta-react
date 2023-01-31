import style from "./Catalog.module.css"
import Product from "./product/Product";


const Catalog = (props) => {

    let productsElements =props.catalogInfo.map(content => <Product name={content.name} img={content.picture} id={content.id} key={content.id} price={content.price} like={content.like} />)
    return (
        <div>
            <ul className={style.productsItem}>
                {productsElements}
            </ul>
        </div>
    )
}
export default Catalog;