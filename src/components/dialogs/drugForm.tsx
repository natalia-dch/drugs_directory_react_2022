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

let lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque id nibh tortor id aliquet lectus proin nibh. Vivamus arcu felis bibendum ut tristique. Non odio euismod lacinia at quis risus sed. Ultrices tincidunt arcu non sodales neque sodales. Consequat id porta nibh venenatis cras sed. Porttitor leo a diam sollicitudin tempor id eu. Ultrices gravida dictum fusce ut placerat orci nulla. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Fusce ut placerat orci nulla pellentesque dignissim enim. Pretium nibh ipsum consequat nisl vel pretium. Tincidunt tortor aliquam nulla facilisi cras fermentum. Id faucibus nisl tincidunt eget nullam non nisi est.\n'+
'\n'+
'Neque viverra justo nec ultrices dui. Non arcu risus quis varius quam quisque id. Lobortis mattis aliquam faucibus purus. Ante in nibh mauris cursus mattis molestie a iaculis. Sit amet porttitor eget dolor morbi non. Egestas congue quisque egestas diam in arcu cursus euismod quis. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Nunc sed augue lacus viverra vitae. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar.';
let pk = "Является пролекарством и активизируется микобактериальной каталазой. Механизм действия связан с угнетением синтеза миколевой кислоты в клеточной стенке M.tuberculosis. Изониазид оказывает бактерицидное действие на микобактерии в стадии размножения и бактериостатическое - в стадии покоя. При монотерапии изониазидом к нему быстро (в 70% случаев) развивается устойчивость."
let c = "Индивидуальная непереносимость препарата.\nЭпилепсия.\nТяжелые психозы.\nСклонность к судорожным припадкам.\nПолиомиелит в анамнезе.\nТоксический гепатит в анамнезе вследствие приема препаратов ГИНК.\nОстрая печеночная и почечная недостаточность."
let role = "Лечение и профилактика туберкулеза различной локализации у взрослых и детей."+
"\nДлительность приема не ограничена."
let myDrug =
{
  "id": 0,
  "first_line": true,
  "inp_name": "этамбутол",
  "trade_names": [
  {"id": 0,
  "trade_name": "Этамбутол-Эдвансд",
  "pharm_form": "таблетки"},
  {"id": 1,
  "trade_name": "Этамбутол",
  "pharm_form": "таблетки"}
],
  "pharm_dynamics": pk,
  "pharm_kinetics": [{
  "id": 0,
  "name": "Адсорбция из ЖКТ",
  "value": "Быстрая и полная, снижается при приеме пищи"
},
{
  "id": 1,
  "name": "Биодоступность, %",
  "value": "80-90"
},
{
  "id": 2,
  "name": "Связь с белками плазмы крови, %",
  "value": "До 10"
},
{
  "id": 3,
  "name": "Биотрансформация",
  "value": "В печени путем ацетилирования до неактивных продуктов"
},
{
  "id": 4,
  "name": "Проникновение через ГЭБ",
  "value": "хорошее"
},
{
  "id": 5,
  "name": "Т1/2,ч",
  "value": "2-3"
}],
  "side_effects": [{
  id: 0,
  effects: [{
"id": 0,
"effect": "тошнота",
},{
"id": 0,
"effect": "рвота",
}],
  system: {  "id": 0, "system": "Со стороны ЖКТ"}
},
{
id: 0,
effects: [{
"id": 0,
"effect": "гинекомастия дисменорея у женщин",
},{
"id": 0,
"effect": "«кушингоид»",
}],
system: {  "id": 0, "system": "Со стороны эндокринной системы"}
},{
id: 0,
effects: [{
"id": 0,
"effect": "головная боль",
},{
"id": 0,
"effect": "головокружения",
}],
system: {  "id": 0, "system": "Со стороны ЦНС"}
}],
  "contraindications": c,
  "role_in_treatment": role,
  "dosages": [{
  "id": 0,
  "adult": true,
  "pharm_form": "Табл. 0,1г; 0,2г; 0,3г.",
  "daily_dose": "4-6 мг/кг",
  "max_daily_dose": "600мг"
},{
  "id": 1,
  "adult": true,
  "pharm_form": "Раствор для инъекций, 100 мг/мл, по 5 мл.",
  "daily_dose": "10-15мг/кг",
  "max_daily_dose": "200-300 мг",
}],
  "foodInfo": {
  "recommendations": "string",
    "comment": lorem }
}

export default function DrugForm(props) {
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
