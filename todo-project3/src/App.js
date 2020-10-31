import React from 'react';
import {useState,useEffect} from 'react';
import {useFormik} from 'formik';
import uuid from 'react-uuid';
import Chip from '@material-ui/core/Chip';
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

  const [filteredTodos, setFilteredTodos] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editTodo, setEditTodo] = useState({});
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [todos, setTodos] = useState([]);
  const [priorityFilter, setPriorityFilter] = useState('');

  useEffect(() => {
    setFilteredTodos(todos.filter(t => t.priority === priorityFilter))
  },[priorityFilter])

  useEffect(() => {
    if(isEditMode){
      formik.values.todoText= editTodo.val;
      formik.values.priority= editTodo.priority;
      formik.values.dueDate= editTodo.dueDate;
    } else {
      formik.values.todoText= '';
      formik.values.priority= 'Low';
      formik.values.dueDate= getCurrentDate();
    }
  },[isEditMode]);

  useEffect(() => {
    if(!isDialogOpen){
      if(isEditMode) setIsEditMode(false);
    }
  }, [isDialogOpen]);

  const handleDialogOpen = () => {
    setIsDialogOpen(true);
  }

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  }

  const handleEditClick = (todo) => {
    setIsDialogOpen(true);
    setIsEditMode(true);
    setEditTodo(todo);
  }

  const handleSubmit = () => {
    const {todoText, priority, dueDate} = formik.values;
    if(!isEditMode){
      setTodos([...todos, { 
        id: uuid(), 
        val: todoText, 
        priority: priority, 
        dueDate: dueDate
      }])
    } else {
      const newTodos = [...todos];
      const t = newTodos.find(t => t.id === editTodo.id);
      t.val = todoText;
      t.priority = priority;
      t.dueDate = dueDate;
      setIsEditMode(false);
      setEditTodo({});
      setTodos(newTodos);
    }
    setIsDialogOpen(false);
    formik.values.todoText= '';
    formik.values.priority= 'Low';
    formik.values.dueDate= getCurrentDate();
  }

  const handleDelete =(id) => {
    const newTodos = [...todos];
    setTodos(newTodos.filter(t => t.id !== id));
  }

  const handleMarkDone = (todo) => {
    const newTodos =[...todos];
    const t = newTodos.find(t => t.id === todo.id);
    t.done = !t.done;
    setTodos(newTodos);
  }

  const handlePriorityClick = (priority) => {
    setPriorityFilter(priority)
  }

  const handlePriorityFilterDelete = () => {
    setPriorityFilter('');
  }

  const getCurrentDate = () => {
    const today = new Date();
    return today.toISOString().slice(0,10)
  }

  const formik = useFormik({
      initialValues: {
          todoText: '',
          priority: 'Low',
          dueDate: getCurrentDate()
      }
  });

  return (
    <>
      <CSSBaseline />
      <Container>
        <HeaderComponent
          handleDialogOpen={handleDialogOpen}
        />
        {priorityFilter === ''?null:
          <Chip label={priorityFilter}
                onDelete={handlePriorityFilterDelete}
                color="secondary"
                style={{marginTop:"1.2em"}}/>
        }
        <TodoListComponent
          todos={priorityFilter === ''?todos:filteredTodos}
          handleEditClick={handleEditClick}
          handleDelete={handleDelete}
          handleMarkDone={handleMarkDone}
          handlePriorityClick={handlePriorityClick}/>
      </Container>
      <FormDialogComponent
        open={isDialogOpen}
        handleClose={handleDialogClose}
        handleSubmit={handleSubmit}
        formik={formik}
        isEditMode={isEditMode}/>
    </>
  );
}

export default App;