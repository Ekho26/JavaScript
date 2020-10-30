import React from 'react';
import {useState} from 'react';
import {useFormik} from 'formik';
import uuid from 'react-uuid';
import Container from '@material-ui/core/Container';
import CSSBaseline from '@material-ui/core/CssBaseline';
import HeaderComponent from './HeaderComponent';
import TodoListComponent from './TodoListComponent';
import FormDialogComponent from './FormDialogComponent';

// function useLocalStorageState(key, defaultValue ='') {
//   const [state, setState] = React.useState(
//     () => JSON.parse(window.localStorage.getItem(key)) || defaultValue,
//   )
//   React.useEffect(() => {
//     window.localStorage.setItem(key, JSON.stringify(state))
//   }, [key, state])
//   return [state, setState]
// }

function App() {

  const [todos, setTodos] = useState([]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDialogOpen = () => {
    setIsDialogOpen(true);
  }

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  }

  const handleSubmit = () => {
    const {todoText, priority, dueDate} = formik.values;
    setTodos([...todos, { 
      id: uuid(), 
      val:todoText, 
      priority: priority, 
      dueDate: dueDate
    }]);
    setIsDialogOpen(false);
    formik.values.todoText= '';
    formik.values.priority= 'Low';
    formik.values.dueDate= getCurrentDate();
  }

  const handleDelete =(id) => {
    const newTodos = [...todos];
    setTodos(newTodos.filter(t => t.id !== id));
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
        <TodoListComponent
          todos={todos}
          handleDelete={handleDelete}/>
      </Container>
      <FormDialogComponent
        open={isDialogOpen}
        handleClose={handleDialogClose}
        handleSubmit={handleSubmit}
        formik={formik}/>
    </>
  );
}

export default App;