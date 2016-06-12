import React, { Component, PropTypes } from "react"
import { Meteor } from "meteor/meteor"
import TrackerReact from "meteor/ultimatejs:tracker-react"

import { Debts } from "/imports/api/Debts"

import ReceivablesPage from "../pages/ReceivablesPage"

@TrackerReact
export default class ReceivablesContainer extends Component {
  static propTypes = {
    currentUser: PropTypes.object
  }

  constructor(props) {
    super(props)

    this.state = {
      summaries: [],
      subscription: {
        receivables: Meteor.subscribe("debts")
      }
    }

    this.updateSummaries()
  }

  componentWillUnmount() {
    this.state.subscription.receivables.stop()
  }

  settleDebt = (debtId) => {
    Meteor.call("debts.settle", debtId)
    this.updateSummaries()
  }

  updateSummaries() {
    Meteor.call("debts.summary", (_, summaries) => this.setState({ summaries }))
  }

  meteorData() {
    const { currentUser } = this.props

    return ({
      receivables: Debts.find({
        "creditor._id": currentUser._id,
        settled: false
      }, { sort: { createdAt: -1 } }).fetch()
    })
  }

  render() {
    const { currentUser } = this.props
    const { summaries } = this.state

    return (
      <div>
        <ReceivablesPage
          currentUser={currentUser}
          summaries={summaries}
          settleDebt={this.settleDebt}
          {...this.meteorData()}
        />
      </div>
    )
  }
}
