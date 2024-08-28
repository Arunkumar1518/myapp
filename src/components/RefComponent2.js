import { useState,useRef } from "react";
export default function Refcomponent2(){
    const data1=useRef(null);
    const data2=useRef(null);
    const data3=useRef(null);
    function handleref1(){
        data1.current.focus();

        data1.current.style.backgroundColor="yellow"
        data2.current.style.backgroundColor=""
        data3.current.style.backgroundColor=""
    }
    function handleref2(){
        data2.current.focus();

        data1.current.style.backgroundColor=""
        data2.current.style.backgroundColor="yellow"
        data3.current.style.backgroundColor=""
    }
    function handleref3(){
        data3.current.focus();

        data1.current.style.backgroundColor=""
        data2.current.style.backgroundColor=""
        data3.current.style.backgroundColor="yellow"
    }
    return(
        <div>
            <input ref={data1}/>
            <button on onClick={handleref1}>click here</button><br/>
            <input ref={data2}/>
            <button on onClick={handleref2}>click here</button><br/>
            <input ref={data3}/>
            <button on onClick={handleref3}>click here</button><br/>
        </div>
    )

}