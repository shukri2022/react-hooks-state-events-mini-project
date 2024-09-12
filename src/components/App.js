import React, { useState, useEffect } from "react";
import TaskList from "./TaskList";
import NewTaskForm from "./NewTaskForm";
import CategoryFilter from "./CategoryFilter";
import { CATEGORIES, TASK_DATA } from "../data";

function App() {
  // State management for tasks and selected category
  const [tasks, setTasks] = useState(TASK_DATA);
  const [filteredTasks, setFilteredTasks] = useState(TASK_DATA);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter tasks by category
  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredTasks(tasks);
    } else {
      setFilteredTasks(tasks.filter(task => task.category === selectedCategory));
    }
  }, [selectedCategory, tasks]);

  // Add a new task
  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  // Delete a task
  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div className="App">
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <NewTaskForm onTaskFormSubmit={handleAddTask} />
      <TaskList tasks={filteredTasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
