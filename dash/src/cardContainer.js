import "./cardCont.css"
import Cards from "./cards";

function CardContainer(){
    return(
        <div id = "divp">
        <div class = "divc"><Cards/></div>
        <div class = "divc"><Cards/></div>
        <div class = "divc"><Cards/></div>
        <div class = "divc"><Cards/></div>
        </div>
    )
}
export default CardContainer;