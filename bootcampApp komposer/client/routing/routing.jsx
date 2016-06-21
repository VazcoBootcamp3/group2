import React from 'react';
import {mount} from 'react-mounter';
import App from '../components/App.jsx';
import Navbar from '../components/Navbar.jsx';
import ReportView from '../containers/ReportView.js';
import ShoppingForm from '../components/ShoppingForm';
import StartPage from '../components/StartPage';
import GroupForm from '../components/GroupForm';
import Groups from '../containers/Groups.js';

FlowRouter.route("/", {
  action () {
      mount(App, {navbar: <Navbar/>, content:  <ReportView/>} );
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

FlowRouter.route("/createGroup", {
  action () {
    mount(App, {navbar: <Navbar/>, content:  <GroupForm/>} );
  }
});

FlowRouter.route("/groups", {
  action () {
    mount(App, {navbar: <Navbar/>, content:  <Groups/>} );
  }
});
