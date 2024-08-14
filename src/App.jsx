import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import {
  addTask,
  editTask,
  deleteTask,
  toggleTaskCompletion
} from './actions';
import './App.css';
import logow from './logow.png';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function App() {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks);
  const [taskToEdit, setTaskToEdit] = React.useState(null);

  const handleAddTask = (task) => {
    dispatch(addTask({ ...task, id: Date.now(), completed: false }));
  };

  const handleEditTask = (editedTask) => {
    dispatch(editTask(editedTask));
    setTaskToEdit(null);
  };

  const handleDeleteTask = (id) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cette tâche ?')) {
      dispatch(deleteTask(id));
    }
  };

  const handleCompleteTask = (id) => {
    dispatch(toggleTaskCompletion(id));
  };

  const handleEditClick = (task) => {
    setTaskToEdit(task);
  };

  return (
    <div className="app">
      <header className="header">
        <img src={logow} alt="Logo" className="header-logo" />
        <h1>To-Do List</h1>
      </header>
      <main>
        <TaskForm
          onSubmit={taskToEdit ? handleEditTask : handleAddTask}
          initialData={taskToEdit}
        />
        <TaskList
          tasks={tasks}
          onEdit={handleEditClick}
          onDelete={handleDeleteTask}
          onComplete={handleCompleteTask}
        />
      </main>
      <footer className="footer">
        <p className='ff'>© 2024 To-Do List App</p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/wassimmourali/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/WassimMourali" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
