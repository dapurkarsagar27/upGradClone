import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import Button from '@mui/material/Button';



const Increamentapp = () => {
  const [AddVal, inputAdd] = useState(0);

  const increament = () => {
    inputAdd(AddVal + 1);
  };

  const decreament = () => {
    if (AddVal>0){
    inputAdd(AddVal - 1);
    }else{
        inputAdd(0);
        alert("I'm always Positive!!!");
    }
  };

  return (
    <>
      <div className="headapp">
        <div className="box">
          <h1>{AddVal}</h1>
          <Button variant="contained" id="incrbtn" onClick={increament}>
            <AddIcon/>
          </Button>
          <Button variant="contained" id="incrbtn" onClick={decreament}>
          <RemoveCircleOutlineIcon/>
          </Button>
          
        </div>
      </div>
    </>
  );
};

export default Increamentapp;
