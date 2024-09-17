import React,{UseEffect,Useref} from "react";

function Useref() {
const inputref = Useref(null)
UseEffect(()=>{
inputref.current.focus()

},[])

return(
<>

<h1>Useref</h1>

<input ref={inputref} placeholder="enter r name"/>
</>


)



}
export default Useref