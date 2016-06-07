import React, { Component, PropTypes } from "react"
import { Meteor } from "meteor/meteor"
import { createContainer } from "meteor/react-meteor-data"

import { Debts } from "/imports/api/Debts"

import ReceivablesPage from "../pages/ReceivablesPage"

class ReceivablesContainer extends Component {
  static propTypes = {
    currentUser: PropTypes.object,
    receivables: PropTypes.arrayOf(PropTypes.object)
  }

  static defaultProps = {
    receivables: []
  }

  constructor(props) {
    super(props)

    this.state = {
      summaries: []
    }

    this.updateSummaries()
  }

  updateSummaries() {
    Meteor.call("debts.summary", (ev, summaries) => {
      this.setState({ summaries: summaries })
    })
  }

  settleDebt = (debtId) => {
    Debts.update({ _id: debtId }, { $set: { settled: true } })
    this.updateSummaries()
  }

  render() {
    return (
      <div>
        <ReceivablesPage
          {...this.props}
          summaries={this.state.summaries}
          settleDebt={this.settleDebt}
        />
      </div>
    )
  }
}

export default createContainer((props) => {
  return ({
    receivables: Debts.find({
      "creditor._id": props.currentUser._id,
      settled: false
    }, { sort: { createdAt: -1 }}).fetch(),
  })
}, ReceivablesContainer)
