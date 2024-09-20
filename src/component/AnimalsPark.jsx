import React, { useEffect, useState } from "react";

function AnimalsPark(){

  const [data,setdata] = useState([]);


  useEffect(()=>{
    handlfetch()
  },[]);
  
  const handlfetch = async () =>{

    var name = await axios.get ("http://localhost:3000/todoList");

    setdata(name.data);
  };

  return(
   <>
    <h1>Hello world..</h1>
    <input type="text" placeholder="This is a Your Jurrasic park world" />
    <button>Animals</button>
    {data.map((boo)=>(
      <div>
        <h1>{boo.Animals}</h1>
      </div>
    ))}


    </>
  )
}
export default AnimalsPark