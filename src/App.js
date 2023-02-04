import Header from "./components/header/Header";
import {Route, Routes} from "react-router-dom";
import Detailed from "./pages/detailed/Detailed"
import Catalog from "./pages/catalog/Catalog";
import {useEffect, useState} from "react";
import ShowModal from "./components/showModal/showModal";


const App = () => {
    const [value, setValue] = useState('')

    return (
        <div>
            <Header setValue={setValue}/>
            <Routes>
                <Route path="/" element={<Catalog value={value}/>}/>
                <Route path="/detailedPage" element={<Detailed />}/>
                <Route path="*" element={<Catalog value={value}/>}/>
            </Routes>
            <ShowModal/>
        </div>
    );
}

export default App;
