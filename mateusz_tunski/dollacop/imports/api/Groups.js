import { Meteor } from "meteor/meteor"
import { Mongo } from "meteor/mongo"
import { check } from 'meteor/check'

export const Groups = new Mongo.Collection("groups")

Meteor.methods({
  "groups.create"(groupName, members) {
    check(groupName, String)
    check(members, Array)

    if (!this.userId) {
      throw new Meteor.Error("unauthorized")
    }

    const { _id, profile: { name } } = Meteor.user()
    const admin = { _id, name }

    Groups.insert({
      name: groupName, admin, members,
      createdAt: Date.now()
    })
  },
})

if (Meteor.isServer) {
  Meteor.publish("groups", function debtsPublication() {
    if (!this.userId) {
      throw new Meteor.Error("unauthorized")
    }

    return Groups.find({ $or: [{ "admin._id": this.userId }, { "members._id": this.userId }] })
  })
}
