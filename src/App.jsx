import { useState } from 'react'

import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  const [todos, setTodos] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('not completed');
  const [editIndex, setEditIndex] = useState(null);
  const [filter, setFilter] = useState('all');

  
  const addTodo = () => {
    if (editIndex !== null) {
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = { taskName, description, status };
      setTodos(updatedTodos);
      setEditIndex(null);
    } else {
      setTodos([...todos, { taskName, description, status: 'not completed' }]);
    }
    setTaskName('');
    setDescription('');
    setStatus('not completed');
  };

  
  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const editTodo = (index, newStatus) => {
    const todoToEdit = todos[index];
    setTaskName(todoToEdit.taskName);
    setDescription(todoToEdit.description);
    setStatus(newStatus || todoToEdit.status);
    setEditIndex(index);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'all') return true;
    return todo.status === filter;
  });


  return (
    <>
     
    </>
  )
}

export default App
