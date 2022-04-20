// @ts-nocheck
import React, {Component, useState, useEffect} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {
  useParams,
} from 'react-router-dom';
import Drug from '../contracts'
import './DrugPage.css';
import Table from '../components/table/table';
import InputTable from '../components/table/inputTable';
import ReactQuill from 'react-quill';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useQuery } from 'react-query';


const blankDrug =
{
  "id": null,
  "first_line": true,
  "inp_name": "",
  "trade_names": [{"id": null, "trade_name": "","pharm_form": ""}],
  "pharm_dynamics": "",
  "pharm_kinetics": [{"id": null,"name": "","value": ""}],
  "side_effects": [{id: null,
  effects: [{"id": null,"effect": ""}],
  system: {  "id": null, "system": ""}}],
  "contraindications": "",
  "role_in_treatment": "",
  "dosages": [{"id": null, "adult": true, "pharm_form": "", "daily_dose": "", "max_daily_dose": ""}],
  "foodInfo": {  "recommendations": "", "comment": ""},
  "interactions": [
    {"id":null,"acting_substance":{"id":null,"name":""}, "kind_of_interaction":"","clinical_consequence":""}
],
"pregnancy_info": {
  fda_category: '',
  usage: '',
  additional_info: ''
},
"liver_dosage_info": {
  dose_change_prerequisites: '',
  creatinine_based_dosages: [
    // {
    //   creatinine_clearance: '',
    //   dosage_fraction: '',
    // }
  ]
},
}


export default function FormDrug (props) {
  //get Drug
  const navigate = useNavigate();
  //   alert("drugID"+(drugId === -1));
  const [myDrug, setDrug] = useState(props.drug== null ? blankDrug : props.drug);
  const [inp, setInp] = useState(myDrug.inp_name);
  const [names, setNames] = useState(myDrug.trade_names);
  const [dosages, setDosages] = useState(myDrug.dosages);
  const [effectsHelper, setEffectsHelper] = useState("Перечислите побочные эффекты через запятую");
  const [pharm_dynamics, setPharm_dynamics] = useState(myDrug.pharm_dynamics);
  const [pharmKinetics, setPharmKinetics] = useState(myDrug.pharm_kinetics);
  const [contraindications, setContraindications] = useState(myDrug.contraindications);
  const [sideEffects, setSideEffects] = useState(myDrug.side_effects);
  const [foodInfo, setFoodInfo] = useState(myDrug.foodInfo);
  const [interactions, setInteractions] = useState(myDrug.interactions.map(obj => ({ ...obj, result: 0 })));
  const [role_in_treatment, setRole_in_treatment] = useState(myDrug.role_in_treatment);
  const [line, setLine] = useState(myDrug.first_line);

  const saveAll = () => {
    let newDrug =  {
     "id": null, //props.drugId, // при создании айди должен быть null
     "first_line": line,
     "inp_name": inp,
     "trade_names": names,
     "pharm_dynamics": pharm_dynamics,
     "pharm_kinetics": pharmKinetics,
     "side_effects":sideEffects,
     "contraindications": contraindications,
     "role_in_treatment": role_in_treatment,
     "dosages": dosages,
     "interactions": interactions,
     "acting_substance": {
       id: null,
       name: inp,
     },
     "pregnancy_info": {
       fda_category: '',
       usage: '',
       additional_info: ''
     },
     "liver_dosage_info": {
       dose_change_prerequisites: '',
       creatinine_based_dosages: [
         // {
         //   creatinine_clearance: '',
         //   dosage_fraction: '',
         // }
       ]
     },
     "food_info": foodInfo
   }
   console.log(props.drug);
   props.drug ? props.saveDrug(newDrug) : props.addNewDrug(newDrug);
   // props.changeDrug(newDrug,drugId);
  }

  return(<div className="DrugWrapper wrapper">
  <Form.Control
    className="like_table"
    autoFocus
    type="text"
    value={inp}
    onChange={(e) => setInp(e.target.value)}
  />
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue={line}
    name="radio-buttons-group"
    onChange={(event) => {setLine(event.target.value)}}
  >
    <FormControlLabel value={true} control={<Radio />} label="первый ряд" />
    <FormControlLabel value={false} control={<Radio />} label="второй ряд" />
  </RadioGroup>
  <h5 className="drugH">Торговые наименования и форма выпуска:</h5>
  <InputTable blank={blankDrug["trade_names"]} title={["торговые наименования","форма выпуска"]} data={names} setData={setNames} />
  <h5 className="drugH">Фармакодинамика:</h5>
  <ReactQuill className="like_table" theme="snow" value={pharm_dynamics} onChange={setPharm_dynamics}/>
  <h5 className="drugH">Фармакокинетика:</h5>
  <InputTable blank={blankDrug["pharm_kinetics"]} data={pharmKinetics} setData={setPharmKinetics}/>
  <h5 className="drugH">Побочные эффекты:</h5>
  <InputTable blank={blankDrug["side_effects"]} className="like_table"  title={["эффект","система"]} data={sideEffects} setData={setSideEffects} setHelper={setEffectsHelper}/>
  <FormHelperText>{effectsHelper}</FormHelperText>
  <h5 className="drugH">Противопоказания:</h5>
    <ReactQuill className="like_table" theme="snow" value={contraindications} onChange={setContraindications}/>
  <h5 className="drugH">Место в лечении туберкулеза:</h5>
  <ReactQuill  className="like_table" theme="snow" value={role_in_treatment} onChange={setRole_in_treatment}/>
  <h5 className="drugH">Дозы:</h5>
  <InputTable blank={blankDrug["dosages"]} className="like_table" title={["тип пациента","лекарственная форма","сут. доза","макс. сут. доза"]} data={dosages} setData={setDosages}/>
  <h5 className="drugH">Лекарственные взаимодействия:</h5>
  <InputTable blank={blankDrug["interactions"]} title={["действующее вещество","вид взаимодействия","клиническое последствие","цветовая подсказка"]} data={interactions} setData={setInteractions} />
  <h5 className="drugH">Взаимодействие с пищей</h5>
  <p>Рекомендации</p>
  <Form.Control
    className="like_table"
    autoFocus
    type="text"
    value={foodInfo.recommendations}
    onChange={(e) => setFoodInfo({...foodInfo, recommendations: e.target.value})}
  />
    <p>Комментарии</p>
    <Form.Control
      className="like_table"
      autoFocus
      type="text"
      value={foodInfo.comment}
      onChange={(e) => setFoodInfo({...foodInfo, comment: e.target.value})}
    />
  <Button className="like_table" onClick={saveAll} variant="flat" size="lg">
    Сохранить
  </Button>
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
