// @ts-nocheck
import React, {Component} from 'react';
import Drug from '../contracts'
import './DrugPage.css';

class DrugPage extends Component {
  constructor(props) {
  super(props);
  //get Drug
  let lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque id nibh tortor id aliquet lectus proin nibh. Vivamus arcu felis bibendum ut tristique. Non odio euismod lacinia at quis risus sed. Ultrices tincidunt arcu non sodales neque sodales. Consequat id porta nibh venenatis cras sed. Porttitor leo a diam sollicitudin tempor id eu. Ultrices gravida dictum fusce ut placerat orci nulla. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Fusce ut placerat orci nulla pellentesque dignissim enim. Pretium nibh ipsum consequat nisl vel pretium. Tincidunt tortor aliquam nulla facilisi cras fermentum. Id faucibus nisl tincidunt eget nullam non nisi est.\n'+
  '\n'+
  'Neque viverra justo nec ultrices dui. Non arcu risus quis varius quam quisque id. Lobortis mattis aliquam faucibus purus. Ante in nibh mauris cursus mattis molestie a iaculis. Sit amet porttitor eget dolor morbi non. Egestas congue quisque egestas diam in arcu cursus euismod quis. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Nunc sed augue lacus viverra vitae. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar.';
  let pk = "Является пролекарством и активизируется микобактериальной каталазой. Механизм действия связан с угнетением синтеза миколевой кислоты в клеточной стенке M.tuberculosis. Изониазид оказывает бактерицидное действие на микобактерии в стадии размножения и бактериостатическое - в стадии покоя. При монотерапии изониазидом к нему быстро (в 70% случаев) развивается устойчивость."
  let c = "Индивидуальная непереносимость препарата.\nЭпилепсия.\nТяжелые психозы.\nСклонность к судорожным припадкам.\nПолиомиелит в анамнезе.\nТоксический гепатит в анамнезе вследствие приема препаратов ГИНК.\nОстрая печеночная и почечная недостаточность."
let role = "Лечение и профилактика туберкулеза различной локализации у взрослых и детей."+
"\nДлительность приема не ограничена."
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
      "comment": lorem }
  }
    this.state = {
      drug: myDrug,
    }
  }

  render(){
    let request = '/api/drugs/'+this.props.id;
    axios.get(request)
      .then(res => {
    const result = res.data;
    console.log(result)
    this.setState({
      drug: result,
    })});


    let tradenames = this.state.drug.trade_names.map((tn)=>{
      return(tn.trade_name+" : "+tn.pharm_form+",\n");
    });
    let pharm_kinetics = this.state.drug.pharm_kinetics.map((e)=>{
      return(e.name+" : "+e.value+",\n");
    });
    let side_effects = this.state.drug.side_effects.map((s)=>{
      return(s.system.system+" : "+s.effects.map((e)=>e.effect)+", \n");
    });

    let dosages = this.state.drug.dosages.map((s)=>{
      let isAdult = s.adult?"для взрослых":"для детей";
      return(s.pharm_form+"("+isAdult+"):"+"\nдневная доза: "+s.daily_dose+",\nмаксимальная доза: "+s.max_daily_dose+",\n\n");
    });
    return(<div className="DrugWrapper wrapper">
    <h2>{this.state.drug.inp_name}</h2>
    <p className="drugH">{this.state.drug.first_line?"препарат первого ряда":"препарат второго ряда"}</p>
    <h5 className="drugH">Торговые наименования и форма выпуска:</h5>
    <p className="drugH">{tradenames}</p>
    <h5 className="drugH">Фармакодинамика:</h5>
    <p className="drugH">{this.state.drug.pharm_dynamics}</p>
    <h5 className="drugH">Фармакокинетика:</h5>
    <p className="drugH">{pharm_kinetics}</p>
    <h5 className="drugH">Побочные эффекты:</h5>
    <p className="drugH">{side_effects}</p>
    <h5 className="drugH">Противопоказания:</h5>
    <p className="drugH">{this.state.drug.contraindications}</p>
    <h5 className="drugH">Место в лечении туберкулеза:</h5>
    <p className="drugH">{this.state.drug.role_in_treatment}</p>
    <h5 className="drugH">Дозы:</h5>
    <p className="drugH">{dosages}</p>
      </div>)
  }
}

export default DrugPage;
