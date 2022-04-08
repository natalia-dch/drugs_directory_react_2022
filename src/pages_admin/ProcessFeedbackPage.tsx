// @ts-nocheck
import Brief from '../contracts'
import List from '../components/message_list/list';
import FeedbackFilter from '../components/feedbackFilter/feedback_filter';
import React, {Component, useState } from 'react';

interface IProps {
}

interface IState {
  drugs?: Brief[]; //id, name
}

const myMessages = [
{ "id": 0, "name": "Анна","isMedic": true, "email":"aaa@mail.ru",  "text": "Добрый день! ", isProcessed: false},
{ "id": 1, "name": "Андрей Иванович","isMedic": true,"email":"aaa@mail.ru", "text": "Добрый день! ", isProcessed: false},
{ "id": 2, "name": "Admin","isMedic": true, "email":"aaa@mail.ru", "text": "Добрый день! ", isProcessed: false},
];

export default function ProcessFeedback() {
const [items, setItems] = React.useState(myMessages);
const deleteItem = (id) => {
console.log("id"+item.name+"was deleted");
  // this.props.handleClick(id); //TODO
}
const processItem = (id) => {
console.log("id"+item.name+"was processed");
  // this.props.handleClick(id); //TODO
}
const composeEmail = (id) => {
console.log("composing email");
window.location = "mailto:xyz@yourapplicationdomain.com";
  // this.props.handleClick(id); //TODO
}
const filter = (val1,val2) => {
console.log("filtering");
  // this.props.handleClick(id); //TODO
}

return(
      <>
      <FeedbackFilter filter={filter}/>
      <List items={items} name="пользователя" deleteItem={deleteItem} processItem={processItem} composeEmail={composeEmail}/>
      </>)
}
