import React, {useState}from "react";

function Note(props) {
  const [style, setStyle] = useState(false);

  function handleClick() {
    props.onDelete(props.id);
  }

  const changeStyle = () => {
    setStyle(!style);
  };
  return (
    <div className="note">
      <ul><li onClick={changeStyle} className={style?"crossed-line":null}>{props.content}</li></ul>
      <button onClick={handleClick}>Delete</button>
    </div>
  );
}

export default Note;
