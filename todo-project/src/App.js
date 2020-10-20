import React, { useState, useEffect } from 'react';
import Todo from './Todo';
import {Button, FormControl, InputLabel, Input} from '@material-ui/core';
import './App.css';
import db from './firebase';

function App() {
  // Hooks 
  // useState sets up short time memory
  const [todos, setTodos] = useState([]);
  // remember what we type into the input
  const [input, setInput] = useState('');
  // console.log('fast', input);

  // We need to get the data from database
  useEffect(() => {
    db.collection('todos').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => doc.data().todo))
    })
  }, []);

  const addTodo = (event) => {
    // prevents the page from refreshing when we put new item
    event.preventDefault();
    // this will fire up when we click the button Add todo



    setTodos([...todos, input]);
    // Cleans the input after we press the submit button
    setInput('');
  }
  return (
    <div className="App">
      <h1>
        ToDo
      </h1>
      {/* put it into a form so that when we press enter it submits */}
      <form>
      {/* <input value = {input} onChange = {event => setInput(event.target.value)}/> */}
      {/* using Material-Ui */}
      <FormControl>
        <InputLabel>Task here</InputLabel>
        <Input value = {input} onChange = {event => setInput(event.target.value)}/>
      </FormControl>
      <Button disabled = {!input} type= 'submit' onClick ={addTodo} variant="contained" color="primary">Add Todo</Button>
      {/* Without style */}
      {/* <button type= 'submit' onClick ={addTodo}>Add Todo</button> */}
      </form>

      <ul>
        {todos.map(todo => (
          <Todo text={todo}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
