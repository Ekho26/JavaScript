import React, {useContext} from "react";
import {
  IconButton,
  ButtonGroup,
  Chip,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import CheckIcon from "@material-ui/icons/Check";
import Fade from '@material-ui/core/Fade';
import {Droppable, Draggable} from 'react-beautiful-dnd';
import {TodoContext} from './context/TodoContext';
import {StateContext} from './context/StateContext';

// const getTextDecor = (done) => {
//   return done ? "line-throguh" : "none";
// };

function TodoListComponent() {

  const [todos, setTodos] = useContext(TodoContext);
  const state = useContext(StateContext);
  const [priorityFilter, setPriorityFilter] = state.priorityFilter;
  const [isDialogOpen, setIsDialogOpen] = state.isDialogOpen;
  const [isEditMode, setIsEditMode] = state.isEditMode;
  const [editTodo, setEditTodo] = state.editTodo;

  return (
    <Droppable droppableId = "todolist">
      { (provided) => 
        <Grid
          container
          direction="column"
          spacing={2}
          style={{ marginTop: "1.5em" }}
          { ...provided.droppableProps}
          ref = {provided.innerRef}
        >
          {todos.filter((t) => {
            if (priorityFilter ===''){
              return true;
            } else {
              return t.priority === priorityFilter
            }
          }
          ).map((todo, i) => {
            return (
              <Draggable draggableId = 
                {todo.id} index = {i}>
                  {(provided) => (
                  <Fade in={todo.in} 
                        timeout={500}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref = {provided.innerRef}>
                    <Grid item style = {
                                {userSelect: 'none'}}>
                      <Paper style={{ padding: "0.8em" }} elevation={4}>
                        <Grid container alignItems="center" justify="space-between">
                          <Grid item>
                            <Typography
                              variant="h6"
                              style={{
                                textDecoration: todo.done ? "line-through" : "none",
                              }}
                            >
                              {todo.val}
                            </Typography>
                          </Grid>
                          <Grid>
                            <Chip
                              size="small"
                              color="primary"
                              label={todo.priority}
                              onClick={() => {
                                setPriorityFilter(todo.priority);
                              }}
                            />
                          </Grid>
                        </Grid>
                        <Typography variant="body2">Due: {todo.dueDate}</Typography>
                        <ButtonGroup
                          color="primary"
                          aria-label="outlined primary button group"
                          variant="text"
                          size="small"
                          style={{ paddingTop: "12px" }}
                        >
                          <IconButton>
                            <EditIcon
                              onClick={() => {
                                isEditMode(true);
                                isDialogOpen(true);
                                editTodo(todo);
                              }}
                            />
                          </IconButton>
                          <IconButton>
                            <CheckIcon
                              onClick={() => {
                                const newTodos = [...todos]
                                const t = todos.find(t => t.id === todo.id)
                                t.done = !t.done
                                setTodos(newTodos)
                              }}
                            />
                          </IconButton>
                          <IconButton>
                            <DeleteIcon
                              onClick={() => {
                                setTodos(todos.filter(t => t.id !== todo.id))
                              }}
                            />
                          </IconButton>
                        </ButtonGroup>
                      </Paper>
                    </Grid>
                  </Fade>
                )}
              </Draggable>
            );
          })}
        </Grid>
      }
    </Droppable>
  )
}
export default TodoListComponent;
