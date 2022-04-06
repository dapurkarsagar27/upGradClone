import React, { useState } from "react";

const Countapp = () => {
    const click = useState();
    // console.log (click) 

    const [Count , setCount] = useState(0);

    const IntCnt = () =>{
        setCount(Count + 1);
    }

    return(
        <div className="countme">
            <h1> {Count} </h1>
            <button onClick={IntCnt}>Count Me</button>  <hr></hr>
        </div> 
    )
}


export default Countapp;