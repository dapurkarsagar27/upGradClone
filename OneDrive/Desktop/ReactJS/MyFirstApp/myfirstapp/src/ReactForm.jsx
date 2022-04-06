import React, { useState } from "react";

const FirstForm = () => {
  const [fullName, changeFullName] = useState({
    fname: "",
    lname: "",
  });

  const formInput = (Event) => {
    const value = Event.target.value;
    const name = Event.target.name;

    changeFullName ((preValue) => {
      if (name === "fname") {
        return {
          fname: value,
          lname: preValue.lname,
        };
      } else if (name === "lname") {
        return {
          fname: preValue.fname,
          lname: value,
        };
      }
    } )
  };


const showName = (eve) => {
  eve.preventDefault();
  alert("Are you sure?");
};

return (
  <>
    <form onSubmit={showName}>
      <div className="forms">
        <h1>Hello {fullName.fname} {fullName.lname}</h1>
        <input
          type="text"
          placeholder="Enter Your Name"
          name="fname"
          onChange={formInput}
          // value={changeFullName.fname}
        ></input>
        <br></br>
        <input
          type="text"
          placeholder="Enter Whatever"
          name="lname"
          onChange={formInput}
          // value={changeFullName.fname}
        ></input>
        <br></br>
        <button type="submit">Submit</button>
      </div>
    </form>
  </>
);
};

export default FirstForm;
