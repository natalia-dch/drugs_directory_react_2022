// @ts-nocheck
import React, { Component } from 'react';
import { Drug } from '../contracts'
import { useQuery } from 'react-query';
import axios from 'axios'
import './DrugPage.css';

interface Props {
    id: number
}

const DrugPage = ({ id }) => {
    const { isLoading, isError, data: drug } = useQuery(['drug', id], () => axios.get<Drug>(`http://localhost:8080/api/drugs/${id}`).then(v => v.data));

    if (isLoading) return "Loading...";
    if (isError) return "Error";

    let tradenames = drug.trade_names.map((tn) => {
        return (tn.trade_name + " : " + tn.pharm_form + ",\n");
    });
    let pharm_kinetics = drug.pharm_kinetics.map((e) => {
        return (e.name + " : " + e.value + ",\n");
    });
    let side_effects = drug.side_effects.map((s) => {
        return (s.system.system + " : " + s.effects.map((e) => e.effect) + ", \n");
    });

    let dosages = drug.dosages.map((s) => {
        let isAdult = s.adult ? "для взрослых" : "для детей";
        return (s.pharm_form + "(" + isAdult + "):" + "\nдневная доза: " + s.daily_dose + ",\nмаксимальная доза: " + s.max_daily_dose + ",\n\n");
    });
    return (<div className="DrugWrapper wrapper">
        <h2>{drug.inp_name}</h2>
        <p className="drugH">{drug.first_line ? "препарат первого ряда" : "препарат второго ряда"}</p>
        <h5 className="drugH">Торговые наименования и форма выпуска:</h5>
        <p className="drugH">{tradenames}</p>
        <h5 className="drugH">Фармакодинамика:</h5>
        <p className="drugH">{drug.pharm_dynamics}</p>
        <h5 className="drugH">Фармакокинетика:</h5>
        <p className="drugH">{pharm_kinetics}</p>
        <h5 className="drugH">Побочные эффекты:</h5>
        <p className="drugH">{side_effects}</p>
        <h5 className="drugH">Противопоказания:</h5>
        <p className="drugH">{drug.contraindications}</p>
        <h5 className="drugH">Место в лечении туберкулеза:</h5>
        <p className="drugH">{drug.role_in_treatment}</p>
        <h5 className="drugH">Дозы:</h5>
        <p className="drugH">{dosages}</p>
    </div>)
}

export default DrugPage;
