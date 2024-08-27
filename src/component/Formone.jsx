import React, {useState} from "react";

function Formone() {
    const[name,setname,]= useState("")   

const handlename = (e) =>{
  console.log(e.target.value)  
setname(e.target.value)


}
const[Age,setAge,]= useState("")  
const handleAge = (e) =>{
    console.log(e.target.value)
    setAge(e.target.value)
    
    
    
    
    }
    const[Email,setEmail,]= useState("") 

    const handleEmail = (e) =>{
        console.log(e.target.value)
        setEmail(e.target.value)
        
        
        
        
        }
        
    

    return (
        <div>

<>

            <h1>NewForm</h1>
            <label>Name</label>
            <input onChange={handlename} placeholder="Name" />



            
            <br/><br/><br/>

            <label>Age</label>
            <input onChange={handleAge} placeholder="Age" />



            
            <br/><br/><br/>


            <label>Email</label>
            <input onChange={handleEmail} placeholder="Email" />



            
            <br/><br/><br/>




<button>submit</button>

<h2>Name-{name}</h2>
<h3>Age-{Age}</h3>
<h2>Email-{Email}</h2>


</>
        </div>



    )


}





export default Formone
