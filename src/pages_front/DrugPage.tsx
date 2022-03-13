import React, {Component} from 'react';
import Drug from '../contracts'

class DrugPage extends Component {
  constructor(props) {
  super(props);
  //get Drug
  let lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque id nibh tortor id aliquet lectus proin nibh. Vivamus arcu felis bibendum ut tristique. Non odio euismod lacinia at quis risus sed. Ultrices tincidunt arcu non sodales neque sodales. Consequat id porta nibh venenatis cras sed. Porttitor leo a diam sollicitudin tempor id eu. Ultrices gravida dictum fusce ut placerat orci nulla. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Fusce ut placerat orci nulla pellentesque dignissim enim. Pretium nibh ipsum consequat nisl vel pretium. Tincidunt tortor aliquam nulla facilisi cras fermentum. Id faucibus nisl tincidunt eget nullam non nisi est.\n'+
  '\n'+
  'Neque viverra justo nec ultrices dui. Non arcu risus quis varius quam quisque id. Lobortis mattis aliquam faucibus purus. Ante in nibh mauris cursus mattis molestie a iaculis. Sit amet porttitor eget dolor morbi non. Egestas congue quisque egestas diam in arcu cursus euismod quis. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Nunc sed augue lacus viverra vitae. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar.';
  let myDrug =
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
    "pharm_dynamics": lorem,
    "pharm_kinetics": [{
    "id": 0,
    "name": "Адсорбция из ЖКТ",
    "value": "Быстрая и полная, снижается при приеме пищи"
  },
  {
    "id": 1,
    "name": "Биодоступность, %",
    "value": "80-90"
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
  }],
    "contraindications": lorem,
    "role_in_treatment": lorem,
    "dosages": [{
    "id": 0,
    "adult": true,
    "pharm_form": "Табл. 0,1г; 0,2г; 0,3г.",
    "daily_dose": "4-6 мг/кг",
    "max_daily_dose": "600мг"
  },{
    "id": 1,
    "adult": true,
    "pharm_form": "Табл. 0,1г; 0,2г; 0,3г.",
    "daily_dose": "4-6 мг/кг",
    "max_daily_dose": "600мг",
  }],
    "foodInfo": {
    "recommendations": "string",
      "comment": lorem }
  }
    this.state = {
      drug: myDrug,
    }
  }

  render(){
    let tradenames = this.state.drug.trade_names.map((tn)=>{
      return(tn.trade_name+":"+tn.pharm_form+",\n");
    });
    let pharm_kinetics = this.state.drug.pharm_kinetics.map((e)=>{
      return(e.name+":"+e.value+",\n");
    });
    let side_effects = this.state.drug.side_effects.map((s)=>{
      return(s.system.system+":"+s.effects.map((e)=>e.effect)+",\n");
    });
    let dosages = this.state.drug.dosages.map((d)=>{
      return(s.id+")"+{s.isAdult?"для взрослых":"для детей"}+":"+s.+",\n");
    });
    return(<div className="wrapper">
    <h3>{this.state.drug.inp_name}</h3>
    <p>{this.state.drug.first_line?"препарат первого ряда":"препарат второго ряда"}</p>
    <h5>Торговые наименования и форма выпуска</h5>
    <p>{tradenames}</p>
    <h5>Фармакодинамика</h5>
    <p>{this.state.drug.pharm_dynamics}</p>
    <h5>Фармакокинетика</h5>
    <p>{pharm_kinetics}</p>
    <h5>Побочные эффекты</h5>
    <p>{side_effects}</p>
    <h5>Противопоказания</h5>
    <p>{this.state.drug.contraindications}</p>
    <h5>Место в лечении туберкулеза</h5>
    <p>{this.state.drug.role_in_treatment}</p>
    <h5>Дозы</h5>
    <p></p>
      </div>)
  }
}

export default DrugPage;
