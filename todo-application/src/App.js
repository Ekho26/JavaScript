import React, { useState, useEffect } from "react";
import InputComponent from "./components/InputComponent.js";
import TodoListComponent from "./components/TodoListComponent.js";
import HeaderComponent from "./components/HeaderComponent";
import Container from "@material-ui/core/Container";
import CSSBaseline from "@material-ui/core/CssBaseline";
import Switch from "@material-ui/core/Switch";
import { blue, indigo, grey } from "@material-ui/core/colors";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import db from "./firebase.config";
import uuid from "uuid";

function App() {
  const [todos, setTodos] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const useStyles = makeStyles((theme) => ({
    container: {
      marginTop: 30,
      width: 600,
      background: isDarkMode ? grey[400] : grey[100],
      color: theme.palette.getContrastText(isDarkMode ? grey[400] : grey[100]),
      boxShadow: theme.shadows[5],
      borderRadius: 8,
      padding: theme.spacing(2, 4, 3),
    },
  }));

  const classes = useStyles();

  let theme = createMuiTheme({
    pallete: {
      type: isDarkMode ? "dark" : "light",
      primary: {
        main: isDarkMode ? blue[900] : indigo[900]
      },
      secondary: {
        main: isDarkMode ? blue[200] : blue[200]
      },
      background: {
        default: isDarkMode ? grey[200] : grey[100]
      }
    },
  });

  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo}))
        );
      });
  }, []);

  return (
    <>
      <CSSBaseline />
      <ThemeProvider theme={theme}>
        <Container
          maxWidth="sm"
          aligncontent="center"
          className={classes.container}
          key={uuid()}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Brightness7Icon />
            <Switch checked ={isDarkMode}
                    onClick={() => setIsDarkMode(mode=>!mode)}/>
            <Brightness2Icon />
          </div>
          <HeaderComponent key={uuid()} />
          <InputComponent />
          {todos.map((todo) => (
            <TodoListComponent todo={todo} key={uuid()} />
          ))}
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
