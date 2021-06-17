import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import notes from "../notes";

function App() {
  const [list, setList] = useState(notes);
  function addItem(item) {
    setList((prevState) => [...prevState, item]);
  }
  function deleteItem(id){
    setList(prevState=>{
      return list.filter((item, index)=>{
        return index != id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addItem} />
      {list.map((i, index) => (
        <Note key={index} id={index} onDelete={deleteItem} title={i.title} content={i.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
