import React from 'react';
import {useState} from 'react';
import uuid from 'react-uuid';
import Container from '@material-ui/core/Container';
import CSSBaseline from '@material-ui/core/CssBaseline';
import HeaderComponent from './HeaderComponent';
import TodoListComponent from './TodoListComponent';
import FormDialogComponent from './FormDialogComponent';

function useLocalStorageState(key, defaultValue ='') {
  const [state, setState] = React.useState(
    () => JSON.parse(window.localStorage.getItem(key)) || defaultValue,
  )
  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])
  return [state, setState]
}

function App() {

  // const [todos, setTodos] = useLocalStorageState('todos',[]);
  // const [inputValue, setInputValue] = useState('');

  // const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  // const [editTodoState, setEditTodoState] =useState({});

  // const handleSubmit = (event) => {
  
  //   event.preventDefault();
    
  //   if(inputValue === '') return;
  //   setTodos([...todos, {id: uuid(), val: inputValue, done: false}]);
  //   setInputValue('');
  // }

  // const handleChange =(event) =>{
  //     setInputValue(event.target.value)
  // }

  // const deleteTodo = (todo) => {
  //   setTodos(todos.filter((t) => t.id !== todo.id))
  // }

  // const editTodo = (todo) => {
  //   setIsEditModalOpen(true);
  //   setEditTodoState(todo);
  // }

  // const updateTodo= (event, todoText) => {
  //   event.preventDefault();
  //   const newTodos = [...todos];
  //   const t = newTodos.find(t => t.id === editTodoState.id);
  //   t.val = todoText;
  //   setTodos(newTodos);
  //   setEditTodoState({});
  //   setIsEditModalOpen(false);
  // }

  // const markDone = (todo) => {
  //   const newTodos = [...todos];
  //   const t = newTodos.find(t => t.id === todo.id);
  //   t.done = !t.done;
  //   setTodos(newTodos);
  // }


  const [todos, setTodos] = useState([
    {
      val: 'todo 1',
      priority: 'high',
      due: '12th June'
    }, {
      val: 'todo 2',
      priority: 'high',
      due: '12th June'
    }, {
      val: 'todo 3',
      priority: 'high',
      due: '12th June'
    }
  ])

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDialogOpen = () => {
    setIsDialogOpen(true);
  }

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  }

  return (
    <>
      <CSSBaseline />
      <Container>
        <HeaderComponent
          handleDialogOpen={handleDialogOpen}
        />
        <TodoListComponent
          todos={todos}/>
      </Container>
      <FormDialogComponent
        open={isDialogOpen}
        handleClose={handleDialogClose}/>
    </>
  );
}

export default App;