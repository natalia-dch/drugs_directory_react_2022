// @ts-nocheck
import React, {Component, useState } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { InputAdornment, Input, Card, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";
import Brief from '../contracts'
import List from '../components/basic_list/list';
import ListItem from '../components/basic_list/list_item';
import AddBtn from '../components/basic_list/add_btn';
import RecForm from '../components/dialogs/recForm';

let lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque id nibh tortor id aliquet lectus proin nibh. Vivamus arcu felis bibendum ut tristique. Non odio euismod lacinia at quis risus sed. Ultrices tincidunt arcu non sodales neque sodales. Consequat id porta nibh venenatis cras sed. Porttitor leo a diam sollicitudin tempor id eu. Ultrices gravida dictum fusce ut placerat orci nulla. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Fusce ut placerat orci nulla pellentesque dignissim enim. Pretium nibh ipsum consequat nisl vel pretium. Tincidunt tortor aliquam nulla facilisi cras fermentum. Id faucibus nisl tincidunt eget nullam non nisi est.\n'+
'\n'+
'Neque viverra justo nec ultrices dui. Non arcu risus quis varius quam quisque id. Lobortis mattis aliquam faucibus purus. Ante in nibh mauris cursus mattis molestie a iaculis. Sit amet porttitor eget dolor morbi non. Egestas congue quisque egestas diam in arcu cursus euismod quis. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Nunc sed augue lacus viverra vitae. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar.';

const myRecs =
[
{ "id": 0, "title": "COVID", "text": lorem },
{ "id": 1, "title": "ВИЧ", "text": lorem },
{ "id": 2, "title": "Сахарный диабет 2 типа",  "text": lorem },
{ "id": 3, "title": "Артериальная гипертония", "text": lorem },
{ "id": 4, "title": "Вирусные гепатиты (B,C)", "text": lorem },
];

export default function ChangeRecs() {
  const blankItem = { "id": -2, "title": "", "text": "" };
  const [items, setItems] = React.useState(myRecs);
  const [open, setOpen] = React.useState(false);
  const [sItem, setsItem] = React.useState(blankItem);

 const handleClick = (item, isCreateMode) => {
   console.log("id"+item.name+"was clicked");
    setsItem(item);
    setOpen(true);
  };

  const addNew = () => {
  setOpen(true);
  console.log("new was clicked");
    // this.props.handleClick(id); //TODO
  }

  const changeItem = (newItem) => {
  const newList = items.map((item) => {
  if (item.id === newItem.id) return newItem
  return item;
})
  setItems(newList);
  console.log("item"+newItem+"was changed")
  };

  const addItem = (item) => {
    setItems([...items,item])
    console.log("item"+item+"was added");
  };

  const deleteItem = (id) => {
  setItems(items.filter(item => item.id !== id));
  console.log("id"+index+"was deleted");
    // this.props.handleClick(id); //TODO
  }

  const handleClose = (item,isSuccess) => {
    setOpen(false);
    console.log("closing");
    setsItem(blankItem);
    console.log(item)
    if(isSuccess){
      if(sItem.id == -2){
    addItem(item)
      }
      else{
    changeItem(item)
      }
    }

};

// const createTitle = (item) => {
// return {"title": item.name + " ("+ item.email +") - " + (item.isAdmin? "админ" : "модератор")};
// }

const elems = items.map((item)=>{
        return(
          <ListItem
          key={item.id}
          item={item}
          handleClick={() => handleClick(item)}
          deleteItem={() => deleteItem(item.id)}
          canDeleteItem={!item.isAdmin} />
        )
      })

return(<div className="wrapper">
        <RecForm isOpen={open} item={sItem} handleClose={handleClose}/>
        <AddBtn value={"добавить рекомендацию" } handleClick={addNew}/>
         {elems}
        </div>)
      }
