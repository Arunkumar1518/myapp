import Context from "./components/context"
import ClassComponents from "./components/class components"
import FunctionComponents from "./components/function components"
import Navbar from "./components/navabar"
import UserefCom from "./components/Refcomponents"
import Effect from "./components/Effect"
import Lifecycle from "./components/lifecycle"
import Contextadd from "./components/context2"

export default function Vijay(){
  return(
    <div>
      <FunctionComponents/>
      <hr/>
      <ClassComponents/>
      <hr/>
      {/* <Navbar/> */}
      <hr/>
      <UserefCom/>
      <hr/>
      <Context/>
      <hr/>
      {/* <Effect/> */}
      {/* <Lifecycle/> */}
      {/* <Contextadd/> */}

       </div>
  )
}