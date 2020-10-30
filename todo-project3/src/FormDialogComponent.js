import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
//   DialogContentText,
  DialogTitle,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from "@material-ui/core";

function FormDialogComponent(props) {

  return (
    <Dialog open={props.open} onClose={props.handleClose} style={{minWidth:"60vw"}}>
      <DialogTitle>Add todo</DialogTitle>
      <DialogContent>
        <Grid container direction="column" spacing={2}>
            <Grid item>
                <TextField label="Todo text..." variant="outlined" />
            </Grid>
            <Grid item>
                <FormControl variant="outlined" style={{width:"100%"}}>
                    <InputLabel priorityLabel>Priority</InputLabel>
                    <Select
                        labelId="priorityLabel"
                        label="Priority"
                    >
                        <MenuItem value="Low">Low</MenuItem>
                        <MenuItem value="Med">Med</MenuItem>
                        <MenuItem value="High">High</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item>
                <TextField  label="due date" 
                            type="date" 
                            variant="outlined" 
                            defaultValue="2020-29-10"
                            style={{width:"100%"}}
                            InputLabelProps={{shrink:true}}
                />
            </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button color="primary">Add</Button>
        <Button onClick={props.handleClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
}

export default FormDialogComponent;
