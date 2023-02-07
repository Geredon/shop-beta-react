import Header from "./components/header/Header";
import {Route, Routes} from "react-router-dom";
import Detailed from "./pages/detailed/Detailed"
import Catalog from "./pages/catalog/Catalog";
import ShowModal from "./components/showModal/showModal";
import {PATH_INDEX, PATH_DETAILED} from "./constants/constants";

const App = () => {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path={PATH_INDEX} element={<Catalog/>}/>
                <Route path={PATH_DETAILED} element={<Detailed/>}/>
                <Route path="*" element={<Catalog/>}/>
            </Routes>
            <ShowModal/>
        </div>
    );
}

export default App;
