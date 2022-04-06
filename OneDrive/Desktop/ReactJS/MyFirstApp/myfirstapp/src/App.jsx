import react from "react";
import ReactDOM from "react-dom";
import Ncard from "./Netflix";
import Icard from "./Cardsinfo";
import Scard from "./App";
import App from "./App";

ReactDOM.render(
  <div className="maindiv">
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
  </div>,

  document.getElementById("root")
);



export default Scard;
