import React from 'react';
import TaskItem from './TaskItem';
import './TaskList.css';

function TaskList({ tasks, onEdit, onDelete, onComplete }) {
  return (
    <ul className="task-list">
      {tasks.map(task => (
        <TaskItem 
          key={task.id} 
          task={task} 
          onEdit={onEdit} 
          onDelete={onDelete} 
          onComplete={onComplete} 
        />
      ))}
    </ul>
  );
}

export default TaskList;
