import DetailedImg from "./components/detailedImg/DetailedImg";
import DetailedInfo from "./components/detailedInfo/DetailedInfo";
import style from "./Detailed.module.css"
import {detailedData} from "../../api/api";
import {useEffect, useState} from "react";


const Detailed = () => {

    let url = new URL(window.location.href);

    const [detailed, setDetailed] = useState([]);

    useEffect(() => {
        detailedData(url.searchParams.get("id")).then((data) => {
            setDetailed(data);
        })
    }, []);

    return (
        <div className={style.detailedWrapper}>
            <DetailedImg picture={detailed?.picture}/>
            <DetailedInfo detailedInfo={detailed}/>
        </div>
    )
}
export default Detailed;