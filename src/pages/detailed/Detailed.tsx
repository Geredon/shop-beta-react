import DetailedImg from "./components/detailedImg/DetailedImg";
import DetailedInfo from "./components/detailedInfo/DetailedInfo";
import style from "./Detailed.module.css"
import {detailedData, TDetailed} from "../../api/api";
import { useEffect, useState} from "react";
import {useParams} from "react-router-dom";



const Detailed = () => {
    const [detailed, setDetailed] = useState<TDetailed>({
            id: "",
            like: true,
             picture: {
                path: "0",
                alt: "",
             },
            name: "",
            price: {
                value: 0,
                currency: "",
            },
            description: "",
            info: "",
            details: "",
    });

    const {id} = useParams()

    useEffect(() => {
        detailedData(id!).then((data) => {
            setDetailed(data);
        })
    }, [id]);

    return (
        <div className={style.detailedWrapper}>
            <DetailedImg pictureImg={detailed?.picture}/>
            <DetailedInfo  content={detailed}/>
        </div>
    )
}
export default Detailed;

