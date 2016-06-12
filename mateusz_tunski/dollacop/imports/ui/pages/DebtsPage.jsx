import React, { Component, PropTypes } from "react"

import DebtsList from "../components/DebtsList"

export default class DebtsPage extends Component {
  static propTypes = {
    debts: PropTypes.arrayOf(PropTypes.object)
  }

  render() {
    return (
      <div className="container">
        <h2 className="h1">Your debts</h2>
        <DebtsList {...this.props} />
      </div>
    )
  }
}
