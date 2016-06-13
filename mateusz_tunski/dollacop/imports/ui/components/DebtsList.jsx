import React, { Component, PropTypes } from "react"

import DebtsListItem from "./DebtsListItem"

export default class DebtsList extends Component {
  static propTypes = {
    debts: PropTypes.arrayOf(PropTypes.object)
  }

  renderDebts() {
    return (
      this.props.debts.map(debt =>
        <DebtsListItem
          {...this.props}
          {...debt}
          key={debt._id}
        />
      )
    )
  }

  render() {
    return (
      <div className="col-xs-12">
        {this.renderDebts()}
      </div>
    )
  }
}
