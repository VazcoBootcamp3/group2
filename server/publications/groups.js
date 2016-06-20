Meteor.publish("groups", () =>{
  return Groups.find();
});
