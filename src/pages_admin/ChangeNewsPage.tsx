// @ts-nocheck
import slider1 from '../shared/slider1.jpg'
import slider2 from '../shared/slider2.jpg'
import slider3 from '../shared/slider3.jpg'
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
import NewsForm from '../components/dialogs/newsForm';

let lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque id nibh tortor id aliquet lectus proin nibh. Vivamus arcu felis bibendum ut tristique. Non odio euismod lacinia at quis risus sed. Ultrices tincidunt arcu non sodales neque sodales. Consequat id porta nibh venenatis cras sed. Porttitor leo a diam sollicitudin tempor id eu. Ultrices gravida dictum fusce ut placerat orci nulla. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Fusce ut placerat orci nulla pellentesque dignissim enim. Pretium nibh ipsum consequat nisl vel pretium. Tincidunt tortor aliquam nulla facilisi cras fermentum. Id faucibus nisl tincidunt eget nullam non nisi est.\n'+
'\n'+
'Neque viverra justo nec ultrices dui. Non arcu risus quis varius quam quisque id. Lobortis mattis aliquam faucibus purus. Ante in nibh mauris cursus mattis molestie a iaculis. Sit amet porttitor eget dolor morbi non. Egestas congue quisque egestas diam in arcu cursus euismod quis. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Nunc sed augue lacus viverra vitae. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar.';

const myNews =
[
{ "id": 0, "title": "Title", "src": slider1, "text": lorem },
{ "id": 1, "title": "Title", "src": slider2, "text": lorem },
{ "id": 2, "title": "Title", "src": slider3, "text": lorem },
{ "id": 3, "title": "Title", "src": slider1, "text": lorem },
{ "id": 4, "title": "Title", "src": slider2, "text": lorem },
{ "id": 5, "title": "Title", "src": slider3, "text": lorem }
];

export default function ChangeRecs() {
  const blankItem = { "id": -2, "title": "","src": "", "text": "" };
  const [items, setItems] = React.useState(myNews);
  const [open, setOpen] = React.useState(false);
  const [sItem, setsItem] = React.useState(blankItem);

 const handleClick = (item, isCreateMode) => {
   console.log("id"+item.name+"was clicked");
    setsItem(item);
    setOpen(true);
  };

  const addNew = () => {
  setsItem(blankItem);
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
          <>
          <ListItem
          item={item}
          handleClick={() => handleClick(item)}
          deleteItem={() => deleteItem(item.id)}
          canDeleteItem={true} /></>
        )
      })

return(<div className="wrapper">
        <NewsForm isOpen={open} item={sItem} handleClose={handleClose}/>
        <AddBtn value={"добавить новость" } handleClick={addNew}/>
         {elems}
        </div>)
      }
