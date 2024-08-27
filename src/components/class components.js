import react from 'react'

class ClassComponents extends react.Component{
    constructor(){
            super();
            this.state={"count":0}
            this.stateIncrement=this.stateIncrement.bind(this)
            this.stateDecrement=this.stateDecrement.bind(this)
        
    }
    stateIncrement(){
        this.setState({count:this.state.count+1})
    }
    stateDecrement(){
        this.setState({count:this.state.count-1})
    }
    render(){
        return(
        <>
        <h1>class component</h1>
        <h1>state value:{this.state.count}</h1>
        <button onClick={this.stateIncrement} >increment</button>
        <button onClick={this.stateDecrement} >Decrement</button>

        </>
        )
    }
    
}
export default ClassComponents