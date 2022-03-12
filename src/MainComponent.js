import React, {Component} from 'react';
import Header from './components/header/HeaderComponent';
import Footer from './components/footer/FooterComponent';
import AdminMenu from './components/admin_header/AdminMenu';

import Home from './pages_front/HomePage';
import About from './pages_front/AboutPage';
import Contact from './pages_front/ContactPage';
import Drugs from './pages_front/DrugsPage';
import Interactions from './pages_front/InteractionsPage';
import News from './pages_front/NewsPage';
import Recomendations from './pages_front/RecomendationsPage';
import Video from './pages_front/VideoPage';

import Login from './pages_admin/LoginPage';
import FormDrug from './pages_admin/FormDrugPage';
import FormChangeSite from './pages_admin/FormChangeSitePage';
import AdminList from './pages_admin/AdminListPage';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

class Main extends Component {

  constructor(props) {
    super(props);
  }
  render(){
    return(
      <Router>
        <Routes>
          <Route exact path="/" element={<div><Header /><Home /><Footer/></div>} />
          <Route path="/about" element={<div><Header /><About /><Footer/></div>} />
          <Route path="/contacts" element={<div><Header /><Contact /><Footer/></div>} />
          <Route path="/drugs" element={<div><Header /><Drugs /><Footer/></div>} />
          <Route path="/interactions" element={<div><Header /><Interactions /><Footer/></div>} />
          <Route path="/news" element={<div><Header /><News /><Footer/></div>} />
          <Route path="/recomendations" element={<div><Header /><Recomendations /><Footer/></div>} />
          <Route path="/video" element={<div><Header /><Video /><Footer/></div>} />
          <Route exact path="/admin" element={<Login />} />
          <Route path="/admin/moderators" element={<div><AdminMenu/><AdminList/></div>} />
          <Route path="/admin/drugs" element={<div><AdminMenu/><AdminList/></div>} />
          <Route path="/admin/site" element={<div><AdminMenu/><FormChangeSite/></div>} />
        </Routes>
      </Router>
    )
  }
}

export default Main;
