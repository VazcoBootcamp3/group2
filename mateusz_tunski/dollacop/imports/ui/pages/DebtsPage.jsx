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
        <h1>Your debts</h1>
        <DebtsList {...this.props} />
      </div>
    )
  }
}
