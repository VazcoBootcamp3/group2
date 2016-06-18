import {Meteor} from 'meteor/meteor'
import {composeWithTracker} from 'react-komposer'

import Layout from '/imports/common/Layout'

const composer = (props, onData) => {
    let isLoggedIn = Meteor.userId() !== null ? true : false;
    onData(null, {isLoggedIn});
}

export default composeWithTracker(composer)(Layout);
