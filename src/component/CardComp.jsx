import React, { useState } from "react";


function CardComp() {

    return (
        <>
           <div class="row">
            <h1>sample product</h1>
            <div class="card col-3 ms-4"  >
                <img src="https://m.media-amazon.com/images/I/81fDr0+xQVL._SY385_.jpg" height={300} width={180} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">madhan</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Rs.10000</a>
                </div>
                
            </div>
             <div class="card col-3 ms-4"  >
                <img src="https://m.media-amazon.com/images/I/51HL7-elUNL._SX300_SY300_QL70_FMwebp_.jpg" height={300} width={180} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">madhan</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Rs.25000</a>
                </div>
                
            </div>
            
            
             <div class="card col-3 ms-4"  >
                <img src="https://m.media-amazon.com/images/I/41WJ6AmcL0S._SX300_SY300_QL70_FMwebp_.jpg" height={300} width={180} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">madhan</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Rs.20000</a>
                </div>
                
            </div>

            </div>





        </>




    )





}



export default CardComp