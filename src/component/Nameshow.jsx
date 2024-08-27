import React ,{useState}from "react";

function Nameshow() {
    const [name, setname] = useState("madhan kumar")
    const [age, setage] = useState(28)


    const handlename = () => {
        if (name == "madhan kumar") {
            setname("Madhan"),
                setage(26)
        } else {
            setname("madhan kumar"),
                setage(28)

        }

    }


    return (
        <>
            <h1>name: {name}</h1>
            <button onClick={handlename}>change</button>
            <h2>age:{age}</h2>




        </>


    )




}





export default Nameshow