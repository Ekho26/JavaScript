import React from 'react';
import './Todo.css';
import {List, ListItem, ListItemAvatar, ListItemText} from '@material-ui/core'


function Todo(props) {
    return (
        <List className='todo_list'>
            <ListItem>
                <ListItemAvatar>
                </ListItemAvatar>
            <ListItemText primary = {props.text} secondary = 'Hurry Up!'/>
            </ListItem>
        </List>
    )
}

export default Todo;
