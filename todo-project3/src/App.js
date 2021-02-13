import React from "react";
import { useState, useContext } from "react";
import Chip from "@material-ui/core/Chip";
import Container from "@material-ui/core/Container";
import CSSBaseline from "@material-ui/core/CssBaseline";
import HeaderComponent from "./HeaderComponent";
import TodoListComponent from "./TodoListComponent";
import FormDialogComponent from "./FormDialogComponent";
// import Zoom from "@material-ui/core/Zoom";
import { DragDropContext } from "react-beautiful-dnd";
import { StateProvider } from "./context/StateContext";
import { TodoContext } from "./context/TodoContext";
import { FormikProvider } from "./context/FormikContext";

function App() {

  const [todos, setTodos] = useContext(TodoContext);



  // const handleDelete = (id) => {
  //   const newTodos = [...todos];
  //   setTodos(newTodos.filter((t) => t.id !== id));
  // };

  // const handleMarkDone = (todo) => {
  //   const newTodos = [...todos];
  //   const t = newTodos.find((t) => (t.id = todo.id));
  //   t.done = !t.done;
  //   setTodos(newTodos);
  // };

  // const handlePriorityClick = (priority) => {
  //   setPriorityFilter(priority);
  // };

  // const handlePriorityFilterDelete = () => {
  //   setPriorityFilter("");
  // };

  // const formik = useFormik({
  //   initialValues: {
  //     todoText: "",
  //     priority: "Low",
  //     dueDate: getCurrentDate(),
  //   },
  // });

  const onDragEnd = (result) => {
    const { source, destination, draggableId } = result;
    if (!destination) return;
    if (destination.index === source.index) return;
    const t = todos.filter((todo) => todo.id === draggableId)[0];

    const newTodos = [...todos];
    newTodos.splice(source.index, 1);
    newTodos.splice(destination.index, 0, t);
    setTodos(newTodos);
  };

  return (
    <>
      <CSSBaseline />
      <FormikProvider>
      <StateProvider>
        <Container>
          <HeaderComponent/>
          {/* {priorityFilter === "" ? null : (
            <Zoom in={priorityFilter !== ""} timeout={400}>
              <Chip
                label={priorityFilter}
                onDelete={handlePriorityFilterDelete}
                color="secondary"
                style={{ marginTop: "1.2em" }}
                size="small"
              />
            </Zoom>
          )} */}
          <DragDropContext onDragEnd={onDragEnd}>
            <TodoListComponent/>
          </DragDropContext>
        </Container>
        <FormDialogComponent/>
      </StateProvider>
      </FormikProvider>
    </>
  );
}

export default App;
