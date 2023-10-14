import React, { useState } from "react";
import "./NewToDoItem.css";

const NewToDoItem = ({ setTodos }) => {
  const [title, setTitle] = useState("");

  const addTodo = (title) => {
    setTodos((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        title,
        isCompleted: false,
      },
    ]);
    setTitle("");
  };
  return (
    <div className="app__newtodoitem">
      <input
        value={title}
        className="app__newtodoitem-input"
        placeholder="add a new item"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        className="app__newtodoitem-btn"
        onClick={() => {
          addTodo(title);
        }}
        // onKeyPress={(e) => e.keyCode === 13 && addTodo(title)}
      >
        Add
      </button>
    </div>
  );
};

export default NewToDoItem;
