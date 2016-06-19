import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

Expenses = new Mongo.Collection('expenses');

Meteor.methods({
  'expenses.remove'(expenseId) {
    Expenses.remove(expenseId);
  },
  'expenses.add'(newExpense) {
    Expenses.insert(newExpense);
  }
})
