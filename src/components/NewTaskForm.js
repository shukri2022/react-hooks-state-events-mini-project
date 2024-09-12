import React, { useState } from 'react';

const NewTaskForm = ({ onTaskFormSubmit }) => {
  const [text, setText] = useState('');
  const [category, setCategory] = useState('Work');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskFormSubmit({ id: Math.random(), text, category });
    setText(''); // Clear form after submission
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="New task details"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Code">Code</option> {/* Ensure "Code" option is present */}
      </select>
      <button type="submit">Add task</button>
    </form>
  );
};

export default NewTaskForm;
