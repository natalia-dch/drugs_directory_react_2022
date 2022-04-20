// @ts-nocheck
import React, { Component, useState } from 'react';
import { Interaction } from '../contracts'
import Drugs from './DrugsPage';
import Grid from '@mui/material/Grid';
import { useQuery } from 'react-query';
import axios from 'axios';
import './InteractionPage.css';
import useMediaQuery from '@mui/material/useMediaQuery';

const Result = ({ drug, substance, setResult, setResultType }: { drug: number, substance: number }) => {
  const { isLoading, isError, data } = useQuery(['inter', drug, substance], () => axios.get<Interaction[]>(`http://localhost:8080/api/drugs/${drug}/interaction/${substance}`).then(a => a.data), { retry: -1});

    if (isLoading) return (
        <div className="wrapperI">
            <p className="interactions">Загрузка...</p>
        </div>
    )
    if (isError || data.length === 0) {
      setResult(true);
      setResultType(0)
        return (
            <div className="wrapperI">
                <p className="interactions">Нет информации</p>
            </div>
        )
    }
    else {
      setResult(true);
      setResultType(1)
      const interaction = data[0];
      console.log(interaction)
        return (
            <div className="wrapperI">
                <h5>Вид взаимодействия</h5>
                <p className="interactions notOverFl">{interaction.kind_of_interaction}</p>
                <h5>Клиническое последствие</h5>
                <p className="interactions notOverFl">{interaction.clinical_consequence}</p>
            </div>
        )
    }
}

const InteractionsPage = () => {
    const [drug, setDrug] = useState(-1);
    const [substance, setSubstance] = useState(-1);
    const [resultType, setResultType] = useState(0);
    const [haveResult, setResult] = useState(false);
    const isMedium = useMediaQuery('(max-width:850px)');
    const isMobile = useMediaQuery('(max-width:600px)');

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
        <Result className="intComp" drug={drug} setResult = {setResult} setResultType = {setResultType} substance={substance} />
      </Grid>)
    const resultOnTop = isMedium && haveResult;
    return(
      <div className="wrapper">
      <Grid container spacing={isMedium? 0 : 2}>
      {resultOnTop && result}
      <Grid item xs={isMedium? 6 : 4}>
         <h3 className="trunkatedHeader drugChooserHeader">Противотуберкулезные <br/> препараты</h3>
         <Drugs className="intComp" sItem={drug} handleClick={setDrug} isDrugPage={false}/>
      </Grid>
      <Grid item xs={isMedium? 6 : 4}>
         <h3 className="drugChooserHeader">Сопутствующие <br/> препараты</h3>
         <Drugs className="intComp" type="acting_substances" sItem={substance} handleClick={setSubstance} isDrugPage={false}/>
      </Grid>
      {!resultOnTop && result}
      </Grid>
        </div>)
}

export default InteractionsPage;
