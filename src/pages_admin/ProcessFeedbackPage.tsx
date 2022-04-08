// @ts-nocheck
import Brief from '../contracts'
import List from '../components/message_list/list';
import FeedbackFilter from '../components/feedbackFilter/feedback_filter';
import React, {Component, useState, useEffect } from 'react';

interface IProps {
}

interface IState {
  drugs?: Brief[]; //id, name
}

const myMessages = [
{ "id": 0, "name": "Анна","isMedic": true, "email":"aaa@mail.ru",  "text": "Добрый день! ", isProcessed: false},
{ "id": 1, "name": "Андрей Иванович","isMedic": false,"email":"aaa@mail.ru", "text": "Добрый день! ", isProcessed: false},
{ "id": 2, "name": "Admin","isMedic": true, "email":"aaa@mail.ru", "text": "Добрый день! ", isProcessed: false},
];

export default function ProcessFeedback() {
const [items, setItems] = React.useState(myMessages);
const [fItems, setFItems] = React.useState(myMessages);
const [filterVal, setFilter] = React.useState([true,true,true,true]);

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

const changeFilter = (n,value) =>{
  console.log("not yet changed",filterVal)
  filterVal[n]=value;
console.log("changed",filterVal)
filterMessages();
}

const processItem = (id) => {
console.log("id"+id+"was processed");
const newList = items.map((item) => {
if (item.id === id) {item.isProcessed = !item.isProcessed; return item;}
return item;
})
setItems(newList);
// filterMessages()
  // this.props.handleClick(id); //TODO
}
const composeEmail = (id) => {
console.log("composing email");
window.location = "mailto:xyz@yourapplicationdomain.com";
  // this.props.handleClick(id); //TODO
}
const filterMessages = () => {
console.log(items);
let filtered = items.filter(item=>
  (!item.isMedic == filterVal[0] || item.isMedic == filterVal[1]) &&
  (!item.isProcessed == filterVal[2] || item.isProcessed == filterVal[3])
)
setFItems(filtered)
}

return(
      <>
      <FeedbackFilter filter={filterVal} changeFilter={changeFilter}/>
      <List items={fItems} name="пользователя" deleteItem={deleteItem} processItem={processItem} composeEmail={composeEmail}/>
      </>)
}
