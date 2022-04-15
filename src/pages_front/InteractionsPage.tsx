// @ts-nocheck
import React, {Component, useState } from 'react';
import Interactions from '../contracts'
import Drugs from './DrugsPage';
import Grid from '@mui/material/Grid';
import './InteractionPage.css';
import useMediaQuery from '@mui/material/useMediaQuery';

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque id nibh tortor id aliquet lectus proin nibh. Vivamus arcu felis bibendum ut tristique. Non odio euismod lacinia at quis risus sed. Ultrices tincidunt arcu non sodales neque sodales. Consequat id porta nibh venenatis cras sed. Porttitor leo a diam sollicitudin tempor id eu. Ultrices gravida dictum fusce ut placerat orci nulla. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Fusce ut placerat orci nulla pellentesque dignissim enim. Pretium nibh ipsum consequat nisl vel pretium. Tincidunt tortor aliquam nulla facilisi cras fermentum. Id faucibus nisl tincidunt eget nullam non nisi est.\n'+
'\n'+
'Neque viverra justo nec ultrices dui. Non arcu risus quis varius quam quisque id. Lobortis mattis aliquam faucibus purus. Ante in nibh mauris cursus mattis molestie a iaculis. Sit amet porttitor eget dolor morbi non. Egestas congue quisque egestas diam in arcu cursus euismod quis. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Nunc sed augue lacus viverra vitae. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar.';

const myInteractions = [
  {
    "id": 0,
    "acting_substance": { "id": 0, "name": "изониазид"},
    "kind_of_interaction": "Повышение риска ототоксичности, нефротоксичности, нервно-мышечной блокады.",
    "clinical_consequence": "Совместное применение не рекомендуется",
    "result":1
  },
  {
    "id": 0,
    "acting_substance": { "id": 0, "name": "изониазид"},
    "kind_of_interaction": "Рифампицин вызывает индукцию изоферментов цитохрома P450, ускоряя их метаболизм",
    "clinical_consequence": "Следует уделять повышенное внимание коррекции гипогликемической терапии",
    "result":2
  },
  {
    "id": 0,
    "acting_substance": { "id": 0, "name": "изониазид"},
    "kind_of_interaction": "",
    "clinical_consequence": "",
    "result":0
  }
]

function Result(props) {
    let res = Math.floor(Math.random() * 3); //TODO
    let isBadResult = true;
    let interaction = null;
    if(props.drug!=-1 && props.substance!=-1){
      //get interaction
      interaction = myInteractions[res];
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
    props.setResult(true);
    props.setResultType(interaction.result)
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

export default function InteractionsPage (props) {
  const isMedium = useMediaQuery('(max-width:850px)');
  const isMobile = useMediaQuery('(max-width:600px)');
  const [drug, setDrug] = useState(-1)
  const [substance, setSubstance] = useState(-1)
  const [haveResult, setResult] = useState(false);
  const [resultType, setResultType] = useState(0);
  const chooseDrug = (id) => {setDrug(id)};
  const chooseSubstance = (id) => {setSubstance(id)};
  const getStyling = (resType) => {
  switch (resType) {
  case 0:
    return "resultHeader neutralResult";
  case 1:
  return "resultHeader badResult";
  case 2:
  return "resultHeader goodResult";
}
  }
  const result = (
    <Grid item xs={isMedium? 12 : 4}>
      <h3
      className={getStyling(resultType)}
      >Результат<br/>&nbsp;</h3>
       <Result setResult = {setResult} setResultType = {setResultType} className="intComp" drug={drug} substance={substance}/>
    </Grid>)
  const resultOnTop = isMedium && haveResult;
  return(
    <div className="wrapper">
    <Grid container spacing={isMedium? 0 : 2}>
    {resultOnTop && result}
    <Grid item xs={isMedium? 6 : 4}>
       <h3 className="trunkatedHeader drugChooserHeader">Противотуберкулезные <br/> препараты</h3>
       <Drugs className="intComp" sItem={drug} handleClick={chooseDrug} isDrugPage={false}/>
    </Grid>
    <Grid item xs={isMedium? 6 : 4}>
       <h3 className="drugChooserHeader">Сопутствующие <br/> препараты</h3>
       <Drugs className="intComp" sItem={substance} handleClick={chooseSubstance} isDrugPage={false}/>
    </Grid>
    {!resultOnTop && result}
    </Grid>
      </div>)
  }
