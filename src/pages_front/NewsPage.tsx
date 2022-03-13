import React, {Component} from 'react';
import Grid from '@mui/material/Grid';
import './NewsPage.css';
import slider1 from '../shared/slider1.jpg'
import slider2 from '../shared/slider2.jpg'
import slider3 from '../shared/slider3.jpg'
import Button from '@mui/material/Button';

interface IProps {
}

interface IState {
  news?: { id: number, title: string, src: string, text: string }[];
}

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque id nibh tortor id aliquet lectus proin nibh. Vivamus arcu felis bibendum ut tristique. Non odio euismod lacinia at quis risus sed. Ultrices tincidunt arcu non sodales neque sodales. Consequat id porta nibh venenatis cras sed. Porttitor leo a diam sollicitudin tempor id eu. Ultrices gravida dictum fusce ut placerat orci nulla. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Fusce ut placerat orci nulla pellentesque dignissim enim. Pretium nibh ipsum consequat nisl vel pretium. Tincidunt tortor aliquam nulla facilisi cras fermentum. Id faucibus nisl tincidunt eget nullam non nisi est.\n'+
'\n'+
'Neque viverra justo nec ultrices dui. Non arcu risus quis varius quam quisque id. Lobortis mattis aliquam faucibus purus. Ante in nibh mauris cursus mattis molestie a iaculis. Sit amet porttitor eget dolor morbi non. Egestas congue quisque egestas diam in arcu cursus euismod quis. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Nunc sed augue lacus viverra vitae. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar.';
class NewsCard extends Component {
  constructor(props) {
  super(props);
  this.state = {
      isShown: false}
    this.handleClick = this.handleClick.bind(this);
  }
handleClick() {
      this.setState(prevState => ({
        isShown: !prevState.isShown
      }));
    }

  render(){
    return(
      <div className="card" key={this.props.item.id}>
      <Grid  container spacing={2}>
      <Grid item xs={2}>
        <img  src={this.props.item.src}/>
      </Grid>
      <Grid item xs={10}>
      <h5>{this.props.item.title}</h5>
      <p className={this.state.isShown?"opened":"closed"}>{this.props.item.text}</p>
      <p className={this.state.isShown?"moreBtn2":"moreBtn1"} onClick={this.handleClick}>читать далее</p>
      </Grid>
      </Grid>
      </div>
    )
  }
}

class News extends Component<IProps, IState> {
  constructor(props : IProps) {
  super(props);
    this.state = {
      news: [
      { "id": 0, "title": "Title", "src": slider1, "text": lorem },
      { "id": 1, "title": "Title", "src": slider2, "text": lorem },
      { "id": 2, "title": "Title", "src": slider3, "text": lorem },
      { "id": 3, "title": "Title", "src": slider1, "text": lorem },
      { "id": 4, "title": "Title", "src": slider2, "text": lorem },
      { "id": 5, "title": "Title", "src": slider3, "text": lorem }
    ]
    }
  }

  render(){
    const newsCards = this.state.news.map((item)=>{
      return(
        <NewsCard item={item}/>
      )
    })
    return(<div className="wrapper">
    <h3>Новости</h3>
       {newsCards}
      </div>)
  }
}

export default News;
