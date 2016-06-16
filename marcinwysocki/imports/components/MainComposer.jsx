import {Meteor} from 'meteor/meteor'
import {composeWithTracker} from 'react-komposer'

import Flatmates from '/imports/collections/Flatmates';
import Manager from '/imports/components/Manager';

const composer = (props, onData) => {
     let flatmatesSub = Meteor.subscribe("flatmates-coll");
     if (flatmatesSub.ready()) {
       const flatmates = Flatmates.find({flat: "Skytower"}).fetch();
       onData(null, {flatmates});
     }
}

export default MainComposer = composeWithTracker(composer)(Manager);
