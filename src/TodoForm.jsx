import React from 'react'

function TodoForm({ taskName, setTaskName, description, setDescription, addTodo, editIndex }) {
  const handleTaskNameChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  return (
    <div className='form'>
    <div className="row">
    <div className="col-5"> 
  <input type="text"  className="form-control border border-success " value={taskName} onChange={handleTaskNameChange} placeholder="Task Name" />
  </div>
  <div className="col-5">
  <input type="text"  className="form-control border border-success" value={description} onChange={handleDescriptionChange} placeholder="Description"/>
  </div>
  <div className="col-2">
  <button type="button" className="btn btn-success btn-sm"  style={{width:'100%', height:'40px', borderRadius:'10px'}} onClick={addTodo}>{editIndex !== null ? 'Update Todo' : 'Add Todo'}</button>
  </div>
</div> 
</div> 
  );
}

export default TodoForm