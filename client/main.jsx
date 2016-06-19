import { Meteor } from  'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import './startup/accounts-config.js';


Meteor.startup(() => {
  console.log('Hello!');
  
})
