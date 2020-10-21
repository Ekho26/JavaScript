import React, { useState, useEffect } from 'react';
import Todo from './Todo';
import dataBase from '../firebase';
// import firebase from '../firebase';
import {Button, FormControl, InputLabel, Input} from '@material-ui/core';

function InputTask(){
  // Hooks 
  // useState sets up short time memory
  const [todos, setTodos] = useState([]);
  // remember what we type into the input
  const [input, setInput] = useState('');
  // console.log('fast', input);

  // We need to get the data from database
  useEffect(() => {
    dataBase
      .collection('todos')
      ./* orderBy('timestamp', 'asc'). */onSnapshot(snapshot => {
        setTodos(
          snapshot
            .docs
            .map(
              doc => doc
                      .data()
                      .todo
            )
        )
    })
  }, []);

  const addTodo = (event) => {

    // prevents the page from refreshing when we put new item
    event.preventDefault();

    // this will fire up when we click the button Add todo
    dataBase
      .collection('todos')
      .add({
        todo: input
      // timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });

    // Cleans the input after we press the submit button
    setInput('');
  }
  return (
    // put it into a form so that when we press enter it submits
    <div>
      <form>
          {/* using Material-Ui */}
          <FormControl>
              <InputLabel>ToDo</InputLabel>
              <Input value = {input} onChange = {
                event => setInput(event
                                  .target
                                  .value
                )
              }/>
          </FormControl>
          <Button disabled = {!input} type= 'submit' onClick ={addTodo} variant="contained" color="primary">Add Task</Button>
      </form>
    
      <ul>
        {todos.map(todo => (
          <Todo text={todo}/>
        ))}
      </ul>
    </div>
  )
}

export default InputTask;
