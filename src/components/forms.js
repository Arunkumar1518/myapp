import { useState } from "react";
export default function Form(){
    const[data,setdata]=useState(0)

    const handlechange =(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        
        setdata((last)=>({
            ...last,[name]:value
        }
    ))
    console.log(data);
    
    }
    return(
        <div>
            <label>name:</label>
            <input type="text" name="username" onChange={handlechange}/><br/>
            <label>email:</label>
            <input type="email" name="email" onChange={handlechange}/><br/>
            <label>password:</label>
            <input type="Password" name="password" onChange={handlechange}/><br/>
            <label>course:</label>
            <select onChange={handlechange} name="course">
                <option value="HTML" >HTML</option>
                <option value="CSS" >CSS</option>
                <option value="JAVA SCRIPT" >JAVA SCRIPT</option>
                <option value="PYTHON" >PYTHON</option>
               
            </select>
        </div>
    )
}