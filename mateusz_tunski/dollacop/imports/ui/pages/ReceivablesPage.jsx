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
      <div className="container">
        <h2 className="h1">Your receivables</h2>
        <h3 className="h2">Summary</h3>
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
