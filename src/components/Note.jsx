import React from "react";

function Note(props) {
    var note = (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    ); 
    return note;  
}

export default Note;