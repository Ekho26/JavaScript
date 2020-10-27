import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import firebase from "firebase";
import db from "../firebase.config";


const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));
  
  function DatePickers() {
    const [inputDate, setInputDate] = useState("");
    const classes = useStyles();

    const addDate = (event) => {
        event.preventDefault();
        // if(inputValue === '') return;
        db.collection("todos").add({
          date: inputDate,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setInputDate("");
    };

    return (
      <form className={classes.container} noValidate>
        <TextField
          id="date"
          label="Due Date:"
          type="date"
          defaultValue="2017-05-24"
          className={classes.textField}
          addDate={addDate}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>
    );
  }

  export default DatePickers;