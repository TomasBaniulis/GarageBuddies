import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {useState} from "react";
const FormDialogue = () => {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return(
        <React.Fragment>
            <Button variant="outlined" onClick={handleClickOpen}>
                UPDATE MILEAGE
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>UPDATE MILEAGE</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        WARRNING: Updated mileage can't be reverted back!
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Curent mileage"
                        type="email"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Subscribe</Button>
                </DialogActions>
            </Dialog>

        </React.Fragment>
    )
}
export default FormDialogue();