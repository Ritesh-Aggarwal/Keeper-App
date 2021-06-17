import React, { useState } from "react";

function CreateArea(props) {
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
  return (
    <div>
      <form
        onSubmit={(e) => {
          props.onAdd(newNote);
          setNote({
            title: "",
            content: ""
          });
          e.preventDefault();
        }}
      >
        <input
          onChange={handleChange}
          value={newNote.title}
          name="title"
          placeholder="Title"
          autoComplete="off"
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={newNote.content}
        />
        <button role="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
