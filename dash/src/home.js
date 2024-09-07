import CardContainer from "./cardContainer";
import Graphs from "./graphs";
import Pie from "./pie";
import "./home.css";
import List from "./list";

function Home(){
    return(
       <div id="home">
        <CardContainer/><br/>
        <div id="par">
        <span id="g"><Graphs/></span>
        <span id="p"><Pie/></span>
        </div>
        <span id="l"><List/></span>
       </div>
    )
}
export default Home;