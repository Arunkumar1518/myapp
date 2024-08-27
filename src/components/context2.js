import { useState,createContext,useContext } from "react";
const contextpkg=createContext()
function Contextadd(){
    const[course,setcourse]= useState("REACT")
    return(
        <contextpkg.Provider value={course}>
            <h1>{course} course Started</h1>
            <Component2/>
        </contextpkg.Provider>
            
    )
}
function Component2(){
        return(
        <div>
        <h1>component 2</h1>
        <Component3/>
        </div>
        )
    }
function Component3(){
        const Cr=useContext(contextpkg)
        return(
        <div>
        <h1>{Cr} course ended</h1>
         </div>
     )
        
    }

export default Contextadd