import { useState } from "react";
export default function FunctionComponents(props){
    const [count,setCount]=useState(0);

    function stateincrement(){
        setCount(count+1)
        console.log(count)

    }
    function statedecrement(){
        setCount(count-1)
        console.log(count);
        

    
    }

    return(
        <div>
            <h1>Function component</h1>
            <h1>setvalue:{count}</h1>
            <button onClick={stateincrement}>increment</button>
            <button onClick={statedecrement}>decrement</button>
            <h3>{props.context}</h3>
        </div>
    )
}