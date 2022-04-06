import React from "react";



function Ncard(props) {
  return (
    // <div className="netflix">
    <>
      <div className="card">
        <div className="cards">
          <img
            src={props.imgsrc}
            alt="WOWS"
          ></img>
          <div className="info">
            <p>{props.title}</p>
            <h2>{props.sname}</h2>
            <a href={props.slink} target="_blank">
              <button> WATCH NOW</button>
            </a>
          </div>
        </div>
      </div>
      </>
    // <div/>
  )
}

export default Ncard;
