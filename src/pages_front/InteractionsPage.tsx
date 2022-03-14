// @ts-nocheck
import React, { Component, useState } from 'react';
import { Interaction } from '../contracts'
import Drugs from './DrugsPage';
import Grid from '@mui/material/Grid';
import { useQuery } from 'react-query';
import axios from 'axios';
import './InteractionPage.css';

const Result = ({ drug, substance }: { drug: number, substance: number }) => {
  const { isLoading, isError, data } = useQuery(['inter', drug, substance], () => axios.get<Interaction[]>(`http://localhost:8080/api/drugs/${drug}/interaction/${substance}`).then(a => a.data), { retry: -1});

    if (isLoading) return (
        <div className="wrapperI">
            <p className="interactions">Загрузка...</p>
        </div>
    )
    if (isError || data.length === 0) {
        return (
            <div className="wrapperI">
                <p className="interactions">Нет информации</p>
            </div>
        )
    }
    else {
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

    return (
        <div className="wrapper">
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <h3>Противотуберкулезные <br /> препараты</h3>
                    <Drugs className="intComp" sItem={drug} handleClick={setDrug} isDrugPage={false} />
                </Grid>
                <Grid item xs={4}>
                    <h3>Сопутствующие <br /> препараты</h3>
                    <Drugs className="intComp" type="acting_substances" sItem={substance} handleClick={setSubstance} isDrugPage={false} />
                </Grid>
                <Grid item xs={4}>
                    <h3>Результат</h3>
                    <Result className="intComp" drug={drug} substance={substance} />
                </Grid>
            </Grid>
        </div>)
}

export default InteractionsPage;
