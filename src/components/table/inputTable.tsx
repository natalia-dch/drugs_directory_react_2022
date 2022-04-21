// @ts-nocheck
import React, {Component, useState, useEffect} from 'react';
import './table.css';
import Form from "react-bootstrap/Form";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from "react-bootstrap/Button";

function Row(props) {
  const [showAdd, setShowAdd] = useState(false);
  const changeField = (field,value) => {
    let newObject = Object.assign({}, props.object);
    newObject[field] = value;
    props.updateObject(newObject);
  }
  // console.log(props.object);
  const elems = Object.keys(props.object).map((key,index) =>
  {if(key!="id")
  {
    switch(key){
      case "acting_substance":
      return <SubstanceCell key={index} value={props.object[key]} field={key} save={changeField}/>
      case "adult":
      return <PatientCell key={index} value={props.object[key]} field={key} save={changeField}/>
      case "result":
      return <ColorCell key={index} value={props.object[key]} field={key} save={changeField}/>
      case "system":
      return <SystemCell key={index} value={props.object[key]} field={key} save={changeField}/>
      case "effects":
      return <EffectsCell setHelper={props.setHelper} key={index} value={props.object[key]} field={key} save={changeField}/>
      default:
      return <Cell key={index} value={props.object[key]} field={key} save={changeField}/>
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
  return(
    <td>
    <RadioGroup
      aria-labelledby="demo-radio-buttons-group-label"
      value={props.value}
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
  const mapStyles = () => {
    switch(props.value){
      case 0: return "neutralClr";
      case 1: return "badClr";
      case 2: return "goodClr";
  }}

  return(
    <td>
    <RadioGroup
      aria-labelledby="demo-radio-buttons-group-label"
      value={props.value}
      name="radio-buttons-group"
      onChange={(event) => {
        // setInput(event.target.value);
        props.save(props.field,event.target.value)}}
    >
      <FormControlLabel value={0} style={{color: "#07458d"}} control={<Radio />} label="синяя" />
      <FormControlLabel value={1} style={{color: "#ed3541"}} control={<Radio />} label="красная" />
      <FormControlLabel value={2} style={{color: "#1DD3B0"}} control={<Radio />} label="зеленая" />
    </RadioGroup>
    </td>
  )
}

function SystemCell(props) {
return(
  <td>
  <Form.Control
    autoFocus
    type="text"
    value={props.value.system}
    onChange={(e) => props.save(props.field,{  "id": props.value.id, "system": e.target.value,})}
  />
  </td>
)
}

function SubstanceCell(props) {
return(
  <td>
  <Form.Control
    autoFocus
    type="text"
    value={props.value.name}
    onChange={(e) => props.save(props.field,{  "id": props.value.id, "name": e.target.value,})}
  />
  </td>
)
}

function EffectsCell(props) {
const createEffects = (input) => {
  // props.setHelper(""); //TODO wrong split
  let newObjs = input.split(', ').map((e,index)=> {return({"id":null,"effect":e})}) //TODO change id
  return newObjs;
}
return(
  <td>
  <Form.Control
    autoFocus
    type="text"
    value={props.value.map((e)=>" "+e.effect).join(",")}
    onChange={(e) => {
       props.save(props.field,createEffects(e.target.value));
    }}
  />
  </td>
)
}

function Cell(props) {
return(
  <td>
  <Form.Control
    autoFocus
    type="text"
    value={props.value}
 //    onKeyPress={(e) => {
 // if (e.key === 'Enter') {
 //   props.save(props.field,input);
 // }}}
    onChange={(e) => props.save(props.field,e.target.value)}
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
console.log(props.data)
console.log(props.blank)
props.setData([
      ...props.data,
      props.blank[0]
    ]);
console.log(props.data);
}
const deleteRow = (index) => {
console.log("deleting..."+index);
let filteredArray = props.data.filter((item,index1) => index1 !== index)
props.setData(filteredArray);

}

const ddata = props.data.map ((object,id) => {
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
    <thead>
      {props.title &&
        <tr>
        {props.title.map ((el,index) => {
        return(<th key={index} >{el}</th>)
      })}
      </tr>}
      </thead>
      <tbody>
      {ddata}
      </tbody>
    </table>
    {showAdd && <Button onClick={addRow} variant="flat" className="like_table addRowBtn">добавить строку</Button>}
    </div>
  )
}
