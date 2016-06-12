import React, { Component, PropTypes } from "react"
import { Meteor } from "meteor/meteor"
import TrackerReact from "meteor/ultimatejs:tracker-react"

import { Debts, DebtsSummary } from "/imports/api/Debts"

import ReceivablesPage from "../pages/ReceivablesPage"

@TrackerReact
export default class ReceivablesContainer extends Component {
  static propTypes = {
    currentUser: PropTypes.object
  }

  state = {
    subscription: {
      receivables: Meteor.subscribe("receivables"),
      debtsSummary: Meteor.subscribe("debtsSummary")
    }
  }

  componentWillUnmount() {
    this.state.subscription.receivables.stop()
    this.state.subscription.debtsSummary.stop()
  }

  settleDebt = (debtId) => {
    Meteor.call("debts.settle", debtId)
  }

  meteorData() {
    return ({
      receivables: Debts.find().fetch(),
      debtsSummary: DebtsSummary.find().fetch()
    })
  }

  render() {
    const { currentUser } = this.props

    return (
      <ReceivablesPage
        currentUser={currentUser}
        settleDebt={this.settleDebt}
        {...this.meteorData()}
      />
    )
  }
}
