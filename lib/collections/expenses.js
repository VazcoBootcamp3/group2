import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

Expenses = new Mongo.Collection('expenses');

Meteor.methods({
  'expenses.remove'(expenseId) {
    Expenses.remove(expenseId);
  },
  'expenses.add'(expense) {
    Expenses.insert({
      expense,
      createdAt: new Date(),
      owner: this.userId,
      username: Meteor.user().services.facebook.name,
    });
  }
})
