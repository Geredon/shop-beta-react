import Product from "./components/product/Product";
import {useEffect, useState} from "react";
import {catalogData, TCatalogData} from "../../api/api";
import {useAppSelector} from "../../store/store";
import {Grid} from "@mui/material";


const Catalog = () => {
    const value = useAppSelector(state => state.common.searchValue)
    const [catalog, setCatalog] = useState<TCatalogData[] | []>([]);


    useEffect(() => {
        catalogData().then((data) => {
            setCatalog(data!);
        })
    }, []);


    const filterCatalog = catalog.filter(item => {
        return item.name.toLowerCase().includes(value.toLowerCase())
    })

    const productsElements = filterCatalog.map(content => <Product name={content.name} picture={content.picture}
                                                                   id={content.id} key={content.id}
                                                                   price={content.price}
                                                                   like={content.like}/>)
    return (
        <div>
            <ul>
                <Grid container spacing={2} sx={{justifyContent: "center"}}>
                    {productsElements}
                </Grid>
            </ul>
        </div>
    )
}
export default Catalog;