import React, { useState, useEffect } from 'react';
import uuid from 'react-uuid';
import InputComponent from './formComponent';
import TodoListComponent from './todoListComponent';

function App() {

  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);

  const handleSubmit = (event) => {
  
    event.preventDefault();
    
    if(inputValue === '') return;
    setTodos([...todos, {id: uuid(), val: inputValue, done: false}]);
    setInputValue('');
  }

  const handleChange =(event) =>{
      setInputValue(event.target.value)
  }

  const deleteTodo = (todo) => {
    setTodos(todos.filter((t) => t.id !== todo.id))
  }

  const markDone = (todo) => {
    const newTodos = [...todos];
    const t = newTodos.find(t => t.id === todo.id);
    t.done = !t.done;
    setTodos(newTodos);
  }

  return (
    <div className='p-12 bg-gray-300 h-full text-sm'>
      <InputComponent
      value= {inputValue}
      handleChange= {handleChange}
      handleSubmit= {handleSubmit}
      />
      <TodoListComponent
        todos = {todos}
        deleteTodo = {deleteTodo}
        markDone= {markDone}
      />
    </div>
  );
}

export default App;
