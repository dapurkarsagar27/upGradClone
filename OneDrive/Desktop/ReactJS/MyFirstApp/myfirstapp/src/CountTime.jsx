import React, { useState } from 'react';

const Time = () =>{
    const click = useState();

    // const Clock1 = Clock.getSeconds();

    const [Clock2 , setInterval] = useState();

    const Clock = new Date().toLocaleTimeString();

    const TimeCount = () =>{
        setInterval(Clock);
        // console.log("count");
    }

    return(
        <div className='times'>
            <h1>{Clock}</h1>
            <button onClick={TimeCount}>Get Time</button> <hr></hr>
        </div>
    )
}


export default Time;