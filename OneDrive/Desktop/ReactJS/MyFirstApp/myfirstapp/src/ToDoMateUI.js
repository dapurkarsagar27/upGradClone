import react, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import ToDoMateUIMap from "./ToDoMateUIMap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const ToDoMateUI = () => {
  const [item, addItem] = useState();
  const [newItem, submitNewItem] = useState([]);

  const addToList = (val) => {
    addItem(val.target.value);
  };

  const submitItem = () => {
    submitNewItem((preVal) => {
      return [...preVal, item];
    });
    addItem("");
  };

  return (
    <>
      <div className="mainUI">
        <div className="todobox">
          <h1>TO DO List</h1>
          <input
            type="text"
            placeholder="Add to the list..."
            onChange={addToList}
            value={item}
          ></input>
          <Button variant="contained" className="intbtn" onClick={submitItem}>
            <AddIcon />
          </Button>

          <ul>
            {newItem.map((value, index) => {
              return <ToDoMateUIMap key={index} id={index} text={value} />;
            })}
          </ul>
        </div>
        <button className="btn btn-success">Sagar</button>
        <button type="button" class="btn btn-outline-primary">
          Primary
        </button>
        <h1 className="mt-30 text-center">SASSA</h1>
      </div>
    </>
  );
};

export default ToDoMateUI;
