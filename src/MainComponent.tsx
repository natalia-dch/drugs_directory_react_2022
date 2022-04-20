// @ts-nocheck
import React, {Component} from 'react';
import Header from './components/mainHeader/HeaderComponent';
import Footer from './components/footer/FooterComponent';
import AdminMenu from './components/admin_header/AdminMenu';

import Home from './pages_front/HomePage';
import About from './pages_front/AboutPage';
import Contact from './pages_front/ContactPage';
import Drugs from './pages_front/DrugsPage';
import InteractionsPage from './pages_front/InteractionPage';
import News from './pages_front/NewsPage';
import Recomendations from './pages_front/RecomendationsPage';
import Video from './pages_front/VideoPage';
import DrugPage from './pages_front/DrugPage';

import Login from './pages_admin/LoginPage';
import AdminDrugPage from './pages_admin/DrugPage';
import FormChangeSite from './pages_admin/FormChangeSitePage';
import ChangeVideos from './pages_admin/ChangeVideosPage';
import ChangeRecs from './pages_admin/ChangeRecs';
import ChangeNews from './pages_admin/ChangeNewsPage';
import ProcessFeedback from './pages_admin/ProcessFeedbackPage';
import AdminDrugList from './pages_admin/AdminDrugs';
import AdminModeratorsList from './pages_admin/AdminModeratorsListPage';

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

class Main extends Component {
  constructor(props) {
  super(props);
  this.state = {
      drugToShow: -1,
      itemToChange: -1,
    }
    this.showDrug = this.showDrug.bind(this);
    this.changeItem = this.changeItem.bind(this);
  }
showDrug(id) {
      if(id!=-1)
      {this.setState({
        drugToShow: id,
      });}
    }
changeItem(id) {
          if(id!=-1)
          {this.setState({
            itemToChange: id,
          });}
        }
  render(){
    return(
      <Router>
        <Routes>
          <Route path="/" element={<div><Header /><Home /><Footer/></div>} />
          <Route path="/about" element={<div><Header /><About /><Footer/></div>} />
          <Route path="/contacts" element={<div><Header /><Contact/><Footer/></div>} />
          <Route exact path="/drugs" element={<div><Header /><Drugs handleClick={this.showDrug} isDrugPage={true} sItem={this.state.drugToShow}/><Footer/></div>} />
          <Route path="/drugs/:drugId" element={<div><Header /><DrugPage id={this.state.drugToShow}/><Footer/></div>} />
          <Route path="/interactions" element={<div><Header /><InteractionsPage /><Footer/></div>} />
          <Route path="/news" element={<div><Header /><News /><Footer/></div>} />
          <Route path="/recomendations" element={<div><Header /><Recomendations /><Footer/></div>} />
          <Route path="/video" element={<div><Header /><Video /><Footer/></div>} />
          <Route path="/admin" element={<Login />} />
          <Route path="/admin/moderators" element={<div><AdminMenu/><AdminModeratorsList handleClick={this.showDrug} isDrugPage={true} sItem={this.state.drugToShow}/></div>} />
          <Route path="/admin/drugs" element={<div><AdminMenu/><AdminDrugList handleClick={this.showDrug} isDrugPage={true} sItem={this.state.drugToShow}/></div>} />
          <Route path="admin/drugs/:drugId" element={<div><AdminMenu/><AdminDrugPage /></div>} />
          <Route path="/admin/news" element={<div><AdminMenu/><ChangeNews/></div>} />
          <Route path="/admin/video" element={<div><AdminMenu/><ChangeVideos/></div>} />
          <Route path="/admin/recs" element={<div><AdminMenu/><ChangeRecs/></div>} />
          <Route path="/admin/feedback" element={<div><AdminMenu/><ProcessFeedback/></div>} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
      </Router>
    )
  }
}

export default Main;
