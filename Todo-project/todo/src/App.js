import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [todos, setTodos] = useState([]);


  return (
    <div className="App">
      <h1>Todo</h1>
      <input />
      <button>Add todo</button>
      <ul>
        {todos.map(todo => (
        <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
