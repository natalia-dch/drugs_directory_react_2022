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


export default function NewsForm(props) {
const [title, setTitle] = React.useState(props.item.title);
const [text, setText] = React.useState(props.item.text);
const [picture, setPicture] = React.useState(props.item.src);

useEffect(() => {
    setTitle(props.item.title);
    setText(props.item.text);
    setPicture(props.item.src);
}, [props.item])

const onFileChange = event => {
  // Update the state
  console.log(event.target.files[0])
  // setPicture(event.target.files[0]);
  let value = URL.createObjectURL(event.target.files[0]);
  setPicture(value);

};

const handleSubmit = () => {
if(props.item.id == -2){ //add new
let newItem = { "id": -1, "text": text, "src": picture, "title": title};
props.handleClose(newItem,true);
}

else{
  let newItem = { "id": props.item.id, "src": picture, "text": text, "title": title};
  props.handleClose(newItem,true)
}
}

  return (
    <Dialog open={props.isOpen} onClose={() => props.handleClose(null,false)}>
      <DialogTitle>{props.item.id==-2?"Добавить новость":"Изменить новость"}</DialogTitle>
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
   <input type="file" id="input_file" onChange={onFileChange} accept=".jpg,.jpeg,.png" style={{ display: 'none' }} />
     <Button id="get_file" onClick={() => document.getElementById('input_file').click() }>{picture ? "Изменить фото":"Добавить фото"}</Button>
    { picture && <img src={picture} width="100%" alt="picture" /> }
  </DialogContent>
      <DialogActions>
        <Button onClick={() => props.handleClose(null,false)}>Отмена</Button>
        <Button form='my-form' type="submit" onClick={handleSubmit}>Сохранить</Button>
      </DialogActions>
    </Dialog>
  );
}
