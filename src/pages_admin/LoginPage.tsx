// @ts-nocheck
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import FormHelperText from '@mui/material/FormHelperText';
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [helperText, setHelperText] = React.useState("");
  const navigate = useNavigate();
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


  function validateForm() {
    if(email.length < 1){
      setHelperText("Введите email")
      return false;
    }
    if(password.length < 1){
      setHelperText("Введите пароль")
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
    if(validateForm() & email=="natata0303@gmail.com" & password=="123456")
    {
      navigate("/admin/moderators");}
    // event.preventDefault();
  }

  return (
    <div className="Login">
        <Form.Group size="lg" controlId="email">
          <Form.Label>Логин</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Пароль</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <FormHelperText>{helperText}</FormHelperText>
        <Button variant="flat" size="lg" onClick={handleSubmit}>
          Войти
        </Button>
    </div>
  );
}
