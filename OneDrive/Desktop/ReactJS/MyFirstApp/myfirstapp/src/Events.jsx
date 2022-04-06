import react, { useState } from "react";

const EventApp = () => {
  const bgcolor = "rgb(238, 95, 238)";

  const btnbg = "violet";

  const Name = "Hit Me Hard!";

  const [bg, ChangeBg] = useState(bgcolor);

  const [Name1, ChangeName] = useState(Name);

  const [btnbg1, ChangeBtnCol] = useState(btnbg);

  const HitButton = () => {
    const newbg = "yellow";
    const newname = "Ouu Yes 😉";
    const newbtnbg = "orange";
    ChangeBg(newbg);
    ChangeName(newname);
    ChangeBtnCol(newbtnbg);
  };

  const doubleHit = () =>{
      ChangeBg('purple');
      ChangeName('Here is the G');
      ChangeBtnCol('rgb(189, 88, 189)');
  }

  return (
    <div className="onevents" style={{ backgroundColor: bg }}>
      <button onClick={HitButton} onDoubleClick={doubleHit} style={{ backgroundColor: btnbg1 }}>
        {Name1}
      </button>
    </div>
  );
};

export default EventApp;
