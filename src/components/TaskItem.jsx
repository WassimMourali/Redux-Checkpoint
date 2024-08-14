import React from 'react';
import './TaskItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

function TaskItem({ task, onEdit, onDelete, onComplete }) {
  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-content">
        <h3>{task.name}</h3>
        <p>{task.description}</p>
        {task.dueDate && <p><strong>Échéance:</strong> {task.dueDate}</p>}
      </div>
      <div className="task-actions">
        <button onClick={() => onComplete(task.id)} className="complete-btn">
          <FontAwesomeIcon icon={faCheck} /> 
        </button>
        <button onClick={() => onEdit(task)} className="edit-btn">
          <FontAwesomeIcon icon={faEdit} /> 
        </button>
        <button onClick={() => onDelete(task.id)} className="delete-btn">
          <FontAwesomeIcon icon={faTrash} /> 
        </button>
      </div>
    </li>
  );
}

export default TaskItem;
