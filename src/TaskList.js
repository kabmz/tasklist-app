import React, { useState } from 'react';
import NewTaskForm from './NewTaskForm';
import Task from './Task';

function TaskList() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    setTasks([...tasks, { id: tasks.length + 1, text: taskText, subtasks: [] }]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="container-todo">
      <h1 className="mt-4 mb-4">ToDoList</h1>
      {tasks.map((task) => (
        <Task key={task.id} task={task} deleteTask={deleteTask} />
      ))}
      <NewTaskForm addTask={addTask} />
    </div>
  );
}

export default TaskList;


