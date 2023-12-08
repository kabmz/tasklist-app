import React, { useState } from 'react';

function Task({ task, deleteTask }) {
  const [showSubtaskForm, setShowSubtaskForm] = useState(false);
  const [subtaskText, setSubtaskText] = useState('');
  const [subtasks, setSubtasks] = useState(task.subtasks);

  const handleSubtaskDone = (subtaskId) => {
    setSubtasks(subtasks.map((subtask) => (subtask.id === subtaskId ? { ...subtask, done: !subtask.done } : subtask)));
  };

  const handleAddSubtask = () => {
    if (subtaskText.trim() !== '') {
      setSubtasks([...subtasks, { id: subtasks.length + 1, text: subtaskText, done: false }]);
      setSubtaskText('');
    }
  };

  return (
    <div className="task">
     
      <div className="task-heading">Task {task.id}:
        {task.text}{' '}
        <span className="subtasks-toggle" onClick={() => setShowSubtaskForm(!showSubtaskForm)}>
          Sub-Task (clickable)
        </span>
      </div>
      
     
      {subtasks.map((subtask) => (
        <div key={subtask.id} className={`subtask ${subtask.done ? 'done' : ''}`}>
             <span className="subtask-heading">Sub-Task {subtask.id}:</span> {subtask.text}
         
          {!subtask.done && (
            <span className="done-subtask" onClick={() => handleSubtaskDone(subtask.id)}>
              DONE (clickable)
            </span>
          )}
        </div>
      ))}
      <div className="subtask-options">
        {showSubtaskForm && (
          <div>
            <input
              type="text"
              placeholder="Enter sub-task"
              value={subtaskText}
              onChange={(e) => setSubtaskText(e.target.value)}
            />
            <button onClick={handleAddSubtask} className="btn btn-success btn-sm">
              Add
            </button>
          </div>
        )}
      </div>
      <button onClick={() => deleteTask(task.id)} className="btn btn-danger btn-sm delete-button">
        X
      </button>
    </div>
  );
}

export default Task;


