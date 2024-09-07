import "./list.css"

function List(){
    return(
        <div id="tab">
            <span id="head">
                <h3 id="tit">Product Inventory</h3>
                <input type="text" id="ser" placeholder="Search"/>
            </span>
            <table>
                <tr>
                    <th>Product Name</th>
                    <th>Stock</th>
                    <th>Price</th>
                    <th>Sales</th>
                </tr>
                <tr>
                    <td>Abstract 3D</td>
                    <td>32</td>
                    <td>$45.99</td>
                    <td>50</td>
                </tr>
                <tr>
                    <td>Abstract 3D</td>
                    <td>32</td>
                    <td>$45.99</td>
                    <td>50</td>
                </tr>
                <tr>
                    <td>Abstract 3D</td>
                    <td>32</td>
                    <td>$45.99</td>
                    <td>50</td>
                </tr>
                <tr>
                    <td>Abstract 3D</td>
                    <td>32</td>
                    <td>$45.99</td>
                    <td>50</td>
                </tr>
            </table>
        </div>
    )
}
export default List;