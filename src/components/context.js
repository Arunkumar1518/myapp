import { useState } from "react";

export default function Context(){
    const[course,setcourse]=useState("REACT")
    return(
        <div>
            <h1>{course} course started</h1>
            <Component2 data={course}/>
        </div>
    )
}
function Component2(props){
    return(
        <div>
            <h1>component 2</h1>
            <Component3 data={props.data}/>
        </div>
    )

}
function Component3(props){
    return(
        <div>
            <h1>{props.data} course ended</h1>
        </div>
    )
}