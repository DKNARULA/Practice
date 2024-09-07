import Card2 from "./card2";

const { Component } = require("react");

class Data2 extends Component{
    constructor(){
        super()
       this.state={
        loading:true,
        products: []
       }
    }
    async componentDidMount(){
        const url='https://fakestoreapi.com/products'
       const response=await fetch(url)
      const data=await response.json();
      this.setState({loading:false,products:data[5]})
    }
    render(){
       return(
        <Card2 load={this.state.loading} product={this.state.products} />
        )
    }
}
export default Data2;