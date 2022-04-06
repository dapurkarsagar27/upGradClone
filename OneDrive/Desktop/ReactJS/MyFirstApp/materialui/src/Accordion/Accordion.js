import react, { useState } from "react";
import { quentions } from "./Api";
import MyAccordion from "./MyAccordion";
import "./Accordion.css";

const Accordion = () => {
  const [data, setData] = useState(quentions);

  return (
    <>
      <div className="main-div">
      <h1>Quetions</h1>
        {data.map((val) => {
          const { id, quetion, answer } = val;
          return <MyAccordion key={id} {...val} />;
        })}
      </div>
    </>
  );
};

export default Accordion;
