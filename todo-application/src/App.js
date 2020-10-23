import React, { useState, useEffect} from 'react';
import Todo from './Todo.js';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import LibraryAddCheckTwoToneIcon from '@material-ui/icons/LibraryAddCheckTwoTone';
import './App.css';
import firebase from 'firebase';
import db from './firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() =>{
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot =>{
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
    })
  }, []);

  const addTodo =(event) =>{
    event.preventDefault();
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  };

  return (
    <div className="App">
      <h1>
        ToDo
      </h1>
      <form>
        <FormControl>
          <InputLabel>Add a task</InputLabel>
          <Input value={input} 
                 onChange={event => setInput(event.target.value)} />
        </FormControl>
        <Button disabled= {!input} 
                type='submit' 
                onClick={addTodo} 
                variant="contained" 
                color="primary">
          <LibraryAddCheckTwoToneIcon />
        </Button>
      </form>
      <ul>
        {todos.map(todo => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default App;
