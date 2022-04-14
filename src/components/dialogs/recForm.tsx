// @ts-nocheck
import React, { useState , useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


export default function RecForm(props) {
const [title, setTitle] = React.useState(props.item.title);
const [text, setText] = React.useState(props.item.text);

useEffect(() => {
    setTitle(props.item.title);
    setText(props.item.text);
}, [props.item])


const handleSubmit = () => {
if(props.item.id == -2){ //add new
let newItem = { "id": -1, "text": text, "title": title};
props.handleClose(newItem,true);
}

else{
  let newItem = { "id": props.item.id, "text": text, "title": title};
  props.handleClose(newItem,true)
}
}

  return (
    <Dialog open={props.isOpen} onClose={() => props.handleClose(null,false)}>
      <DialogTitle>{props.item.id==-2?"Добавить рекомендацию":"Изменить рекомендацию"}</DialogTitle>
      <DialogContent>
      <Form.Group size="lg" controlId="title">
        <Form.Label>Заголовок</Form.Label>
        <Form.Control
          autoFocus
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>
      <Form.Group size="lg" controlId="text">
        <Form.Label>Текст</Form.Label>
        <ReactQuill theme="snow" value={text} onChange={setText}/>
      </Form.Group>
  </DialogContent>
      <DialogActions>
        <Button onClick={() => props.handleClose(null,false)}>Отмена</Button>
        <Button form='my-form' type="submit" onClick={handleSubmit}>Сохранить</Button>
      </DialogActions>
    </Dialog>
  );
}
