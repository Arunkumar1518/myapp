import { useState,useEffect } from "react";
export default function Effect(){
    const[Count,setCount]=useState(0)

    function handlestste(){
        setCount(Count+1)
    }
    useEffect(()=>{
        document.title=`Count:${Count}`
    })
    return(
        <div>
            <h1>state value:{Count}</h1>
            <button onClick={handlestste}>increment</button>
        </div>
    )
}