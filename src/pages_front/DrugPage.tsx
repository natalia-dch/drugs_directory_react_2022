// @ts-nocheck
import React, {Component, useState} from 'react';
import {
  useParams,
} from 'react-router-dom';
import Drug from '../contracts'
import './DrugPage.css';
import Table from '../components/table/table';
import { useQuery } from 'react-query';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function DrugPage () {
  //get Drug
  const navigate = useNavigate();
  const { drugId } = useParams();
  const { isLoading, isError, data: drug } = useQuery(['drug', drugId], () => axios.get<Drug>(`http://localhost:8080/api/drugs/${drugId}`).then(v => v.data));
  if (isLoading) return "Loading...";
  if (isError) return "Error";
  console.log(drug);
  let tradenames = drug.trade_names.map((tn)=>[tn.trade_name,tn.pharm_form])
  let pharm_kinetics = drug.pharm_kinetics.map((e)=>[e.name,e.value]);
  let side_effects = drug.side_effects.map((s)=>[s.system.system,s.effects.map((e)=>e.effect+", ")]);
  let dosages = drug.dosages.map((s)=>{
  let isAdult = s.adult?"взрослый":"ребенок";
    return([s.pharm_form,isAdult,s.daily_dose,s.max_daily_dose]);
  });
  let interactions = drug.interactions.map((i)=>[i.acting_substance.name,i.kind_of_interaction,i.clinical_consequence])
  return(<div className="DrugWrapper wrapper">
  <h2>{drug.inp_name}</h2>
  <p className="drugH">{drug.first_line?"препарат первого ряда":"препарат второго ряда"}</p>
  <h5 className="drugH">Торговые наименования и форма выпуска:</h5>
  <Table title={["торговые наименования","форма выпуска"]} data={tradenames} />
  <h5 className="drugH">Фармакодинамика:</h5>
  <p className="drugH" dangerouslySetInnerHTML={{__html: drug.pharm_dynamics}} />
  <h5 className="drugH">Фармакокинетика:</h5>
  <Table data={pharm_kinetics} />
  <h5 className="drugH">Побочные эффекты:</h5>
    <Table title={["система","эффект"]} data={side_effects} />
    <h5 className="drugH">Противопоказания:</h5>
    <p className="drugH">{drug.contraindications}</p>
    <h5 className="drugH">Место в лечении туберкулеза:</h5>
    <p className="drugH">{drug.role_in_treatment}</p>
    <h5 className="drugH">Дозы:</h5>
    <Table title={["лекарственная форма","тип пациента","сут. доза","макс. сут. доза"]} data={dosages} />
    <h5 className="drugH">Лекарственные взаимодействия:</h5>
    <Table title={["действующее вещество","вид взаимодействия","клиническое последствие"]} data={interactions} />

    </div>)
  }

    // let request = '/api/drugs/'+this.props.id;
    // axios.get(request)
    //   .then(res => {
    // const result = res.data;
    // console.log(result)
    // this.setState({
    //   drug: result,
    // })});
