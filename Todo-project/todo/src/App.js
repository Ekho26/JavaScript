import React, { useState, useEffect } from 'react'
import { FormControl, Button, InputLabel, Input } from '@material-ui/core'
import PostAddIcon from '@material-ui/icons/PostAddIcon'
import './App.css'
import Todo from './Todo.js'
import db from './firebase'
import firebase from 'firebase'

function App() {

  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')
  // console.log(input);

  // when the app loads, we need to listen 
  // to the database and fetch new todos as they get added/removed
  // useEffect(() => {
  //  db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
  //    setTodos(snapshot.docs.map(doc => ({id: doc.id, doc.data().todo})))
  //  }) 
  // }, [])

  const addTodo = (event) => {
    // prevents the refreshing of the page when we add items to the list
    event.preventDefault()

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    // this will fire up when we click the button
    // console.log("I'm working");
    // using spread operator (adding to the end the new todos) ...
    // setTodos([...todos, input]);
    setInput('')  // this will set up the input to black after submitting the input
  }

  return (
    <div className="App">
      <h1>Todo</h1>
        <form>
          <FormControl>
            <InputLabel>Add a task</InputLabel>
            <Input value= {input} onChange= {event => setInput(event.target.value)}/>
          </FormControl>
          <Button variant="contained" 
                  color="primary" 
                  href="#contained-buttons"
                  type="submit"
                  onClick= {addTodo}
                  disabled= {!input}>
              <PostAddIcon/>
          </Button>
        </form>
      <ul>
        {todos.map(todo => (
          <Todo todo={todo}/>
        ))}
      </ul>
    </div>
  )
}

export default App
