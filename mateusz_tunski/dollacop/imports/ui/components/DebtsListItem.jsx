import React, { Component, PropTypes } from "react"

export default class DebtsListItem extends Component {
  static propTypes = {
    currentUser: PropTypes.object,
    creditor: PropTypes.object,
    debtors: PropTypes.arrayOf(PropTypes.object),
    items: PropTypes.arrayOf(PropTypes.object),
    settled: PropTypes.bool
  }

  renderDebtors() {
    return (
      this.props.debtors.map((debtor, index) => {
        const affix = (this.props.debtors.length === index + 1 ? "" : ", ")
        return (`${debtor.name}${affix}`)
      })
    )
  }

  renderItems() {
    return (
      this.props.items.map((item, index) =>
        <li key={index}>{item.name} {item.price}</li>
      )
    )
  }

  rednderSettle() {
    if (this.props.currentUser._id === this.props.creditor._id) {
      return(
        <button onClick={this.handleClick}>
          Settle
        </button>
      )
    }
  }

  render() {
    return (
      <div>
        <p>Creditor: {this.props.creditor.name}</p>
        <ul>{this.renderItems()}</ul>
        <p>Debtors: {this.renderDebtors()}</p>
        {this.rednderSettle()}
      </div>
    )
  }
}


