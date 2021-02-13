import React, {useContext, useEffect} from "react";
import FormComponent from './FormComponent';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from "@material-ui/core";
import {StateContext} from "./context/StateContext";
import {TodoContext} from "./context/TodoContext";
import {FormikContext} from "./context/FormikContext";
import uuid from "react-uuid";

function FormDialogComponent() {

  const [todos, setTodos] = useContext(TodoContext);
  const state = useContext(StateContext);
  const [priorityFilter, setPriorityFilter] = state.priorityFilter;
  const [isDialogOpen, setIsDialogOpen] = state.isDialogOpen;
  const [isEditMode, setIsEditMode] = state.isEditMode;
  const [editTodo, setEditTodo] = state.editTodo;
  const formik = useContext(FormikContext)

    const handleSubmit = () => {
    const { todoText, priority, dueDate } = formik.values;
    if (!isEditMode) {
      setTodos([
        ...todos,
        {
          id: uuid(),
          val: todoText,
          priority: priority,
          dueDate: dueDate,
          in: true,
        },
      ]);
    } else {
      const newTodos = [...todos];
      const t = newTodos.find((t) => t.id === editTodo.id);
      t.val = todoText;
      t.priority = priority;
      t.dueDate = dueDate;
      setIsEditMode(false);
      setEditTodo({});
      setTodos(newTodos);
    }
    setIsDialogOpen(false);
    formik.values.todoText = "";
    formik.values.priority = "Low";
    formik.values.dueDate = getCurrentDate();
  };

  return (
    <Dialog open={isDialogOpen} onClose={() => {setIsDialogOpen(false)}} style={{minWidth:"60vw"}}>
      <DialogTitle>{isEditMode? "Update ":"Add " } todo</DialogTitle>
      <DialogContent>
        <FormComponent formik={formik}/>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => {setIsDialogOpen(false)}}>Cancel</Button>
        <Button color="primary" onClick={handleSubmit}>{isEditMode? "Update": "Add"}</Button>
      </DialogActions>
    </Dialog>
  );
}

export default FormDialogComponent;