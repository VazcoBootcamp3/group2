import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

Expenses = new Mongo.Collection('expenses');
Groups = new Mongo.Collection('groups');


Meteor.methods({
  'expenses.remove'(expenseId) {
    Expenses.remove(expenseId);
  },
  'expenses.add'(expense) {
    var name;
    if(!!Meteor.user()) {
      name = Meteor.user().services.facebook.name;
    }
    else {
      name = 'niezalogowany';
    }
    Expenses.insert({
      expense,
      createdAt: new Date(),
      owner: this.userId,
      username: name,
    });
  },
  'groups.remove'(groupId) {
    Groups.remove(groupId);
  },
  'groups.add'(group) {
    Groups.insert({
      group,
      createdAt: new Date(),
      owner: this.userId,
      members: [this.userId]
    });
  },
  'groups.addMember'(groupId) {
    Groups.update( groupId, { $push: {members: this.userId}});
  }
})
