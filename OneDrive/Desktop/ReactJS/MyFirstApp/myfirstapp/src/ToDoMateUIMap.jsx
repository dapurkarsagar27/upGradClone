import react, { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';

const ToDoMateUIMap = (props) =>{
    const[line , setLine] = useState(false);

    const submit = () =>{
        setLine(true);
    }

    return(
        <div className="todomap">
            <span onClick={submit}><DeleteIcon/></span>
            <li style={{textDecoration: line ? "line-through" : "none"}}>{props.text}</li>
        </div> 
    )
}

export default ToDoMateUIMap;