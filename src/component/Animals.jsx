
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Animals() {

    const [data, setdata] = useState([])
    const [inputdata, setinputdata] = useState("")


    const handlefetch = async () => {

        let seenu = await axios.get("http://localhost:3000/todoList");


        setdata(seenu.data);

    };

    useEffect(() => {
        handlefetch()
    }, []);

    const handleinputdata = (e) => {
        setinputdata(e.target.value)
    };

    const handlepost = async () => {

        let body = {
            Animals: inputdata
        }

        await axios.post("http://localhost:3000/todoList", body);

        handlefetch()
    };

    const handledelete = async (id) =>{
      await axios.delete(`http://localhost:3000/todoList/${id}`); 

      handlefetch();
    };

    const handleedit = async (i) =>{
        let newname = prompt ("Enter Your Data", data[i].Animals)
        let body = {
            id : data[i].id,
            Animals: newname
        };
    
       await axios.put(`http://localhost:3000/todoList/${data[i].id}`,body);

       handlefetch()
};
    return (
        <div>
            <h1>Hello world</h1>
            <input onChange={handleinputdata} type="text" placeholder='Jurrassic World' />
            <button onClick={handlepost}>Submit</button>
            {data.map((boo,i) => (
                <div>
                    <h1>{boo.Animals}</h1>
                    <button onClick={()=>handleedit(i)}>Edit</button>
                    <button onClick={()=>handledelete(boo.id)}>Delete</button>
                </div>
            ))}
        </div>
    )
}



