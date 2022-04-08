// @ts-nocheck
import React, {Component, useState } from 'react';
import Grid from '@mui/material/Grid';
// import './DrugsPage.css';
import Button from '@mui/material/Button';
import { InputAdornment, Input, Card, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";
import Brief from '../contracts'
import List from '../components/basic_list/list';
import slider1 from '../shared/slider1.jpg'
import slider2 from '../shared/slider2.jpg'
import slider3 from '../shared/slider3.jpg'

interface IProps {
}

interface IState {
  drugs?: Brief[]; //id, name
}

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


class ChangeNews extends Component<IProps, IState> {
  constructor(props : IProps) {
  super(props);
    this.state = {
      items: myNews,
      sItem: -1,
    }
    this.handleClick = this.handleClick.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.addNew = this.addNew.bind(this);
  }

handleClick(item) {
console.log("id"+item.name+"was clicked");
  // this.props.handleClick(id); //TODO
}
addNew() {
console.log("new was clicked");
  // this.props.handleClick(id); //TODO
}
deleteItem(id) {
console.log("id"+item.name+"was deleted");
  // this.props.handleClick(id); //TODO
}

  render(){
    return(<List items={this.state.items} handleClick={this.handleClick} addNew={this.addNew} name="новость" deleteItem={this.deleteItem}/>)
  }
}

export default ChangeNews;
