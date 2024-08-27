import {useState} from 'react'
function Context(){
    const[course,setCourse]= useState("REACT")
    return(
        <div>
            <h1>{course} Course Started</h1>
            <Component2 data={course}/>
        </div>
    )
}

function Component2(props){
    return(
       <div>
            <h1>components 2</h1>
            <Component3 data={props.data}/>
            </div>
    )
}

function Component3(props){
    return(
        <div>
            <h1>component 3</h1>
            <Component4 data={props.data}/>
          

        </div>
    )
}
function Component4(props){
    return(
        <div>
            <h1>component 4</h1>
            <Component5 data={props.data}/>
          

        </div>
    )
}
function Component5(props){
    return(
        <div>
            <h1>{props.data} Course finished</h1>
          

        </div>
    )
}
export default Context
