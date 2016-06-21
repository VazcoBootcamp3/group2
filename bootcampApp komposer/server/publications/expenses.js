Meteor.publish("expenses", () =>{
  return Expenses.find();
});

Meteor.publish("getUserData", function () {
    return Meteor.users.find({_id: this.userId});
});

Meteor.publish("groups", () =>{
  return Groups.find();
});
