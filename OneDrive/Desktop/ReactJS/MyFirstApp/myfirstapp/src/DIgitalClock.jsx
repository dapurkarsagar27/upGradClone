import React, { useState } from "react";

const DigiClock = () =>{
    // const Digi = useState();
    const Clock = new Date().toLocaleTimeString();
    
    const [Clock2 , setTime] = useState();

    const UpdateTime = () =>{
        setTime(Clock);
    }
    
    setInterval(UpdateTime , 1000);

    return(
        <div className="digiclock">
            <h2>DIGITAL CLOCK</h2>
            <h1>{Clock}</h1> 
            <hr></hr>
        </div>
    )
}


export default DigiClock;