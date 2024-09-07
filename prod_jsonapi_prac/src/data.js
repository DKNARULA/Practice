import Card from "./card";

const { Component } = require("react");

class Data extends Component{
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
      this.setState({loading:false,products:data})
    }
    render(){
       return(
        <Card load={this.state.loading} product={this.state.products} />
        )
    }
}
export default Data;