import React, {Component} from 'react';
import Interactions from '../contracts'
import Drugs from './DrugsPage';
import Grid from '@mui/material/Grid';
import './InteractionPage.css';

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque id nibh tortor id aliquet lectus proin nibh. Vivamus arcu felis bibendum ut tristique. Non odio euismod lacinia at quis risus sed. Ultrices tincidunt arcu non sodales neque sodales. Consequat id porta nibh venenatis cras sed. Porttitor leo a diam sollicitudin tempor id eu. Ultrices gravida dictum fusce ut placerat orci nulla. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Fusce ut placerat orci nulla pellentesque dignissim enim. Pretium nibh ipsum consequat nisl vel pretium. Tincidunt tortor aliquam nulla facilisi cras fermentum. Id faucibus nisl tincidunt eget nullam non nisi est.\n'+
'\n'+
'Neque viverra justo nec ultrices dui. Non arcu risus quis varius quam quisque id. Lobortis mattis aliquam faucibus purus. Ante in nibh mauris cursus mattis molestie a iaculis. Sit amet porttitor eget dolor morbi non. Egestas congue quisque egestas diam in arcu cursus euismod quis. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Nunc sed augue lacus viverra vitae. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar.';

const myInteraction = {
  "id": 0,
  "acting_substance": { "id": 0, "name": "изониазид"},
  "kind_of_interaction": lorem,
  "clinical_consequence": lorem,
}

function Result(props) {
    let isBadResult = true;
    let interaction = null;
    if(props.drug!=-1 && props.substance!=-1){
      //get interaction
      interaction = myInteraction;
      isBadResult = false;
    }
    if(isBadResult){
      return(
        <div  className="wrapperI">
        <p className="interactions">Нет информации</p>
        </div>
      )
    }
    else{
    return(
      <div  className="wrapperI">
      <h5>Вид взаимодействия</h5>
      <p className="interactions notOverFl">{interaction.kind_of_interaction}</p>
      <h5>Клиническое последствие</h5>
      <p className="interactions notOverFl">{interaction.clinical_consequence}</p>
      </div>
    )
  }
}

class InteractionsPage extends Component {
  constructor(props) {
  super(props);
  this.state = {
      drug: -1,
      substance: -1,
    }
    this.chooseDrug = this.chooseDrug.bind(this);
    this.chooseSubstance = this.chooseSubstance.bind(this);
  }
  chooseDrug(id) {
        // if(id!=-1)
        // {
          this.setState({
          drug: id,
        });
      // }
      }
  chooseSubstance(id) {
            // if(id!=-1)
            // {
              this.setState({
              substance: id,
            });
          }
          // }
  render(){
    return(
    <div className="wrapper">
    <Grid container spacing={2}>
    <Grid item xs={4}>
       <h3>Противотуберкулезные <br/> препараты</h3>
       <Drugs className="intComp" sItem={this.state.drug} handleClick={this.chooseDrug} isDrugPage={false}/>
    </Grid>
    <Grid item xs={4}>
       <h3>Сопутствующие <br/> препараты</h3>
       <Drugs className="intComp" sItem={this.state.substance} handleClick={this.chooseSubstance} isDrugPage={false}/>
    </Grid>
    <Grid item xs={4}>
      <h3>Результат</h3>
       <Result className="intComp" drug={this.state.drug} substance={this.state.substance}/>
    </Grid>
    </Grid>
      </div>)
  }
}

export default InteractionsPage;
