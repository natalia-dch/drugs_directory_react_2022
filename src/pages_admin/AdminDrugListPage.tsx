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
import SearchForm from '../components/search/search_form';
import List from '../components/message_list/list';

const myDrugs = [
{ "id": 0, "name": "изониазид"},
{ "id": 1, "name": "рифампицин"},
{ "id": 2, "name": "рифабутин"},
{ "id": 3, "name": "рифапентин"},
{ "id": 4, "name": "пиразинамид"},
{ "id": 5, "name": "этамбутол"},
{ "id": 6, "name": "изониазид"},
    { "id": 7, "name": "рифампицин"},
      { "id": 8, "name": "рифабутин"},
      { "id": 9, "name": "рифапентин"},
      { "id": 10, "name": "пиразинамид"},
      { "id": 11, "name": "этамбутол"}
];

export default function ProcessFeedback() {
const [items, setItems] = React.useState(myDrugs);
const [fItems, setFItems] = React.useState(myDrugs);
const [filterVal, setFilter] = React.useState("");

useEffect(() => {
  filterMessages()
},[items]);

const deleteItem = (id) => {
  console.log("id"+id+"was deleted");
  const newList = items.filter(item => item.id !== id);
setItems(newList);
  // this.props.handleClick(id); //TODO
  // filterMessages();
}

const changeFilter = (value) =>{
  console.log("not yet changed",filterVal)
  setFilter(val);
  console.log("changed",filterVal)
  filterMessages();
}

const filterMessages = () => {
console.log(items);
let filtered = items.filter(item=> item.name
  (!item.isMedic == filterVal[0] || item.isMedic == filterVal[1]) &&
  (!item.isProcessed == filterVal[2] || item.isProcessed == filterVal[3])
)
setFItems(filtered)
}

return(
      <>
      <SearchForm filter={filterVal} changeFilter={changeFilter}/>
      <List items={fItems} name="пользователя" deleteItem={deleteItem} processItem={processItem} composeEmail={composeEmail}/>
      </>)
}
