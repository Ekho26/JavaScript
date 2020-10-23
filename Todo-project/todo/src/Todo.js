import React from 'react';
import './Todo.css';
import { List, ListItem, ListItemText, Button} from '@material-ui/core';
import db from './firebase';

function Todo(props) {
    return (
        <List className='todo_list'>
            <ListItem>
                <ListItemText primary={props.todo.todo} secondary='Task'/>
            </ListItem>
            <Button onClick={event => {
                db.collection('todos').doc(props.todo.id).delete()
            }}>

            </Button>
        </List>
    )
}

export default Todo;
