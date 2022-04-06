import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Heading from "./Heading";
import Para from "./Para";
import List from "./List";
import Content from "./Content";
import Math from "./Math";
import Template from "./Template";
import Images from "./Images";
import Minipro1 from "./Minipro1";
import one, { gre, toefl, nse } from "./Impoexpo";
import add, { sub, mul, div } from "./Calculator";
import Netapp from "./Netapp";
import Slotapp from "./SlotMachine";
import Countapp from "./CountClick";
import Time from "./CountTime";
import DigiClock from "./DIgitalClock";
import EventApp from "./Events";
import FirstForm from "./ReactForm";
import FormRepeat from "./ReactFormRepeat";
import SpreadOper from "./SpreadOperator";
import Increamentapp from "./Increament";
import Clock1 from "./Clock1";
import ToDoMateUI from "./ToDoMateUI";


ReactDOM.render(
  <>
    <div className="maindiv">
      {/* <Heading/> */}
      {/* <Para/> */}
      {/* <List/> */}
      {/* <Content/> */}
      {/* <Math/> */}
      {/* <Template/> */}
      {/* <Images /> */}
      {/* ------------------1st mini project-----------------------   */}
      {/* <Minipro1 /> */}
      {/* --------------- Different Import?export Method --------------- */}
      <>
        {/* <ol>
        <li>{one()}</li>
        <li>{gre}</li>
        <li>{toefl}</li>
        <li>{nse()}</li>
      </ol> */}
      </>

      {/* ------------------------Basic Calculator--------------------- */}
      <>
        {/* <h1>Addition of numbers are {add(50, 10)}</h1>
      <h1>Subtraction of numbers are {sub(60, 50)}</h1>
      <h1>Multiplication of numbers are {mul(50, 10)}</h1>
      <h1>Division of numbers are {div(50, 3)}</h1> */}
      </>
      {/* -------------------- Basic Netflix App ---------------------------- */}

      <>
        <Netapp />
      </>
    </div>

    {/* ------------------------ Slot Machine Game---------------------------- */}

    <>
      <Slotapp />
    </>

    {/* -------------------------Click Count App--------------------------------- */}

     <>
      <Countapp/>
     </> 

    {/* --------------------------Count time --------------------------------  */}

    <>
      <Time/>
    </>

    {/* ------------------------- Digital Clock ------------------------------- */}

     <DigiClock/> 

    {/* -----------------------------  Events  ----------------------------------- */}

     <EventApp/> 

    {/* --------------------------------First Form----------------------------------  */}

    <FirstForm/>

    <FormRepeat/>

     {/* <SpreadOper/>  */}

     <Increamentapp/>
    
      <Clock1/>

      <ToDoMateUI/>
  </>,

  document.getElementById("root")
);
