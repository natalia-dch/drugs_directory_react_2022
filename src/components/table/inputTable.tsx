// @ts-nocheck
import React, {Component, useState} from 'react';
import './table.css';
import Form from "react-bootstrap/Form";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from "react-bootstrap/Button";

function Row(props) {
  const [object, setObject] = useState(props.object); //object
  const [showAdd, setShowAdd] = useState(false);
  const changeField = (field,value) => {
    let newObject = Object.assign({}, object);
    newObject[field] = value;
    setObject(newObject);
props.updateObject(newObject);
  }

  const elems = Object.keys(object).map((key,index) =>
  {if(key!="id")
  {
    switch(key){
      case "adult":
      return <PatientCell key={index} value={object[key]} field={key} save={changeField}/>
      case "result":
      return <ColorCell key={index} value={object[key]} field={key} save={changeField}/>
      case "system":
      return <SystemCell key={index} value={object[key]} field={key} save={changeField}/>
      case "effects":
      return <EffectsCell setHelper={props.setHelper} key={index} value={object[key]} field={key} save={changeField}/>
      default:
      return <Cell key={index} value={object[key]} field={key} save={changeField}/>
    }
    }}
);
return(<tr className="parentRow"
  onMouseEnter={() => setShowAdd(true)}
  onMouseLeave={() => setShowAdd(false)}
  >{elems}
    {showAdd && <Button className="deleteRowBtn" onClick={props.deleteRow} variant="flat">удалить строку</Button>}
  </tr>)
}

function PatientCell(props) {
  const [input, setInput] = useState(props.value);
  return(
    <td>
    <RadioGroup
      aria-labelledby="demo-radio-buttons-group-label"
      defaultValue={input}
      name="radio-buttons-group"
      onChange={(event) => {props.save(props.field,event.target.value)}}
    >
      <FormControlLabel value={true} control={<Radio />} label="взрослый" />
      <FormControlLabel value={false} control={<Radio />} label="ребенок" />
    </RadioGroup>
    </td>
  )
}

function ColorCell(props) {
  console.log("i got" + props.value)
  const [input, setInput] = useState(props.value);
  const mapStyles = (input) => {
    switch(input){
      case 0:     console.log("neutralClr"); return "neutralClr";
      case 1: console.log("badClr"); return "badClr";
      case 2: console.log("goodClr"); return "goodClr";
  }}
  const [style, setStyle] = useState(mapStyles(props.value));


  return(
    <td>
    <RadioGroup
      aria-labelledby="demo-radio-buttons-group-label"
      value={input}
      name="radio-buttons-group"
      onChange={(event) => {
        setInput(event.target.value); props.save(props.field,event.target.value)}}
    >
      <FormControlLabel value={0} style={{color: "#07458d"}} control={<Radio />} label="синяя" />
      <FormControlLabel value={1} style={{color: "#ed3541"}} control={<Radio />} label="красная" />
      <FormControlLabel value={2} style={{color: "#1DD3B0"}} control={<Radio />} label="зеленая" />
    </RadioGroup>
    </td>
  )
}

function SystemCell(props) {
  const [input, setInput] = useState(props.value);
return(
  <td>
  <Form.Control
    autoFocus
    type="text"
    value={input.system}
    onKeyPress={(e) => {
 if (e.key === 'Enter') {
   props.save(props.field,{  "id": props.value.id, "system": input});
 }}}
    onChange={(e) => setInput(e.target.value)}
  />
  </td>
)
}
function EffectsCell(props) {
const [effects, setEffects] = useState(props.value);
const [input, setInput] = useState(props.value.map((e)=>" "+e.effect).join(","));
const createEffects = () => {
  // props.setHelper(""); //TODO wrong split
  let newObjs = input.split(', ').map((e,index)=> {return({"id":0,"effect":e})}) //TODO change id
  return newObjs;
}
return(
  <td>
  <Form.Control
    autoFocus
    type="text"
    value={input}
    onKeyPress={(e) => {
 if (e.key === 'Enter') {
   createEffects();
    props.save(props.field,createEffects());
 }}}
    onChange={(e) => setInput(e.target.value)}
  />
  </td>
)
}

function Cell(props) {
  const [input, setInput] = useState(props.value);
return(
  <td>
  <Form.Control
    autoFocus
    type="text"
    value={input}
    onKeyPress={(e) => {
 if (e.key === 'Enter') {
   props.save(props.field,input);
 }}}
    onChange={(e) => setInput(e.target.value)}
  />
  </td>
)
}



export default function InputTable(props) {
const [showAdd, setShowAdd] = useState(false);
const changeData = (id,value) => {
  console.log(value);
  props.setData([
        ...props.data.slice(0, id),
        value,
        ...props.data.slice(id+1)
      ]);
}
const addRow = () => {
alert("row added");
}
const deleteRow = (index) => {
alert("row deleted"+index);
}

const data = props.data.map ((object,id) => {
  if(props.setHelper)
  return(<Row deleteRow={()=>deleteRow(id)} setHelper={props.setHelper} key={id} object={object} updateObject={(v)=>changeData(id,v)}/>)
    else
  return(<Row deleteRow={()=>deleteRow(id)} key={id} object={object} updateObject={(v)=>changeData(id,v)}/>)
})


  return(
    <div
    onMouseEnter={() => setShowAdd(true)}
    onMouseLeave={() => setShowAdd(false)}
    >
    <table >
      {props.title &&
        <tr>
        {props.title.map ((el,index) => {
        return(<th key={index} >{el}</th>)
      })}
      </tr>}
      {data}
    </table>
    {showAdd && <Button onClick={addRow} variant="flat" className="like_table addRowBtn">добавить строку</Button>}
    </div>
  )
}
