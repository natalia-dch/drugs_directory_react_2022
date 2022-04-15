// @ts-nocheck
import React, {Component} from 'react';
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  Container,
  makeStyles,
} from "@material-ui/core";
import './Footer.css'

const text = "Федеральное государственное бюджетное учреждение "+
"\n«Национальный медицинский исследовательский центр фтизиопульмонологии и инфекционных заболеваний»"+
"\nМинистерства здравоохранения Российской Федерации"+
"\nnnmrc@nmrc.ru";

class Footer extends Component {

  constructor(props) {
    super(props);
  }
  render(){

    return(
      <div className="footer">
                <div className="par">{text}</div>
      </div>
      )
  }
}

export default Footer;
