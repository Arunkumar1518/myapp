import React from "react";
class Lifecycle extends React.Component{

    state={product:"laptop"}
    handleUpdate=this.handleUpdate.bind(this)

    handleUpdate(){
          this.setState({product:"iphone"})
    }
    componentDidMount(){
        alert("do you want  to see the page")
    }
    componentDidUpdate(){
        window.confirm("do you want update the product")
    }
    componentWillUnmount(){
        window.confirm("want to remove the product")
    }
    render(){
        return(
            <div>
                <h1>{this.state.product}</h1>
                <button onClick={this.handleUpdate}>Update</button>
            </div>
        )
    }
}
export default Lifecycle