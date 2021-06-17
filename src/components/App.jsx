import React from "react";
import Heading from "./Heading";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";


function App(){
    return (
    <div>
        <Heading />
        {notes.map( newNote => 
            <Note 
            key = {newNote.key} 
            title = {newNote.title} 
            content = {newNote.content} 
            />
        )}
        <Footer />
    </div>);
}

export default App;