import style from "./Catalog.module.css"
import Product from "./components/product/Product";
import {useEffect, useState} from "react";
import {catalogData} from "../../api/api";
import {useSelector} from "react-redux";


const Catalog = () => {
    const value = useSelector(state => state.common.setSearchValue)
    const [catalog, setCatalog] = useState([]);



    useEffect(() => {
        catalogData().then((data) => {
            setCatalog(data);
        })
    }, []);


    const filterCatalog = catalog.filter(item => {
        return item.name.toLowerCase().includes(value.toLowerCase())
    })

    const productsElements = filterCatalog.map(content => <Product name={content.name} img={content.picture}
                                                                 id={content.id} key={content.id} price={content.price}
                                                                 like={content.like}/>)
    return (
        <div>
            <ul className={style.productsItem}>
                {productsElements}
            </ul>
        </div>
    )
}
export default Catalog;