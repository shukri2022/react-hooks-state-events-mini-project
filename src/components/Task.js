import React from "react";

function Task({ text, category, onDeleteTask }) {
  return (
    <li className="task">
      <span>{text}</span>
      <span>{category}</span>
      <button onClick={onDeleteTask}>Delete</button>
    </li>
  );
}

export default Task;
