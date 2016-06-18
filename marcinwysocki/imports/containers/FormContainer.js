import {Meteor} from 'meteor/meteor'
import {composeWithTracker} from 'react-komposer'

import ShoppingForm from '/imports/components/ShoppingForm';

const calculateBills = (buyersName, receiversName, price) => {
  Meteor.call("calculateBills", this.props.flatmates, buyersName, receiversName, price,
    (err, res) => {
      if (err) {
        console.error(err);
      }
    });
}

const composer = (props, onData) => {
    let user = Meteor.user();
    if (user) {
    let flatName = user.profile.flat;

     let flatmatesSub = Meteor.subscribe("users-profile", flatName);
     if (flatmatesSub.ready()) {
       const flatmates = Meteor.users.find({
         profile:{
           flat: flatName
         }
       }).fetch();

       onData(null, {flatmates: flatmates, calculate: calculateBills});
     }


    } else {
     console.log("not ready");
    }
}

export default composeWithTracker(composer)(ShoppingForm);
