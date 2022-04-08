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

export default function UserForm(props) {
const [showPasswordForm, setShowPasswordForm] = React.useState(false);
const [email, setEmail] = React.useState(props.item.email);
const [name, setName] = React.useState(props.item.name);
const [password, setPassword] = React.useState("");
const [password2, setPassword2] = React.useState("");

useEffect(() => {
    setEmail(props.item.email);
    setName(props.item.name);
    setPassword("");
    setPassword2("");
    setShowPasswordForm(false);
}, [props.item])


const handleSubmit = () => {
if(props.item.id == -2){ //add new
let newItem = { "id": -1, "name": name, "email": email, "isAdmin": false};
props.handleClose(newItem,true);
}

else{
  let newItem = { "id": props.item.id, "name": name, "email": email, "isAdmin": props.item.isAdmin};
  props.handleClose(newItem,true)
}
}

  return (
    <Dialog open={props.isOpen} onClose={() => props.handleClose(null,false)}>
      <DialogTitle>{props.item.id==-2?"Добавить пользователя":"Изменить пользователя"}</DialogTitle>
      <DialogContent>
      <Form.Group size="lg" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          autoFocus
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>
      <Form.Group size="lg" controlId="password">
        <Form.Label>Имя</Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>
      { (showPasswordForm || props.item.id==-2) &&
        <div><Form.Group size="lg" controlId="email">
          <Form.Label>Пароль</Form.Label>
          <Form.Control
            autoFocus
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Повторите пароль</Form.Label>
          <Form.Control
            type="password"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
        </Form.Group>
        </div>

      }
      { !showPasswordForm && props.item.id!=-2 && <Button onClick={()=>setShowPasswordForm(true)}>Изменить пароль</Button> }
      </DialogContent>
      <DialogActions>
        <Button onClick={() => props.handleClose(null,false)}>Отмена</Button>
        <Button form='my-form' type="submit" onClick={handleSubmit}>Сохранить</Button>
      </DialogActions>
    </Dialog>
  );
}
