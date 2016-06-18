import {Meter} from 'meteor/meteor'
import Flatmates from '/imports/collections/Flatmates'

Meteor.publish("flatmates-coll", () => {
  return Flatmates.find();
});

Meteor.publish("users-profile", (flatName) => {
  console.log("publication", flatName, Meteor.users.find({profile:{ flat:flatName }}).fetch() );
  return Meteor.users.find({profile:{ flat:flatName }});
});
