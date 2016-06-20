import {composeWithTracker} from 'react-komposer';
import ReportView from '/client/components/ReportView.jsx'

function composer(props, onData) {
  const handle = Meteor.subscribe("expenses");
  if (handle.ready()) {
    const expenses = Expenses.find().fetch();
    onData(null, {expenses});
  };
};  

export default composeWithTracker(composer)(ReportView);
