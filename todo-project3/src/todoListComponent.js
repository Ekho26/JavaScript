import React from "react";
import {Grid, Paper, Typography} from '@material-ui/core'

function TodoListComponent(props) {
  return (
    <Grid container direction="column" spacing={2}
          style={{marginTop: '1.5em'}}>
      {props.todos.map(todo => {
        return (
          <Grid item>
            <Paper style={{padding: '0.8em'}}>
              <Grid container 
                    alignItems="center"
                    justify="space-between">
                <Grid item>
                  <Typography variant="h6">
                    {todo.val}
                  </Typography>
                </Grid>
                <Grid>
                  {todo.priority}
                </Grid>
              </Grid>
              <Typography variant="body2">
                Due: {todo.due}
              </Typography>
            </Paper>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default TodoListComponent;