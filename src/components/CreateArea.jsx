import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';


function CreateArea(props) {
  const [expand, setExpand] = useState(false);
  function exp(){
      setExpand(true);
  }
  const [newNote, setNote] = useState({
    title: "",
    content: ""
  });
  function handleChange(e) {
    var { value, name } = e.target;
    setNote((prevState) => {
      return {
        ...prevState,
        [name]: value
      };
    });
  }
  function submitNote(event) {
    props.onAdd(newNote);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  return (
    <div>
      <form className="create-note">
      {expand&&<input
          onChange={handleChange}
          value={newNote.title}
          name="title"
          placeholder="Title"
          autoComplete="off"
        />}
        <textarea
          onClick={exp}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows={expand?3:1}
          value={newNote.content}
        />
        <Zoom in={expand}>
            <Fab onClick={submitNote}>
                <AddIcon />
            </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
