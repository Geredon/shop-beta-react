import Header from "./components/header/Header";
import {Route, Routes, useParams} from "react-router-dom";
import Detailed from "./pages/detailed/Detailed"
import Catalog from "./pages/catalog/Catalog";
import {useState} from "react";
import ShowModal from "./components/showModal/showModal";
import {PATH_INDEX, PATH_DETAILED} from "./constants/constants";


const App = () => {
    const [value, setValue] = useState('')

    return (
        <div>
            <Header setValue={setValue}/>
            <Routes>
                <Route path={PATH_INDEX} element={<Catalog value={value}/>}/>
                <Route path={PATH_DETAILED}element={<Detailed/>}/>
                <Route path="*" element={<Catalog value={value}/>}/>
            </Routes>
            <ShowModal/>
        </div>
    );
}

export default App;
