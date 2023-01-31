import DetailedImg from "./detailedImg/DetailedImg";
import DetailedInfo from "./detailedInfo/DetailedInfo";
import style from "./DetailedPage.module.css"


const Detailed = (props) => {
    return (
        <div className={style.detailedWrapper}>
            <DetailedImg detailedInfo={props.detailedInfo.picture}/>
            <DetailedInfo detailedInfo={props.detailedInfo}/>
        </div>
    )
}
export default Detailed;