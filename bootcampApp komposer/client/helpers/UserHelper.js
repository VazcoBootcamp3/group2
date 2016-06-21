import Meteor from 'meteor/meteor';

export function getUserPicture() {

  var user = Meteor.user();
  // var user = Meteor.users.findOne(userId);
  if(user.services.facebook) {
    return user.services.facebook.picture;
  }
  else {
    console.log(`no facebook picture for profile`);
    return 'http://darmowegrafiki.5m.pl/avatary/gify_ikony/OI_img1.gif';
  }
}
