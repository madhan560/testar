import React,{useState}from "react";


function CounterFun (){


  const[name,  setname]=useState("kumar")
const[count,setcount]=useState(0)
const handleadd=()=>{
setcount(count+1)


}
const handlesub=()=>{
  if(count==0){
  setcount(count=0)}
  else{
    setcount(count-1)
  }

  
}


  return(
<>
<h1>mathan:{name}</h1>
<h1>count:{count}</h1>
<button onClick={handleadd}>Add</button>
<button onClick={handlesub}>sub</button>
</>

  )
}
export default CounterFun