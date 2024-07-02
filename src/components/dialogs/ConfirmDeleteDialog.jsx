import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'

import React from 'react'

const ConfirmDeleteDialog = ({open,handleClose,deleteHandler}) => {
  
  return (<Dialog open={open} onClose={handleClose}>
    <DialogTitle>Confirm delete</DialogTitle>
    <DialogContent>
        <DialogContentText>
        are you sure you want to delete this group?
        </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={deleteHandler}>Yes</Button>
      <Button onClick={handleClose} color='error'>NO</Button>
    </DialogActions>
  </Dialog>
  ); a
}

export default ConfirmDeleteDialog
