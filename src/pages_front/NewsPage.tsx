// @ts-nocheck
import React, {Component, useState} from 'react';
import Grid from '@mui/material/Grid';
import './NewsPage.css';
import slider1 from '../shared/slider1.jpg'
import slider2 from '../shared/slider2.jpg'
import slider3 from '../shared/slider3.jpg'
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';

interface IProps {
}

interface IState {
  news?: { id: number, title: string, src: string, text: string }[];
}

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque id nibh tortor id aliquet lectus proin nibh. Vivamus arcu felis bibendum ut tristique. Non odio euismod lacinia at quis risus sed. Ultrices tincidunt arcu non sodales neque sodales. Consequat id porta nibh venenatis cras sed. Porttitor leo a diam sollicitudin tempor id eu. Ultrices gravida dictum fusce ut placerat orci nulla. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Fusce ut placerat orci nulla pellentesque dignissim enim. Pretium nibh ipsum consequat nisl vel pretium. Tincidunt tortor aliquam nulla facilisi cras fermentum. Id faucibus nisl tincidunt eget nullam non nisi est.\n'+
'\n'+
'Neque viverra justo nec ultrices dui. Non arcu risus quis varius quam quisque id. Lobortis mattis aliquam faucibus purus. Ante in nibh mauris cursus mattis molestie a iaculis. Sit amet porttitor eget dolor morbi non. Egestas congue quisque egestas diam in arcu cursus euismod quis. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Nunc sed augue lacus viverra vitae. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar.';
function NewsCard (props) {
  const [isShown, setShown] = useState(false);
  const isMedium = useMediaQuery('(max-width:850px)');
  const isMobile = useMediaQuery('(max-width:600px)');
  const handleClick = () => { setShown(!isShown);}
    return(
      <div className="card" key={props.item.id}>
      <Grid  container spacing={2}>
      <Grid item xs={isMobile? 12 : (2)}>
         <img  src={props.item.src}/>
      </Grid>
      <Grid item xs={isMobile? 12 : (10)}>
      <h5>{props.item.title}</h5>
      <p className={isShown?"opened":"closed"}>{props.item.text}</p>
      <p className={isShown?"moreBtn2":"moreBtn1"} onClick={handleClick}>читать далее</p>
      </Grid>
      </Grid>
      </div>
    )
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
