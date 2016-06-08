import React, { Component } from "react"
import { Meteor } from "meteor/meteor"
import { createContainer } from "meteor/react-meteor-data"

import { Debts } from "/imports/api/Debts"

import ReceivablesPage from "../pages/ReceivablesPage"

class ReceivablesContainer extends Component {
  static defaultProps = {
    receivables: []
  }

  constructor(props) {
    super(props)

    this.state = { summaries: [] }
    this.updateSummaries()
  }

  settleDebt = (debtId) => {
    Meteor.call("debts.settle", debtId)
    this.updateSummaries()
  }

  updateSummaries() {
    Meteor.call("debts.summary", (_, summaries) => this.setState({ summaries }))
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
  Meteor.subscribe("debts")

  return ({
    receivables: Debts.find({
      "creditor._id": props.currentUser._id,
      settled: false
    }, { sort: { createdAt: -1 } }).fetch()
  })
}, ReceivablesContainer)
