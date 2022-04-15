// @ts-nocheck
import React, {Component, useState } from 'react';
import Grid from '@mui/material/Grid';
import './DrugsPage.css';
import Button from '@mui/material/Button';
import { InputAdornment, Input, Card, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";
import Brief from '../contracts'


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

function BriefCard(props) {
    const navigate = useNavigate();
    return(
      <div key={props.item.id} className="bigCard">
      <div className="drugCard" onClick={() => {
        console.log(props.item.id);
        props.handleClick(props.item.id);
        if(props.item.id!=-1){
          if(props.isDrugPage){
            navigate(`/drugs/${props.item.id}`);//props.item.id to={`/users/${user.id}`}
          }
    }
  }} >
      <p className={props.isBold?"boldName notOverFl":"notOverFl"}>{props.item.name}</p>
      </div>
      <hr/>
      </div>
    )
}

class Drugs extends Component<IProps, IState> {
  constructor(props : IProps) {
  super(props);
    this.state = {
      drugs: [],
      input: "",
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.handleDrugClick = this.handleDrugClick.bind(this);
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
    const elems = this.state.drugs.map((item)=>{
      return(
        <BriefCard isBold={!this.props.isDrugPage && this.props.sItem!=-1 && this.props.sItem==item.id }
        item={item}
        isDrugPage={this.props.isDrugPage}
        handleClick={() => this.handleDrugClick(item.id)} />
      )
    })
    return(<div className={this.props.isDrugPage?"wrapper":"wrapperSL"}>
    <TextField className="drugInput"
    onKeyPress={(e) => {
 if (e.key === 'Enter') {
   this.handleSearch(e.target.value);
 }}}
       id="input-with-icon-adornment"
       value={this.state.input}
       onChange={(e) =>
         this.setState({
           input : e.target.value,
         })
       }
      label="поиск по названию" variant="standard"
       InputProps={{
   startAdornment: (
     <InputAdornment position="start">
                  <SearchIcon />
     </InputAdornment>
   ),
 }}/>
       {elems}
      </div>)
  }
}

export default Drugs;
