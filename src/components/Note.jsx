import React from "react";

function Note(props) {

  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <ul><li>{props.content}</li></ul>
      <button onClick={handleClick}>Delete</button>
    </div>
  );
}

export default Note;
