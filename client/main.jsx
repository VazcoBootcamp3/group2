import { Meteor } from  'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {loadShopping} from './actions/shoppingActions';



Meteor.startup(() => {
  console.log('Hello!');
  const store = configureStore();
  store.dispatch(loadShopping());
  render (
    <Provider store={store}>
      <App />
    </Provider>
    ,document.getElementById('app')
  );
})
