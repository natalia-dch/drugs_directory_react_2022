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
import FormDrug from './FormDrugPage';

export default function DrugPage () {
  //get Drug
  const navigate = useNavigate();
  const { drugId } = useParams();
  const { isLoading, isError, data: drug } = useQuery(['drug', drugId], () => axios.get<Drug>(`http://localhost:8080/api/drugs/${drugId}`).then(v => v.data));
  // if (isLoading) return "Loading...";
  // if (isError) return "Error";
  console.log(`http://localhost:8080/api/drugs/`+drugId);
  const saveDrug = (drug) => {
    axios.put<Drug>(`http://localhost:8080/api/drugs`,drug).then(function (response) {
 console.log(response);
 props.flag();
})
.catch(function (error) {
 console.log(error);
});
       console.log("updatedDrug"); //TODO
       navigate(`/admin/drugs`);
  }
  const addNewDrug = (drug) => {
    console.log(drug);
       axios.post<Drug>(`http://localhost:8080/api/drugs`,drug).then(function (response) {
    console.log(response);
    props.flag();
  })
  .catch(function (error) {
    console.log(error);
  });
       console.log("addedNewDrug"); //TODO
       navigate(`/admin/drugs`);
  }
// if (isLoading || drug)
if (isLoading && drugId != -1)
  return <p>Загрузка</p>
else
  return(  <FormDrug drugId={drugId} saveDrug={saveDrug} addNewDrug={addNewDrug} drug={isError ? null : drug}/>)
  }
