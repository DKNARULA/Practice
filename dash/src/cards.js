import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./cards.css";
import { faMoneyBillTrendUp } from "@fortawesome/free-solid-svg-icons/faMoneyBillTrendUp";

function Cards(){
    return(
        <div id="divp">
           <div id="divc1">
           <FontAwesomeIcon icon={faMoneyBillTrendUp} id="icon"/>
            </div>
            <div id="divc2">
                Earning
                <br/>
                <b>$922,000</b>
                <br/>
                <span id="inc">^49% </span>This Month
            </div>
        </div>
    )
}
export default Cards;