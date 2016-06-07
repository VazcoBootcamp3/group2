import React, { Component, PropTypes } from "react"

import DebtsListItem from "./DebtsListItem"

export default class DebtsList extends Component {
  static propTypes = {
    debts: PropTypes.arrayOf(PropTypes.object)
  }

  renderDebts() {
    return (
      this.props.debts.map(debt =>
        <div key={debt._id}>
          <DebtsListItem
            {...this.props}
            {...debt}
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
