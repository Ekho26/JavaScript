import React, { useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputComponent from './components/InputComponent.js';
import TodoListComponent from './components/TodoListComponent.js';
import HeaderComponent from './components/HeaderComponent';
import Container from '@material-ui/core/Container';
import CSSBaseline from '@material-ui/core/CssBaseline';
import db from './firebase.config';
import uuid from 'uuid';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 30,
    width: 600,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    borderRadius: 8,
    padding: theme.spacing(2, 4, 3),
  }
}));

function App() {
  const classes = useStyles();
  const [todos, setTodos] = useState([]);

  useEffect(() =>{
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot =>{
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
    })
  }, []);

  return (
    <>
      <CSSBaseline />
      <Container maxWidth="sm"
                 aligncontent="center"
                 className={classes.container}
                 key={uuid()}
                 >
        <HeaderComponent key={uuid()}/>
        <InputComponent/>
          <div>
            {todos.map(todo => (
              <TodoListComponent 
                todo={todo}
                key={uuid()}/>
            ))}
          </div>
      </Container>
    </>
  );
};

export default App;
