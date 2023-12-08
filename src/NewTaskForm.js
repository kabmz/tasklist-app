import React, { useState } from 'react';

function NewTaskForm({ addTask }) {
  const [taskText, setTaskText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim() !== '') {
      addTask(taskText);
      setTaskText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <input
        type="text"
        className="form-control"
        placeholder="Add your task here"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button type="submit" className="btn btn-success">
        +
      </button>
    </form>
  );
}

export default NewTaskForm;






