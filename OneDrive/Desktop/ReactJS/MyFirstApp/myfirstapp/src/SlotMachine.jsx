import React from "react";
import "./index.css";

const Match = (props) => {
  let x = props.x;
  let y = props.y;
  let z = props.z;

  if (x === y && y === z) {
    return (
      <div className="matching">
        <h1>
          {x} {y} {z}
        </h1>
        <h2 id="head1"> This is Matching</h2>
      </div>
    );
  } else {
    return (
      <div className="matching">
        <h1>
          {x} {y} {z}
        </h1>
        <h2 id="head2"> This is not Matching</h2>
      </div>
    );
  }
};

const Slotapp = () => {
  return (
    <>
      <div className="main_slt">
        <h1> 🎰 Welcome to Slot Machine Game 🎰</h1>
        <Match x="😃" y="😃" z="😃" />
        <Match x="👽" y="😃" z="👽" />
        <Match x="💖" y="💖" z="💖" />
        <Match x="📗" y="📙" z="🤣" />
        <Match x="7" y="7" z="7" /> <hr></hr>
      </div>
    </>
  );
};

export default Slotapp;
