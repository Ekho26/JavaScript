import React, { useState } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  Input,
  Grid,
} from "@material-ui/core";
// import DatePickers from './DatePicker';
import LibraryAddCheckTwoToneIcon from "@material-ui/icons/LibraryAddCheckTwoTone";
import firebase from "firebase";
import db from "../firebase.config";

function InputComponent() {
  const [inputValue, setInputValue] = useState("");

  const addTodo = (event) => {
    event.preventDefault();
    // if(inputValue === '') return;
    db.collection("todos").add({
      todo: inputValue,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInputValue("");
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <form>
        <Grid
          container
          alignItems="center"
          justify="space-around"
          style={{ marginBottom: "3em" }}
        >
          <Grid item>
            <FormControl color='secondary'>
              <InputLabel color='secondary'>Add a task</InputLabel>
              <Input value={inputValue} onChange={handleChange} />
              {/* <DatePickers/> */}
            </FormControl>
          </Grid>
          <Grid item>
            <Button
              type="submit"
              disabled={!inputValue}
              onClick={addTodo}
              variant="contained"
              color="primary"
            >
              <LibraryAddCheckTwoToneIcon />
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}

export default InputComponent;