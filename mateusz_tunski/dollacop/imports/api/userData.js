import { Meteor } from "meteor/meteor"

if (Meteor.isServer) {
  Meteor.publish('userData', () => Meteor.users.find(
    {}, { fields: { profile: 1 } }
  ))
}
