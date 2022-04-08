// @ts-nocheck
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import UserForm from './userForm';

export default function FormDialog(props) {

  const handleSubmit = () => {
  if(props.item ==null)
    props.handleClose(newItem,true)
  else{
    props.item.name=props.item.name+"changed"
    props.handleClose(newItem,true)
  }}
  return (
      <Dialog open={props.isOpen} onClose={() => props.handleClose(null,false)}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            it's a create dialog {(props.item!=null)?"no":"yes"}
          </DialogContentText>
           <UserForm item={props.item}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => props.handleClose(null,false)}>Отмена</Button>
          <Button form='my-form' type="submit" onClick={handleSubmit}>Сохранить</Button>
        </DialogActions>
      </Dialog>
  );
}
