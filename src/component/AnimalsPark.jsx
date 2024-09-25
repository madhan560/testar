import axios from "axios";
import React from "react";


function AnimalsPark(){

  const [data,setdata] = useState([])



  const handlefetch = async () =>{

    let seenu = await axios.get ("http://localhost:3000/todoList");

    setdata(seenu.data);



  };


  useEffect(()=>{
    handlefetch()
  },[]);


  return(
    
    <>
    <h1>Hello world....</h1>
    <input type="text" placeholder="Jurrassic World" />
    <button>Submit</button>
    {data.map((item)=>(
      <div>
        <h1>{item.Animals}</h1>
      </div>
    ))}
    </>
  )
}
export default AnimalsPark