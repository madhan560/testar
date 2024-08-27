import React, { useEffect, useState } from "react";


function Apicall() {
    const [productdata, setproductdata] = useState([]);
    const [count, setcount] = useState(0);
    const handlefetch = async () => {
        let res = await fetch("https://fakestoreapi.com/products");
        let data = await res.json();
        setproductdata(data);

    };
    useEffect(() => {


        handlefetch()
    }, [count])
    const handlecount = () => {
        setcount(count + 1)
    }

    return (
        <div class="row">
            <div>
                <h1 onClick={handlecount} >product -{count}</h1>
                {productdata.map((datas) => (
                    <div class="col-3 ms-4">
                        <img src={datas.image} height={200} width={200} />
                        <h1>{datas.title}</h1>
                        <h3>RS{datas.price}</h3>
                    </div>

                ))}
                {/* <button onClick={handlefetch}>Api</button> */}


            </div>

        </div>





    );
}




export default Apicall