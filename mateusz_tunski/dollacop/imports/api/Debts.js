import { Meteor } from "meteor/meteor"
import { Mongo } from "meteor/mongo"

export const Debts = new Mongo.Collection("debts")

if (Meteor.isServer) {
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
