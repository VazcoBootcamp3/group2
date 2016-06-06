import React, { Component } from "react"

import DebtsList from "../components/DebtsList"

export default class ReceivablesPage extends Component {
  render() {
    return (
      <div>
        <h1>Your receivables</h1>
        <h2>Summary</h2>
        <hr />
        <DebtsList
          currentUser={this.props.currentUser}
          debts={this.props.receivables}
        />
      </div>
    )
  }
}
