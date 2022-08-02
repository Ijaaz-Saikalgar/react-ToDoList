import React, { useState } from "react";

function CreateArea(props) {
  const [list, setNote] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setNote(newValue);
  }

  function submitNote(event) {
    props.onAdd(list);
    setNote("");
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <textarea
          name="content"
          onChange={handleChange}
          value={list}
          placeholder="Create a new list..."
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
