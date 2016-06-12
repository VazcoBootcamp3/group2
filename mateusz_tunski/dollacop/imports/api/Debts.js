import { Meteor } from "meteor/meteor"
import { Mongo } from "meteor/mongo"
import { check } from 'meteor/check'
import { ReactiveAggregate } from "meteor/jcbernack:reactive-aggregate"

const Debts = new Mongo.Collection("debts")
const DebtsSummary = new Mongo.Collection("debtsSummary")

export { Debts, DebtsSummary }

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

    return Debts.find({ "debtors._id": this.userId, settled: false })
  })

  Meteor.publish("receivables", function receivablesPublication() {
    if (!this.userId) {
      throw new Meteor.Error("unauthorized")
    }

    return (
      Debts.find(
        { "creditor._id": this.userId, settled: false },
        { sort: { createdAt: -1 } }
      )
    )
  })

  Meteor.publish("debtsSummary", function debtsSummaryPublication() {
    if (!this.userId) {
      throw new Meteor.Error("unauthorized")
    }

    ReactiveAggregate(this, Debts, [
      { $match: { "creditor._id": this.userId, settled: false } },
      { $unwind: "$items" },
      { $unwind: "$debtors" },
      { $group: {
        _id: "$debtors._id",
        debtor: { $last: "$debtors" },
        total: { $sum: "$items.price" }
      } },
      { $project: { _id: 1, debtor: "$debtor", total: "$total" } },
      { $sort: { total: - 1 } }
    ], { clientCollection: "debtsSummary" })
  })
}
