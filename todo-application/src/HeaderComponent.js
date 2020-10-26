import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function HeaderComponent() {

    return (
            <AppBar position="static"
                    style={{marginBottom:'1.5em', borderRadius:'4px'}}>
                <Toolbar variant="dense" 
                    style={{ justifyContent: "center"}} >
                    <Typography 
                        variant="h6" 
                        color="inherit">
                        Todo List
                    </Typography>
                </Toolbar>
            </AppBar>
    )
}

export default HeaderComponent;