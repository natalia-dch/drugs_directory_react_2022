import React, {Component} from 'react';
import Grid from '@mui/material/Grid';
import './NewsPage.css';
import slider1 from '../shared/slider1.jpg';
import slider2 from '../shared/slider2.jpg';
import slider3 from '../shared/slider3.jpg';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import useMediaQuery from '@mui/material/useMediaQuery';

function About () {
  const isMedium = useMediaQuery('(max-width:850px)');
  const isMobile = useMediaQuery('(max-width:600px)');
  const text =
'ФГБУ "Национальный медицинский исследовательский центр фтизиопульмонологии и инфекционных заболеваний" МЗ РФ является'+
 'учреждением, осуществляющим фундаментальные и прикладные исследования по проблемам туберкулеза, ВИЧ-инфекции,'
 +' вирусных гепатитов, инфекционных и неинфекционных заболеваний, утяжеляющих течение туберкулеза.';
    return(
      <>
      <div className="card">
      <Grid  container spacing={2}>
      <Grid item xs={isMobile? 10 : (2)}>
        <img  src={slider2}/>
      </Grid>
      <Grid item xs={isMobile? 10 : (10)}>
      <h5>Добро пожаловать!</h5>
      <p>{text}</p>
      </Grid>

      </Grid>
      </div>
      <div className="card">
      <Grid  container spacing={2}>
      {!isMobile &&
      <Grid item xs={2}>
        <img  src={slider3}/>
      </Grid>}
      <Grid item xs={10}>
      <p>Здесь вы можете
      <ul>
      <li><Link to="/drugs">получить информацию о противотуберкулезных препаратах</Link>,</li>
      <li><Link to="/interactions">проверить лекарственное взаимодействие препаратов</Link>,</li>
      <li><Link to="/recomendations">узнать клинические рекомендации </Link>,</li>
      <li><Link to="/news">прочитать наши новости</Link>,</li>
      <li><Link to="/video">посмотреть видео по теме</Link> или</li>
      <li><Link to="/contacts">задать нам вопрос</Link></li>
      </ul>
      </p>
      </Grid>
      </Grid>
      </div>
      </>
    )
  }

export default About;
