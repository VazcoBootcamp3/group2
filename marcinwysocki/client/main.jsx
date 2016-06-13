import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import React from 'react';
import {render} from 'react-dom';

import Flatmates from '/imports/collections/Flatmates';
import Manager from '/imports/components/Manager';

Meteor.startup(() => {
  Tracker.autorun(() => {
     let flatmatesSub = Meteor.subscribe("flatmates-coll");
     if (flatmatesSub.ready()) {
       render(<Manager flatmates={Flatmates.find().fetch()} />, document.getElementById('app'));
     }

  });
})
