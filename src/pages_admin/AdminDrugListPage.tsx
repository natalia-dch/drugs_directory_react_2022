// @ts-nocheck
import React, {Component, useState } from 'react';
import Grid from '@mui/material/Grid';
// import './DrugsPage.css';

import { useNavigate } from "react-router-dom";
import Brief from '../contracts'
import List from '../components/basic_list/list';
import SearchForm from '../components/search/search_form';


interface IProps {
}

interface IState {
  drugs?: Brief[]; //id, name
}

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

function AddCard(props) {
    const navigate = useNavigate();
    return(
      <div key={props.item.id} className="bigCard">
      <div className="drugCard" onClick={() => {
        props.handleClick(props.item.id);
        if(props.item.id!=-1){
          if(props.isDrugPage){
            navigate('admin/drugs/' + props.item.id);
          }
    }
  }} >
      <p className={props.isBold?"boldName notOverFl":"notOverFl"}>{props.item.name}</p>
      </div>
      <hr/>
      </div>
    )
}

function BriefCard(props) {
    const navigate = useNavigate();
    return(
      <div key={props.item.id} className="bigCard">
      <div className="drugCard" onClick={() => {
        props.handleClick(props.item.id);
        if(props.item.id!=-1){
          if(props.isDrugPage){
            navigate("/drug");
          }
    }
  }} >
      <p className={props.isBold?"boldName notOverFl":"notOverFl"}>{props.item.name}</p>
      </div>
      <hr/>
      </div>
    )
}

class AdminDrugList extends Component<IProps, IState> {
  constructor(props : IProps) {
  super(props);
    this.state = {
      items: myDrugs,
      input: "",
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.handleDrugClick = this.handleDrugClick.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.addNew = this.addNew.bind(this);
  }

componentDidMount() {
  this.handleSearch("");
  }

handleDrugClick(id) {
console.log("id"+id+"was clicked");
if(id==-1){
this.setState({
    input : "",
  })
this.handleSearch("");
}
else{
  this.props.handleClick(id);
}
}
addNew() {
console.log("new was clicked");
  // this.props.handleClick(id); //TODO
}
deleteItem(id) {
console.log("id"+item.name+"was deleted");
  // this.props.handleClick(id); //TODO
}

handleSearch(value) {
       // let value = this.state.input;
       console.log(value)
       let result = []
       if(value=="")
       //TODO ask for all drugs
        {
          this.props.handleClick(-1); //remove bold ???
          console.log("asking for all drugs")
          result=myDrugs
        }
      else
      //TODO ask for specific ones
      {
        console.log("asking for specific drugs")
        result = []
      }
       //get result
       if(result.length==0){
      this.props.handleClick(-1); //remove bold ???
      console.log("got nothing");
       this.setState({
         drugs: [{ "id": -1, "name": "ничего не найдено.\n сбросить фильтрацию?"}],
       })
     }
       else{
      console.log("got"+result)
      //change state
      this.setState({
        drugs: result,
      });}
    }

render(){
return(
<div className={this.props.isDrugPage?"wrapper":"wrapperSL"}>
<SearchForm
input={this.state.input}
handleChange={(value) =>  this.setState({  input : value,  })}
handleSearch={this.handleSearch}
/>
<List items={this.state.items} handleClick={this.handleClick} addNew={this.addNew} name="лекарство" deleteItem={this.deleteItem}/>
</div>)
  }
}

export default AdminDrugList;
