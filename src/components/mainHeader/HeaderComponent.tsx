// @ts-nocheck
import React, {Component} from 'react';
import './Header.css';
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  Box,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import logo from '../../shared/logo.png'
import { Menu } from '@mui/icons-material';
import useMediaQuery from '@mui/material/useMediaQuery';


const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
 logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));
function DDitem (props) {
    return(<li>
              <Link to={props.link}>{props.name}</Link>
            </li>
          )}

function HeaderItemDD(props) {
  const DD = () => props.list.map((item)=>{return(<DDitem link={props.link} name={item}/>)});
  return (
    <li className="nav-item dd">
    <Link to={props.link} className="nav-link">
      {props.name}
    </Link>
      <ul className="list-unstyled dropdownMenu">
      {<DD/>}
      </ul>
    </li>
  )
}

function HeaderItem(props) {
  return (
    <li className="nav-item">
    <Link to={props.link} onClick={props.onClick} className="nav-link">
      {props.name}
    </Link>
    </li>
  )
}

function Header() {
  const isBig = useMediaQuery('(min-width:850px)');
  const [menuOpen, setMenu] = React.useState(isBig);
  const toggleMenu = () => {
    setMenu(!menuOpen)
  }
  return (
    <div className="table">
    {(menuOpen || isBig ) &&
      <ul className="list" id="nav">
        <HeaderItem onClick={toggleMenu} link="/about" name="Цель сайта"/>
        <HeaderItem onClick={toggleMenu} link="/drugs" name="Препараты"/>
        <HeaderItem onClick={toggleMenu} link="/interactions" name="Лекарственное взаимодействие"/>
        <HeaderItem onClick={toggleMenu} link="/recomendations" name="Клинические рекомендации"/>
        <HeaderItem onClick={toggleMenu} link="/news" name="Новости сайта"/>
        <HeaderItem onClick={toggleMenu} link="/video" name="Видео"/>
        <HeaderItem onClick={toggleMenu} link="/contacts" name="Обратная связь"/>
      </ul>
    }
    {(!menuOpen && !isBig ) &&
<Menu className="hamburger" fontSize="large" onClick={toggleMenu}/>}
    </div>



  );
}
export default Header;
