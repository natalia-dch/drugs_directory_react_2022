// @ts-nocheck
import React, {Component, useState } from 'react';
import { Form, Button, FormGroup, FormControl, ControlLabel, FormLabel } from "react-bootstrap";
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormHelperText from '@mui/material/FormHelperText';
import NotifyDialog from '../components/dialogs/notifyDialog';
import './Contact.css';

function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isDoctor, setIsDoctor] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = useState("");
  const [helperText, setHelperText] = React.useState("");
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  function validateForm() {
    if(email.length < 1){
      setHelperText("Введите email")
      return false;
    }
    if(name.length < 1){
      setHelperText("Введите имя")
      return false;
    }
    if(message.length < 1){
      setHelperText("Введите сообщение")
      return false;
    }
    if(!regex.test(email)){
      setHelperText("Некорректное значение email")
      return false;
    }
    return true;
  }

  function handleSubmit(event: any) {
    //TODO send feedback to doctor
    if(validateForm())
    {
      setOpen(true);
      // alert("! Ответ придёт на указанную почту в течении 7 рабочих дней.")
    }
    // event.preventDefault();
  }

  return (
    <div className="Login">
        {open && <NotifyDialog isOpen={open} handleClose={() => setOpen(false)}/>}
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="name">
          <Form.Label>Имя</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue={0}
          name="radio-buttons-group"
          onChange={(event) => {setIsDoctor(event.target.value)}}
        >
          <FormControlLabel value={1} control={<Radio />} label="врач" />
          <FormControlLabel value={0} control={<Radio />} label="пациент" />
        </RadioGroup>
        <Form.Group size="lg" controlId="name">
          <Form.Label>Сообщение</Form.Label>
          <Form.Control
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            as="textarea" rows={3}
          />
        </Form.Group>
<FormHelperText>{helperText}</FormHelperText>
<Button variant="flat" onClick={handleSubmit}>
  Задать вопрос
</Button>
    </div>
  );
}

export default Contact;
