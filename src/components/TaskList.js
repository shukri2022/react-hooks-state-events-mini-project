import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {
  return (
    <ul className="task-list">
      {tasks.map(task => (
        <Task
          key={task.id}
          text={task.text}
          category={task.category}
          onDeleteTask={() => onDeleteTask(task.id)}
        />
      ))}
    </ul>
  );
}

export default TaskList;
