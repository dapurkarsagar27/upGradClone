import React from "react";

var name = "Sagar";
var lname = "Dapurkar";
var fname = "Vivek";
var mname = "Jyoti";
var myday = new Date().toLocaleDateString();


function Template() {
  return (
    <div>
      <p>
        My name is {name}, My surname is {lname}!!!
      </p>
      <p>
        Baap ka naam {fname}, Maa ka naam {mname}
      </p>
      <h2 contentEditable="true">I'm Sagar</h2>
      <h1>Today's date is {myday}</h1>
    </div>
  );
}

export default Template;
