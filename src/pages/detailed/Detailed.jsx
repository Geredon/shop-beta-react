import DetailedImg from "./components/detailedImg/DetailedImg";
import DetailedInfo from "./components/detailedInfo/DetailedInfo";
import style from "./Detailed.module.css"
import {detailedData} from "../../api/api";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";


const Detailed = () => {
    const [detailed, setDetailed] = useState([]);

    const {id} = useParams()

    useEffect(() => {
        detailedData(id).then((data) => {
            setDetailed(data);
        })
    }, [id]);

    return (
        <div className={style.detailedWrapper}>
            <DetailedImg picture={detailed?.picture}/>
            <DetailedInfo detailedInfo={detailed}/>
        </div>
    )
}
export default Detailed;

