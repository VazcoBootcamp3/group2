import { Meteor } from "meteor/meteor"

if (Meteor.isServer) {
  Meteor.publish("users", function usersPublication() {
    if (!this.userId) {
      throw new Meteor.Error("unauthorized")
    }

    return Meteor.users.find({}, { fields: { profile: 1 } })
  })
}
