import { Meteor } from "meteor/meteor"
import { Accounts } from "meteor/accounts-base"

import { Debts } from "/imports/api/Debts"
import { Groups } from "/imports/api/Groups"

let index = 1
do {
  if (!Accounts.findUserByEmail(`u${index}@t.com`)) {
    Accounts.createUser({
      email: `u${index}@t.com`,
      password: "password",
      profile: { name: `u${index}` }
    })
  }
  index++
} while (index <= 5)

const users = Meteor.users.find({}).fetch()

if (Debts.find().count() === 0) {
  Debts.insert({
    creditor: { _id: users[0]._id, name: users[0].profile.name },
    debtors: [
      { _id: users[1]._id, name: users[1].profile.name },
      { _id: users[2]._id, name: users[2].profile.name }
    ],
    items: [
      { name: "testitem1", price: 100 },
      { name: "testitem2", price: 150 },
      { name: "testitem3", price: 200 }
    ],
    settled: false,
    createdAt: Date.now()
  })

  Debts.insert({
    creditor: { _id: users[0]._id, name: users[0].profile.name },
    debtors: [
      { _id: users[1]._id, name: users[1].profile.name }
    ],
    items: [{ name: "testitem4", price: 250 }],
    settled: false,
    createdAt: Date.now()
  })

  Debts.insert({
    creditor: { _id: users[0]._id, name: users[0].profile.name },
    debtors: [
      { _id: users[2]._id, name: users[2].profile.name }
    ],
    items: [{ name: "testitem1", price: 100 }],
    settled: false,
    createdAt: Date.now()

  })

  Debts.insert({
    creditor: { _id: users[1]._id, name: users[1].profile.name },
    debtors: [
      { _id: users[0]._id, name: users[0].profile.name }
    ],
    items: [
      { name: "testitem1", price: 100 },
      { name: "testitem2", price: 150 }
    ],
    settled: false,
    createdAt: Date.now()
  })
}

if (Groups.find().count() === 0) {
  Groups.insert({
    name: "Group 1",
    admin: { _id: users[0]._id, name: users[0].profile.name },
    members: [
      { _id: users[1]._id, name: users[1].profile.name },
    ],
    createdAt: Date.now()
  })
}
