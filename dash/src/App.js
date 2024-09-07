import Navbar from "./navbar";
import NavColumn from "./navcolumn";
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home";
import Product from "./product";
import Income from "./income";
import Promote from "./promote";
import Customer from "./customer";
function App(){
    return(
        <div id="t">
            <BrowserRouter>
            <span id="nc"><NavColumn/></span>
            <Navbar/>
            <Routes>
            <Route exact path="/" Component={Home}/>
            <Route exact path="/product" Component={Product}/>
            <Route exact path="/income" Component={Income}/>
            <Route exact path="/promote" Component={Promote}/>
            <Route exact path="/customer" Component={Customer}/>
            </Routes>
            </BrowserRouter>
        </div>
    )
}


export default App;