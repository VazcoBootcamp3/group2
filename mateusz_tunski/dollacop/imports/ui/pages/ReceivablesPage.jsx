import React, { Component, PropTypes } from "react"

import SummariesList from "../components/SummariesList"
import DebtsList from "../components/DebtsList"

export default class ReceivablesPage extends Component {
  static propTypes = {
    currentUser: PropTypes.object,
    receivables: PropTypes.arrayOf(PropTypes.object),
    summaries: PropTypes.arrayOf(PropTypes.object),
    settleDebt: PropTypes.func
  }

  render() {
    return (
      <div>
        <h1>Your receivables</h1>
        <h2>Summary</h2>
        <SummariesList
          summaries={this.props.summaries}
        />
        <hr />
        <DebtsList
          currentUser={this.props.currentUser}
          debts={this.props.receivables}
          settleDebt={this.props.settleDebt}
        />
      </div>
    )
  }
}
