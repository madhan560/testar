import React, { useEffect, useState } from "react";


function Hello (){

    const [data,setdata] = useState([]);



    const handlefetch = async () =>{

        let name = await axios.get("http://localhost:3000/todoList");

        setdata(name.data);

    };

    useEffect(()=>{

        handlefetch()
    });


    return(


        <>
        <h1>Hello world..</h1>
        <input type="text"  placeholder="This is new Jurassic park world "/>
        <button>Submit</button>

        {data.map((da)=>(
            <div>
                <h1>{da.Animals}</h1>
            </div>
        ))}
        
        </>
    )
}
export default Hello