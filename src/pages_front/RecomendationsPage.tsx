import React, {Component} from 'react';
import Grid from '@mui/material/Grid';
import './Recomendations.css';

interface IProps {
}

interface IState {
  recs?: { id: number, title: string, text: string }[];
}
const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque id nibh tortor id aliquet lectus proin nibh. Vivamus arcu felis bibendum ut tristique. Non odio euismod lacinia at quis risus sed. Ultrices tincidunt arcu non sodales neque sodales. Consequat id porta nibh venenatis cras sed. Porttitor leo a diam sollicitudin tempor id eu. Ultrices gravida dictum fusce ut placerat orci nulla. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Fusce ut placerat orci nulla pellentesque dignissim enim. Pretium nibh ipsum consequat nisl vel pretium. Tincidunt tortor aliquam nulla facilisi cras fermentum. Id faucibus nisl tincidunt eget nullam non nisi est.\n'+
'\n'+
'Neque viverra justo nec ultrices dui. Non arcu risus quis varius quam quisque id. Lobortis mattis aliquam faucibus purus. Ante in nibh mauris cursus mattis molestie a iaculis. Sit amet porttitor eget dolor morbi non. Egestas congue quisque egestas diam in arcu cursus euismod quis. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Nunc sed augue lacus viverra vitae. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar.';

class Recomendations extends Component<IProps, IState> {
  constructor(props : IProps) {
  super(props);
    this.state = {
      recs: [
      { "id": 0, "title": "COVID", "text": lorem },
      { "id": 1, "title": "ВИЧ", "text": lorem },
      { "id": 2, "title": "Сахарный диабет 2 типа",  "text": lorem },
      { "id": 0, "title": "Артериальная гипертония", "text": lorem },
      { "id": 1, "title": "Вирусные гепатиты (B,C)", "text": lorem },
    ]
    }
  }
  render(){
    const cards = this.state.recs.map((item)=>{
      return(
        <div key={item.id}>
        <h3 id={"sect"+item.id}><a id={item.title}>{item.title}</a></h3>
        <p>{item.text}</p>
        </div>
      )
    })
    const list = this.state.recs.map((item)=>{
      return(
        <li key={item.id}><a href={"#"+item.title}>{item.title}</a></li>
      )
    })
    return(<div className="wrapper">
      <div>
      <h3>Клинические рекомендации</h3>
      <p>На данной странице находятся клинические рекомендации по диагностике и лечению следующих заболеваний у пациентов фтизиатрического отделения:</p>
<ul>
{list}
</ul>
      </div>
       <div>
       {cards}
       </div>
      </div>)
  }
}

export default Recomendations;
