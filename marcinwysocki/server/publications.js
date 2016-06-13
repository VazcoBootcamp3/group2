import {Meter} from 'meteor/meteor'
import Flatmates from '/imports/collections/Flatmates'

Meteor.publish("flatmates-coll", () => {
  return Flatmates.find();
});
