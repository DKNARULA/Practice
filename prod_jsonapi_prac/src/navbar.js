import "./navbar.css"
function NavBar(){
    return(
        <div id="nb">
            <span><h2>Ecommerce</h2></span>
            <span>
                <li>
                    <ul>Home</ul>
                    <ul>Categories</ul>
                    <ul>Cart</ul>
                    <ul>About Us</ul>
                </li>
            </span>
            <span>
                <form>
                    <input type="text" placeholder="Serch" className="ser"/>
                    <input type="submit" className="ser"/>
                </form>
            </span>
            <span>
                <button className="butts">Register</button>
                <button className="butts">Log In</button>
            </span>
        </div>
    )
}
export default NavBar;