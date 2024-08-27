import { useState,useRef } from "react";
export default function UserefCom(){
    const[count,setCount]=useState(0)
    const data=useRef(0);
    function handlestate(){
        setCount(count+1)
        console.log(count)
    }
    function handlesref(){
        data.current=data.current+1
        console.log(data.current)
    }
    return(
        <>
        <h1>UserRef component</h1>
        <h1>state value:{count}</h1>
        <h1>ref valur:{data.current}</h1>
        <button onClick={handlestate}>inc state</button>
        <button onClick={handlesref}>inc REF</button>
        </>
    )
}