import DetailedImg from "./components/detailedImg/DetailedImg";
import DetailedInfo from "./components/detailedInfo/DetailedInfo";
import style from "./Detailed.module.css"
import {detailedData, TDetailed} from "../../api/api";
import { useEffect, useState} from "react";
import {useParams} from "react-router-dom";



const Detailed = () => {
    const [detailed, setDetailed] = useState<TDetailed | null>()

    const {id} = useParams()

    useEffect(() => {
        detailedData(id!).then((data) => {
            setDetailed(data);
        })
    }, [id]);

    return (
        <div className={style.detailedWrapper}>
            <DetailedImg path={detailed?.picture?.path} alt={detailed?.picture?.alt}/>
            <DetailedInfo  description={detailed?.description} info={detailed?.info} name={detailed?.name} details={detailed?.details} price={detailed?.price}/>
        </div>
    )
}
export default Detailed;

