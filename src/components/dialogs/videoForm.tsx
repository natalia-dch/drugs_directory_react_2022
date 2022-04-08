// @ts-nocheck
import React, { useState , useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Grid from '@mui/material/Grid';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function VideoForm(props) {
const [showFrame, setShowFrame] = React.useState(false);
const [link, setLink] = React.useState("");


const handleSubmit = () => {
let newItem = link;
props.handleClose(newItem,true);
}

  return (
    <Dialog open={props.isOpen} onClose={() => props.handleClose(null,false)}>
      <DialogTitle>"Добавить это видео?"</DialogTitle>
      <DialogContent>
      <Grid className="videoContainer"
       item xs={4}>
      <iframe width="100%" src={props.item}
      title="YouTube video player" frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen></iframe>
      </Grid>
</DialogContent>
      <DialogActions>
        <Button onClick={() => props.handleClose(null,false)}>Отмена</Button>
        <Button form='my-form' type="submit" onClick={handleSubmit}>Сохранить</Button>
      </DialogActions>
    </Dialog>
  );
}
