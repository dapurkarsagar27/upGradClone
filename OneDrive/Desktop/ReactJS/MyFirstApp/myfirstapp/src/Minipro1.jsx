import React from "react";
import "./Minipro1.css";

var time1 = new Date().toLocaleTimeString();
const currday = new Date().getHours();
var greeting = "";
var greeting1 = "";
let styleing = {};

if (currday >= 1 && currday < 12) {
  greeting = "Good Morning";
  greeting1 = "Have a wonderful day!";
  styleing.color = "rgb(240, 189, 23)";
} else if (currday >= 12 && currday < 17) {
  greeting = "Good Afternoon";
  greeting1 = "Have a wonderful day!";
  styleing.color = "rgb(2, 64, 75)";
} else if (currday >= 17 && currday < 20) {
  greeting = "Good Evening";
  greeting1 = "Have a pleasant Evening!";
  styleing.color = "rgb(221, 97, 221)";
} else if (currday >= 20 && currday < 24) {
  greeting = "Good Night";
  greeting1 = "Have sweet sleep, sweet dreams!";
  styleing.color = "cornsilk";
}

function Minipro1() {
  return (
    <div className="greetings">
      <h1>{time1}</h1>
      <h2>
        Hello Handsome, <span style={styleing}> {greeting}! </span>
      </h2>
      <p> {greeting1} </p>
    </div>
  );
}

export default Minipro1;
