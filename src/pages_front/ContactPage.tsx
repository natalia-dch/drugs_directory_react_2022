// @ts-nocheck
import React, {Component, useState } from 'react';
import { Form, Button, FormGroup, FormControl, ControlLabel, FormLabel } from "react-bootstrap";
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';

function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isDoctor, setIsDoctor] = useState("");
  const [message, setMessage] = useState("");


  function validateForm() {
    return email.length > 0 && name.length > 0;
  }

  function handleSubmit(event: any) {
    //TODO send feedback to doctor
    alert("! Ответ придёт на указанную почту в течении 7 рабочих дней.")
    // event.preventDefault();
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
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
        <Form.Group size="lg" controlId="radio">
          <Form.Label>Являетесь ли Вы врачом или пациентом?</Form.Label>
          <Form.Check
            type="radio"
            name="group1"
            label={`врач`}
            id={`disabled-default-radio`}
          />
          <Form.Check
            type="radio"
            name="group1"
            label={`пациент`}
            id={`disabled-default-radio`}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="name">
          <Form.Label>Сообщение</Form.Label>
          <Form.Control
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            as="textarea" rows={3}
          />
        </Form.Group>

<Button type="submit" block disabled={!validateForm()}>
  Задать вопрос
</Button>
      </Form>
    </div>
  );
}

export default Contact;
