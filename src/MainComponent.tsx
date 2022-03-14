// @ts-nocheck
import React, {Component} from 'react';
import Header from './components/header/HeaderComponent';
import Footer from './components/footer/FooterComponent';
import AdminMenu from './components/admin_header/AdminMenu';

import Home from './pages_front/HomePage';
import About from './pages_front/AboutPage';
import Contact from './pages_front/ContactPage';
import Drugs from './pages_front/DrugsPage';
import InteractionsPage from './pages_front/InteractionsPage';
import News from './pages_front/NewsPage';
import Recomendations from './pages_front/RecomendationsPage';
import Video from './pages_front/VideoPage';
import DrugPage from './pages_front/DrugPage';

import Login from './pages_admin/LoginPage';
import FormDrug from './pages_admin/FormDrugPage';
import FormChangeSite from './pages_admin/FormChangeSitePage';
import AdminList from './pages_admin/AdminListPage';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



class Main extends Component {
  constructor(props) {
  super(props);
  this.state = {
      drugToShow: -1,
    }
    this.showDrug = this.showDrug.bind(this);
  }
showDrug(id) {
      if(id!=-1)
      {this.setState({
        drugToShow: id,
      });}
    }
  render(){
    return(
      <Router>
        <Routes>
          <Route path="/" element={<div><Header /><Home /><Footer/></div>} />
          <Route path="/about" element={<div><Header /><Home /><Footer/></div>} />
          <Route path="/contacts" element={<div><Header /><Contact /><Footer/></div>} />
          <Route path="/drugs" element={<div><Header /><Drugs handleClick={this.showDrug} isDrugPage={true} sItem={this.state.drugToShow}/><Footer/></div>} />
          <Route path="/drug" element={<div><Header /><DrugPage id={this.state.drugToShow}/><Footer/></div>} />
          <Route path="/interactions" element={<div><Header /><InteractionsPage /><Footer/></div>} />
          <Route path="/news" element={<div><Header /><News /><Footer/></div>} />
          <Route path="/recomendations" element={<div><Header /><Recomendations /><Footer/></div>} />
          <Route path="/video" element={<div><Header /><Video /><Footer/></div>} />
          <Route path="/admin" element={<Login />} />
          <Route path="/admin/moderators" element={<div><AdminMenu/><AdminList/></div>} />
          <Route path="/admin/drugs" element={<div><AdminMenu/><AdminList/></div>} />
          <Route path="/admin/site" element={<div><AdminMenu/><FormChangeSite/></div>} />
        </Routes>
      </Router>
    )
  }
}

export default Main;
