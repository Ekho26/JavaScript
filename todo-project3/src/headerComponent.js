import React, {useContext} from 'react';
import {StateContext} from "./context/StateContext"
import {Grid, Typography, Fab} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

function HeaderComponent({handleFabClick}) {
    const state = useContext(StateContext)
    const [isDialogOpen, setIsDialogOpen] = state.isDialogOpen

    return (
        <Grid container 
              justify="space-between"
              alignItems="center"
              style={{marginTop: '2em'}}>
            <Grid item>
                <Typography variant="h4">
                    TODO
                </Typography>
            </Grid>
            <Grid item>
                <Fab size='medium'
                     color='primary'
                     onClick={() => { setIsDialogOpen(true) }}>
                    <AddIcon/>
                </Fab>
            </Grid>
        </Grid>
    )
}

export default HeaderComponent;