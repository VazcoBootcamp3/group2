import React from 'react';

import LayoutContainer from '/imports/containers/LayoutContainer'
import Register from '/imports/components/Register'
import Login from '/imports/components/Login'
import FormContainer from '/imports/containers/FormContainer'


FlowRouter.route('/register', {
  name: 'register',
  action(params) {
    ReactLayout.render(LayoutContainer, {
      content: <Register />
    });
  }
});

FlowRouter.route('/login', {
  name: 'login',
  triggersEnter: [(ctxt) => {
    if (Meteor.userId()) {
      Meteor.logout((err) => {
        if (err) {
          Materialize.toast('Error logging out!', 2000);
        } else {
          Materialize.toast('Logged out', 2000);
        }
      });
    }
  }],
  action(params) {
    ReactLayout.render(LayoutContainer, {
      content: <Login />
    });
  }
});

FlowRouter.route('/form', {
  name: 'form',
  action(params) {
    ReactLayout.render(LayoutContainer, {
          content: <FormContainer />
    });
  }
});
