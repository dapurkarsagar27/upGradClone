import react from "react";
import Ncard from "./Netflix";
import Icard from "./Cardsinfo";


const Netapp = () => (
  <>
    <h1 className="heading">
      Top 5 Pieces of <span id="flix">Netflix</span>
    </h1>
    {Icard.map((val) => {
      return (
        <Ncard
          key={val.Id}
          imgsrc={val.imgsrc}
          title={val.title}
          sname={val.sname}
          slink={val.slink}
        />
      );
    })}
  </>
);

export default Netapp;
