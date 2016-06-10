import { Meteor } from "meteor/meteor"
import { Mongo } from "meteor/mongo"
import { check } from 'meteor/check'

export const Debts = new Mongo.Collection("debts")

Meteor.methods({
  "debts.insert"(debtors, items) {
    check(debtors, Array)
    check(items, Array)

    if (!this.userId) {
      throw new Meteor.Error("unauthorized")
    }

    const { _id, profile: { name } } = Meteor.user()
    const creditor = { _id, name }

    Debts.insert({
      debtors, items, creditor,
      settled: false,
      createdAt: Date.now()
    })
  },

  "debts.settle"(debtId) {
    check(debtId, String)

    if (Debts.findOne(debtId).creditor._id !== this.userId) {
      throw new Meteor.Error("unauthorized")
    }

    Debts.update({ _id: debtId }, { $set: { settled: true } })
  }
})

if (Meteor.isServer) {
  Meteor.publish("debts", function debtsPublication() {
    if (!this.userId) {
      throw new Meteor.Error("unauthorized")
    }

    return Debts.find()
  })


  Meteor.methods({
    "debts.summary"() {
      if (!this.userId) {
        throw new Meteor.Error("unauthorized")
      }

      return (
        Debts.aggregate([
          { $match: { "creditor._id": this.userId, settled: false } },
          { $unwind: "$items" },
          { $unwind: "$debtors" },
          { $group: {
            _id: "$debtors._id",
            debtor: { $last: "$debtors" },
            total: { $sum: "$items.price" }
          } },
          { $project: { _id: 0, debtor: "$debtor", total: "$total" } },
          { $sort: { total: - 1 } }
        ])
      )
    }
  })
}
