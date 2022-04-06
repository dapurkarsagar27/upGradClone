import React, { useState } from "react";

const FormRepeat = () => {
  const [inputEmail, inputValues] = useState({
    email_1: "",
    password_1: "",
    contact_1: "",
    gender_1: "",
  });

  const changeInputs = (val) => {
    const value = val.target.value;
    const name = val.target.name;

    inputValues((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
      // if (name === "email_1") {
      //   return {
      //     email_1: value,
      //     password_1: preVal.password_1,
      //   };
      // } else if (name === "password_1") {
      //   return {
      //     email_1: preVal.email_1,
      //     password_1: value,
      //   };
      // }
    });
  };

  const submitted = (event) => {
    event.preventDefault();
    alert("Are you sure?");
  };

  return (
    <>
      <form onSubmit={submitted}>
        <div className="form_1">
          <h1>
            This is your | Email: <span id="xyz">{inputEmail.email_1}</span> |
            Password: <span id="xyz">{inputEmail.password_1}</span> |{" "}
          </h1>
          <h1>Contact: {inputEmail.contact_1}</h1>
          <h1>Gender: {inputEmail.gender_1}</h1>
          <input
            onChange={changeInputs}
            type="email"
            placeholder="Email"
            name="email_1"
            value={inputEmail.email_1}
          ></input>
          <br></br>
          <input
            onChange={changeInputs}
            type="text"
            placeholder="Password"
            name="password_1"
            value={inputEmail.password_1}
          ></input>
          <br></br>
          <input
            onChange={changeInputs}
            type="text"
            placeholder="Contact"
            name="contact_1"
            value={inputEmail.contact_1}
          ></input>
          <br></br>
          <input
            onChange={changeInputs}
            type="text"
            placeholder="Gender"
            name="gender_1"
            value={inputEmail.gender_1}
          ></input>
          <br></br>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default FormRepeat;
