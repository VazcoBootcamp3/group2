import React, { Component, PropTypes } from "react"
import { createContainer } from "meteor/react-meteor-data"

import { Debts } from "/imports/api/Debts"

import ReceivablesPage from "../pages/ReceivablesPage"

class ReceivablesContainer extends Component {
  static propTypes = {
    currentUser: PropTypes.object,
    receivables: PropTypes.arrayOf(PropTypes.object),
    summaries: PropTypes.arrayOf(PropTypes.object)
  }

  static defaultProps = {
    receivables: [],
    summaries: []
  }

  render() {
    return (
      <div>
        <ReceivablesPage {...this.props} />
      </div>
    )
  }
}

export default createContainer((props) => {
  return ({
    receivables: Debts.find({"creditor._id": props.currentUser._id}).fetch(),
    // summaries: Debts.find({"debtors._id": props.currentUser._id}).fetch()
  })
}, ReceivablesContainer)
