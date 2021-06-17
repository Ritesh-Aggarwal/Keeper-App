import React from "react";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button style={{background:"white"}}
      onClick={()=>{
        const itemID = props.id;
        props.onDelete(itemID);
      }}><DeleteOutlineIcon /></button>
    </div>
  );
}

export default Note;
