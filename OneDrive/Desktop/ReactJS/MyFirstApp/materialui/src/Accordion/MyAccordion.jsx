import react, { useState } from "react";

const MyAccordion = ({ quetion, answer }) => {
  const [show, setShow] = useState(false);

  const showInfo = () =>{
      setShow(!show);
  }
  return (
    <>
      <div className="sub-div">
        <div className="quesec">
          <button onClick={showInfo}>{show ? "➖" : "➕"}</button>
          <p>{quetion}</p>
        </div>
        {show && <p id="sec">{answer}</p>}
      </div>
    </>
  );
};

export default MyAccordion;
