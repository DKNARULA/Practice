import "./card.css"

function Card(props){
    return(
        <div id="body">
        { props.load ? ( <div>Loading....</div> ) :
        (
          <div id="row">
            {props.product.map((products, index) => (
              <div key={index} id="card">
                <div id="im"><img src={products.image} alt={products.title} style={{width : 100}}/></div>
                <div id="desc">
                    {products.title}<br/><br/>
                    Price: ${products.price}<br/><br/>
                    Category: {products.category}<br/><br/>
                </div>
              </div>
            ))}
          </div>
        )}
        </div>
    )
}
export default Card;