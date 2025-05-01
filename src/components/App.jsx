import React, { useState } from "react";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newList) {
    setNotes(prevNotes => {
      console.log(notes);
      return [...prevNotes, newList];
    
    });
    
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((listItem, index) => {
        console.log(listItem, index, id);
        return index !== id;
       
      });
    });
  }

  return (
    <div>
      <h1 className="heading">ToDoList</h1>
      <CreateArea onAdd={addNote} />
      <div className="clearContainer">
        <button onClick={() => { setNotes([]) }}>Clear all
        </button>
      </div>
      {notes.map((listItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            content={listItem}
            onDelete={deleteNote}
          />
        );
      })}
    </div>
  );
}

export default App;
