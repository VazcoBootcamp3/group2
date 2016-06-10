import React, { Component, PropTypes } from "react"

import DebtsList from "../components/DebtsList"

export default class DebtsPage extends Component {
  static propTypes = {
    currentUser: PropTypes.object,
    debts: PropTypes.arrayOf(PropTypes.object)
  }

  render() {
    return (
      <div>
        <h2 className="h1">Your debts</h2>
        <DebtsList {...this.props} />
      </div>
    )
  }
}
