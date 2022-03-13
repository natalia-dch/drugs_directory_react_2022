import React, {Component} from 'react';
import './Header.css';
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import logo from '../../shared/logo.png'


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
    <Link to={props.link} className="nav-link">
      {props.name}
    </Link>
    </li>
  )
}

function Header() {
  const deseases = ["туберкулез", "ВИЧ", "COVID", "сахарный диабет","артериальная дистония","вирусные гепатиты"];
  const contactTypes = ["для врача","для пациента"];
  return (
<header className="container-fluid bg-white">
<image src={logo} />
	<div className="container px-0 menuContainer">
		<nav className="navbar navbar-expand-xl navbar-light align-items-end p-xl-0">
			<a href="#mobileMenu" id="mobileBar" className="d-none ml-auto"> <i className="fa fa-bars"></i></a>
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav ml-md-auto justify-content-end" id="nav">
          <HeaderItem link="/about" name="Цель сайта"/>
          <HeaderItem link="/drugs" name="Препараты"/>
          <HeaderItem link="/interactions" name="Лекарственное взаимодействие"/>
          <HeaderItemDD link="/recomendations" name="Клинические рекомендации" list={deseases}/>
          <HeaderItem link="/news" name="Новости сайта"/>
          <HeaderItem link="/video" name="Видео"/>
          <HeaderItemDD link="/contacts" name="Обратная связь" list={contactTypes}/>
				</ul>
			</div>
		</nav>
	</div>

</header>
  );
}
export default Header;
