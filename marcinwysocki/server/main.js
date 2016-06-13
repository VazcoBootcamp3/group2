import { Meteor } from 'meteor/meteor';

import Flatmates from '../imports/collections/Flatmates'

const mock = [
  {
    name: 'Alan',
    owes: 0,
    flat: 'pierwsze mieszkanie'
  },
  {
    name: 'Brajan',
    owes: 0,
    flat: 'pierwsze mieszkanie'
  },
  {
    name: 'Kłentin',
    owes: 0,
    flat: 'pierwsze mieszkanie'
  },
  {
    name: 'Shared',
    owes: 0,
    flat: 'pierwsze mieszkanie'
  }
];

Meteor.startup(() => {
    if (!Flatmates.find().count()) {
      for (flatmate of mock) {
        Flatmates.insert(flatmate);
      }
    }
});
