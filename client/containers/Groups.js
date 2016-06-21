import {composeWithTracker} from 'react-komposer';
import GroupsComponent from '/client/components/Groups.jsx'

function composer(props, onData) {
  const handle = Meteor.subscribe("groups");
  if (handle.ready()) {
    const groups = Groups.find().fetch();
    onData(null, {groups});
  };
};

export default composeWithTracker(composer)(GroupsComponent);
