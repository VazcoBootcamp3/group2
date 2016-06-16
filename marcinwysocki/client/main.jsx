import {Meteor} from 'meteor/meteor';
import {composeWithTracker} from 'react-komposer'
import React from 'react';
import {render} from 'react-dom';

import MainComposer from '/imports/components/MainComposer';

Meteor.startup(() => {
    render(<MainComposer />, document.getElementById('app'));
});
