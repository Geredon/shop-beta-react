import Header from "./Components/header/Header";
import {Route, Routes} from "react-router-dom";
import DetailedPage from "./Components/detailedPage/DetailedPage";
import Catalog from "./Components/catalog/Catalog";
import ShowModal from "./Components/showModal/showModal";
import {useEffect, useState} from "react";
import {catalogData, detailedData} from "./api";

const App = () => {

    const [catalog, setCatalog] = useState([]);
    const [detailed, setDetailed] = useState([]);
    const [value, setValue] = useState('')

    useEffect(() => {
        catalogData().then((data) => {
            setCatalog(data);
        })
    }, []);

    useEffect(() => {
        detailedData().then((data) => {
            setDetailed(data);
        })
    }, []);

    const filterCatalog = catalog.filter(item => {
        return item.name.toLowerCase().includes(value.toLowerCase())
    })

    return (
        <div>
            <Header setValue={setValue}/>
            <Routes>
                <Route path="/" element={<Catalog catalogInfo={filterCatalog}/>}/>
                <Route path="/detailedPage" element={<DetailedPage detailedInfo={detailed}/>}/>
                <Route path="*" element={<Catalog catalogInfo={filterCatalog}/>}/>
            </Routes>
            {<ShowModal/>}
        </div>
    );
}

export default App;
