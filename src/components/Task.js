import React from 'react';

function Task({ task, onDeleteTask }) {
  return (
    <li>
      {task.text} - {task.category}
      <button onClick={() => onDeleteTask(task.id)}>Delete</button>
    </li>
  );
}

export default Task;





