import React, { useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputComponent from './InputComponent.js';
import TodoListComponent from './TodoListComponent.js';
import HeaderComponent from './HeaderComponent';
import Container from '@material-ui/core/Container';
import CSSBaseline from '@material-ui/core/CssBaseline';
import db from './firebase.config';

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
                 >
        <HeaderComponent/>
        <InputComponent/>
          <div>
            {todos.map(todo => (
              <TodoListComponent 
                todo={todo}/>
            ))}
          </div>
      </Container>
    </>
  );
};

export default App;
