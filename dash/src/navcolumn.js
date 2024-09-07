import { NavLink } from "react-router-dom";
import "./navcolumn.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
function NavColumn(){
    return(
        <div id = "parent">
            <div id = "title">
                <b>Dashboard  </b><FontAwesomeIcon icon={faChartLine} />
            </div>
            <div id="nav">
            <NavLink to={"/"}><div  class="n" id="a">Dashboard</div></NavLink>
            <NavLink to={"/product"}><div  class="n">Products</div></NavLink>
            <NavLink to={"/customer"}><div  class="n">Customer</div></NavLink>
            <NavLink to={"/income"}><div  class="n">Income</div></NavLink>
            <NavLink to={"/promote"}><div  class="n">Promote</div></NavLink>
            </div>
        </div>
    )
}
export default NavColumn;