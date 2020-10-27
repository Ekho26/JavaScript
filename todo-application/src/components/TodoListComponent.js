import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Paper,
  ListItem,
  FormControl,
  ListItemText,
  Modal,
  InputLabel,
  Input,
  Grid
} from "@material-ui/core";
// import DatePickers from './DatePicker';
import DeleteForeverTwoToneIcon from "@material-ui/icons/DeleteForeverTwoTone";
import ListAltTwoToneIcon from "@material-ui/icons/ListAltTwoTone";
import CheckBoxTwoToneIcon from "@material-ui/icons/CheckBoxTwoTone";
import db from "../firebase.config";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    width: 500,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  paper: {
    display: "flex",
    flexWrap: "wrap",
    maxWidth: 535,
  },
  root: {
    flexGrow: 1,
    overflow: "hidden",
    padding: theme.spacing(0, 3),
  },
}));

function TodoListComponent(props) {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const updateTodo = () => {
    db.collection("todos").doc(props.todo.id).set(
      {
        todo: input,
      },
      { merge: true }
    );
    setOpen(false);
  };
  
  const deleteTodo = () => {
    db.collection("todos").doc(props.todo.id).delete();
  };

  const bodyPaper = (
    <>
      <Paper className={classes.paper} elevation={2}>
        <Grid container wrap="nowrap" spacing={2} style={{ padding: "0.3em" }}>
          <Grid item xs>
            <ListItem>
              <ListItemText primary={props.todo.todo} secondary= 'Due Date:' />
            </ListItem>
          </Grid>
        </Grid>
      </Paper>
    </>
  );

  const body = (
    <Grid
      container
      style={modalStyle}
      className={classes.modal}
      direction="row"
      justify="space-around"
    >
      <FormControl>
        <form>
          <InputLabel>Edit</InputLabel>
          <Input
            placeholder={props.todo.todo}
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <Button
            disabled={!input}
            style={{ marginLeft: 35 }}
            onClick={updateTodo}
            color="primary"
            type="submit"
            variant="contained"
          >
            <CheckBoxTwoToneIcon />
          </Button>
        </form>
      </FormControl>
    </Grid>
  );

  return (
    <>
      <Modal open={open} onClose={() => setOpen(false)}>
        {body}
      </Modal>
      <Grid
        container
        className={classes.root}
        direction="column"
        justify="space-around"
      >
        {bodyPaper}
        <Grid
          container
          justify="space-around"
          style={{ marginTop: "0.3em", marginBottom: "1em" }}
        >
          <Grid item>
            <Button
              color="primary"
              variant="contained"
              onClick={() => setOpen(true)}
            >
              <ListAltTwoToneIcon />
            </Button>
          </Grid>
          <Grid item>
            <Button color="secondary" variant="contained" onClick={deleteTodo}>
              <DeleteForeverTwoToneIcon />
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default TodoListComponent;
