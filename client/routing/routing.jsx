import React from 'react';
import {mount} from 'react-mounter';
import App from '../components/App.jsx';
import Navbar from '../components/Navbar.jsx';
import ReportView from '../containers/ReportView.js';
import ShoppingForm from '../components/ShoppingForm';
import StartPage from '../components/StartPage';

FlowRouter.route("/", {
  action () {
    mount(StartPage, {} );
  }
});

FlowRouter.route("/report", {
  action () {
    mount(App, {navbar: <Navbar/>, content:  <ReportView/>} );
  }
});

FlowRouter.route("/add", {
  action () {
    mount(App, {navbar: <Navbar/>, content:  <ShoppingForm/>} );
  }
});
