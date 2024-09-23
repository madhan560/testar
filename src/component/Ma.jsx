import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Ma() {
const [data,setdata ] = useState([])
const[inputdata,setinputdata] = useState("")


const hadleinput =  (e) =>{
    setinputdata(e.target.value)  
}
const handlepost = async () =>{
    let body ={
        Ma : inputdata
    } 
    await axios.post("http://localhost:3000/todoList",body)
    handlefetch()




}



const handlefetch = async () =>{

let res= await axios.get("http://localhost:3000/todoList")
setdata(res.data)




};




useEffect(()=>{
handlefetch()
},[])
  return (
    <div>
        <h1>kumar</h1>
      <input onChange={hadleinput} type="text" placeholder='enter u name' />

      {data.map((da)=>(
        <div>
            <h1>{da.Ma}</h1>
            <button>Edit</button>
            <button>Delete</button>
        </div>
      ))}
      <button onClick={handlepost}>click</button>
    </div>
  )
}
export default Ma