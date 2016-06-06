import React, { Component, PropTypes } from "react"

import DebtsListItem from "./DebtsListItem"

export default class DebtsList extends Component {
  static propTypes = {
    currentUser: PropTypes.object,
    debts: PropTypes.arrayOf(PropTypes.object),
    settleDebt: PropTypes.func
  }

  renderDebts() {
    return (
      this.props.debts.map(debt =>
        <div key={debt._id}>
          <DebtsListItem
            {...debt}
            currentUser={this.props.currentUser}
            settleDebt={this.props.settleDebt}
          />
        </div>
      )
    )
  }

  render() {
    return (
      <div>
        {this.renderDebts()}
      </div>
    )
  }
}


