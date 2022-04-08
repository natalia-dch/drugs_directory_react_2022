// @ts-nocheck
import React, {Component, useState } from 'react';
import Grid from '@mui/material/Grid';
// import './DrugsPage.css';
import Button from '@mui/material/Button';
import { InputAdornment, Input, Card, TextField } from '@mui/material';
import { useNavigate } from "react-router-dom";
import Brief from '../contracts'
import ListItem from '../components/basic_list/list_item';
import AddBtn from '../components/basic_list/add_btn';
import UserForm from '../components/dialogs/userForm';

const myUsers = [
{ "id": 0, "name": "Anna", "email": "aaa@mail.ru", "isAdmin": true},
{ "id": 1, "name": "Olga", "email": "aaa@mail.ru", "isAdmin": false},
{ "id": 2, "name": "Elena", "email": "aaa@mail.ru", "isAdmin": false},
];

export default function AdminList() {
  const blankUser = { "id": -2, "name": "", "email": "", "isAdmin": false};
  const [items, setItems] = React.useState(myUsers);
  const [open, setOpen] = React.useState(false);
  const [sItem, setsItem] = React.useState(blankUser);

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
    setsItem(blankUser);
    if(isSuccess){
      if(sItem.id == -2){
    addItem(item)
      }
      else{
    changeItem(item)
      }
    }

};

const createTitle = (item) => {
return {"title": item.name + " ("+ item.email +") - " + (item.isAdmin? "админ" : "модератор")};
}

const elems = items.map((item)=>{
        return(
          <>
          <ListItem
          item={createTitle(item)}
          handleClick={() => handleClick(item)}
          deleteItem={() => deleteItem(item.id)}
          canDeleteItem={!item.isAdmin} /></>
        )
      })

return(<div className="wrapper">
        <UserForm isOpen={open} item={sItem} handleClose={handleClose}/>
        <AddBtn value={"добавить пользователя" } handleClick={addNew}/>
         {elems}
        </div>)
      }
