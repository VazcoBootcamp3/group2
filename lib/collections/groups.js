import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

Groups = new Mongo.Collection('groups');

Meteor.methods({
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
  'groups.addMember'(groupId, userId) {
    Groups.update(groupId, {members: members.push(userId)})
  }
})
