import "./card.css"

function Card2(props){
    return(
        <div id="body">
        { props.load ? ( <div>Loading....</div> ) :
        (
            <div id="card">
            <div id="im"><img src={props.product.image} alt={props.product.title} style={{width : 100}}/></div>
            <div id="desc">
                {props.product.title}<br/><br/>
                Price: ${props.product.price}<br/><br/>
                Category: {props.product.category}<br/><br/>
            </div>
          </div>
        )}
        </div>
    )
}
export default Card2;