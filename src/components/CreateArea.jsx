import React, { useState, useEffect } from "react";

function CreateArea(props) {
  const [list, setNote] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    if (newValue !== "") {
      setNote(newValue);
    }
  }

  function submitNote(event) {
    const myInput1 = document.getElementById("myInput")
    if (myInput1.value !== "") {
      props.onAdd(list);
      setNote("");
      event.preventDefault();
    }
    event.preventDefault()
  }

  const handleKeyDown = (e) => {
    if (e.key === "Backspace" && e.target.selectionStart === 1) {
      setNote((prev) => prev.substring(1));
      e.preventDefault();
    }
  };

  useEffect(() => {
    const myInput = document.getElementById("myInput")
    myInput.addEventListener("keypress", function (event) {
      if (event.key === 'Enter' && !event.shiftKey) {
        document.getElementById("addButton").click();
        event.preventDefault();
      }
    });
  }, []);

  return (
    <div>
      <form>
        <textarea
          id='myInput'
          name="content"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          value={list}
          placeholder="Create a new list..."
        />
        <button onClick={submitNote} id='addButton'>Add</button>
      </form>
    </div>

  );
}

export default CreateArea;
