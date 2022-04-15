// @ts-nocheck
import React, {Component, useState} from 'react';
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

let lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque id nibh tortor id aliquet lectus proin nibh. Vivamus arcu felis bibendum ut tristique. Non odio euismod lacinia at quis risus sed. Ultrices tincidunt arcu non sodales neque sodales. Consequat id porta nibh venenatis cras sed. Porttitor leo a diam sollicitudin tempor id eu. Ultrices gravida dictum fusce ut placerat orci nulla. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Fusce ut placerat orci nulla pellentesque dignissim enim. Pretium nibh ipsum consequat nisl vel pretium. Tincidunt tortor aliquam nulla facilisi cras fermentum. Id faucibus nisl tincidunt eget nullam non nisi est.\n'+
'\n'+
'Neque viverra justo nec ultrices dui. Non arcu risus quis varius quam quisque id. Lobortis mattis aliquam faucibus purus. Ante in nibh mauris cursus mattis molestie a iaculis. Sit amet porttitor eget dolor morbi non. Egestas congue quisque egestas diam in arcu cursus euismod quis. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Nunc sed augue lacus viverra vitae. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar.';
let pk = "Является пролекарством и активизируется микобактериальной каталазой. Механизм действия связан с угнетением синтеза миколевой кислоты в клеточной стенке M.tuberculosis. Изониазид оказывает бактерицидное действие на микобактерии в стадии размножения и бактериостатическое - в стадии покоя. При монотерапии изониазидом к нему быстро (в 70% случаев) развивается устойчивость."
let c = "Индивидуальная непереносимость препарата.\nЭпилепсия.\nТяжелые психозы.\nСклонность к судорожным припадкам.\nПолиомиелит в анамнезе.\nТоксический гепатит в анамнезе вследствие приема препаратов ГИНК.\nОстрая печеночная и почечная недостаточность."
let role = "Лечение и профилактика туберкулеза различной локализации у взрослых и детей."+
"\nДлительность приема не ограничена."
let myDrug1 =
{
  "id": 0,
  "first_line": true,
  "inp_name": "этамбутол",
  "trade_names": [
  {"id": 0,
  "trade_name": "Этамбутол-Эдвансд",
  "pharm_form": "таблетки"},
  {"id": 1,
  "trade_name": "Этамбутол",
  "pharm_form": "таблетки"}
],
  "pharm_dynamics": pk,
  "pharm_kinetics": [{
  "id": 0,
  "name": "Адсорбция из ЖКТ",
  "value": "Быстрая и полная, снижается при приеме пищи"
},
{
  "id": 1,
  "name": "Биодоступность, %",
  "value": "80-90"
},
{
  "id": 2,
  "name": "Связь с белками плазмы крови, %",
  "value": "До 10"
},
{
  "id": 3,
  "name": "Биотрансформация",
  "value": "В печени путем ацетилирования до неактивных продуктов"
},
{
  "id": 4,
  "name": "Проникновение через ГЭБ",
  "value": "хорошее"
},
{
  "id": 5,
  "name": "Т1/2,ч",
  "value": "2-3"
}],
  "side_effects": [{
  id: 0,
  effects: [{
"id": 0,
"effect": "тошнота",
},{
"id": 0,
"effect": "рвота",
}],
  system: {  "id": 0, "system": "Со стороны ЖКТ"}
},
{
id: 0,
effects: [{
"id": 0,
"effect": "гинекомастия дисменорея у женщин",
},{
"id": 0,
"effect": "«кушингоид»",
}],
system: {  "id": 0, "system": "Со стороны эндокринной системы"}
},{
id: 0,
effects: [{
"id": 0,
"effect": "головная боль",
},{
"id": 0,
"effect": "головокружения",
}],
system: {  "id": 0, "system": "Со стороны ЦНС"}
}],
  "contraindications": c,
  "role_in_treatment": role,
  "dosages": [{
  "id": 0,
  "adult": true,
  "pharm_form": "Табл. 0,1г; 0,2г; 0,3г.",
  "daily_dose": "4-6 мг/кг",
  "max_daily_dose": "600мг"
},{
  "id": 1,
  "adult": true,
  "pharm_form": "Раствор для инъекций, 100 мг/мл, по 5 мл.",
  "daily_dose": "10-15мг/кг",
  "max_daily_dose": "200-300 мг",
}],
  "foodInfo": {
  "recommendations": "string",
    "comment": lorem },
  "interactions": [
    {"id":0,"acting_substance":"Пенициллины, цефалоспорины",
  "kind_of_interaction":"Синергизм при раздельном введении",
  "clinical_consequence":"",
  "result":0},
{"id":1,"acting_substance":"Аминогликозиды, при одновременном или последовательном применении двух препаратов и более",
"kind_of_interaction":"Повышение риска ототоксичности, нефротоксичности, нервно-мышечной блокады.",
"clinical_consequence":"Совместное применение не рекомендуется",
"result":1},
]
}

let blankDrug =
{
  "id": 0,
  "first_line": true,
  "inp_name": "",
  "trade_names": [{"id": 1, "trade_name": "","pharm_form": ""}],
  "pharm_dynamics": "",
  "pharm_kinetics": [{"id": 0,"name": "","value": ""}],
  "side_effects": [{id: 0,
  effects: [{"id": 0,"effect": ""}],
  system: {  "id": 0, "system": ""}}],
  "contraindications": "",
  "role_in_treatment": "",
  "dosages": [{"id": 0, "adult": true, "pharm_form": "", "daily_dose": "", "max_daily_dose": ""}],
  "foodInfo": null,
  "interactions": [
    {"id":0,"acting_substance":"", "kind_of_interaction":"","clinical_consequence":"","result":0}
]
}

export default function FormDrug () {
  //get Drug
  const navigate = useNavigate();
  const { drugId } = useParams();
  // alert("drugID"+(drugId));
  //   alert("drugID"+(drugId === -1));
  const [myDrug, setDrug] = useState(drugId === -1 ? blankDrug : myDrug1);
  const [inp, setInp] = useState(myDrug.inp_name);
  const [names, setNames] = useState(myDrug.trade_names);
  const [dosages, setDosages] = useState(myDrug.dosages);
  const [effectsHelper, setEffectsHelper] = useState("Перечислите побочные эффекты через запятую");
  const [pharm_dynamics, setPharm_dynamics] = useState(myDrug.pharm_dynamics);
  const [pharmKinetics, setPharmKinetics] = useState(myDrug.pharm_kinetics);
  const [contraindications, setContraindications] = useState(myDrug.contraindications);
  const [sideEffects, setSideEffects] = useState(myDrug.side_effects);
  const [interactions, setInteractions] = useState(myDrug.interactions);
  const [role_in_treatment, setRole_in_treatment] = useState(myDrug.role_in_treatment);
  const [line, setLine] = useState(myDrug.first_line);

  const saveAll = () => {
    let newDrug =  {
     "id": drugId,
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
     "pregnancy_info": null,
     "liverDosageInfo": null,
     "foodInfo": null
   }
   // props.changeDrug(newDrug,drugId);
   navigate(`/admin/drugs`);
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
  <InputTable title={["торговые наименования","форма выпуска"]} data={names} setData={setNames} />
  <h5 className="drugH">Фармакодинамика:</h5>
  <ReactQuill className="like_table" theme="snow" value={pharm_dynamics} onChange={setPharm_dynamics}/>
  <h5 className="drugH">Фармакокинетика:</h5>
  <InputTable data={pharmKinetics} setData={setPharmKinetics}/>
  <h5 className="drugH">Побочные эффекты:</h5>
  <InputTable className="like_table"  title={["эффект","система"]} data={sideEffects} setData={setSideEffects} setHelper={setEffectsHelper}/>
  <FormHelperText>{effectsHelper}</FormHelperText>
  <h5 className="drugH">Противопоказания:</h5>
    <ReactQuill className="like_table" theme="snow" value={contraindications} onChange={setContraindications}/>
  <h5 className="drugH">Место в лечении туберкулеза:</h5>
  <ReactQuill  className="like_table" theme="snow" value={role_in_treatment} onChange={setRole_in_treatment}/>
  <h5 className="drugH">Дозы:</h5>
  <InputTable className="like_table" title={["тип пациента","лекарственная форма","сут. доза","макс. сут. доза"]} data={dosages} setData={setDosages}/>
  <h5 className="drugH">Лекарственные взаимодействия:</h5>
  <InputTable title={["действующее вещество","вид взаимодействия","клиническое последствие","цветовая подсказка"]} data={interactions} setData={setInteractions} />
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
