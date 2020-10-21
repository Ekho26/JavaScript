import React from 'react';
import {List, ListItem, ListItemText} from '@material-ui/core'


function Todo(props) {
    return (
        <List className='todo_list'>
            <ListItem>
            <ListItemText primary = {props.text} secondary = 'Hurry Up!'/>
            </ListItem>
        </List>
    )
}

export default Todo;
