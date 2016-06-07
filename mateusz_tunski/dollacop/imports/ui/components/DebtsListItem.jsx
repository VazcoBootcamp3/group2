import React, { Component, PropTypes } from "react"

export default class DebtsListItem extends Component {
  static propTypes = {
    _id: PropTypes.string,
    currentUser: PropTypes.object,
    creditor: PropTypes.object,
    debtors: PropTypes.arrayOf(PropTypes.object),
    items: PropTypes.arrayOf(PropTypes.object),
    settleDebt: PropTypes.func
  }

  handleClick = () => {
    this.props.settleDebt(this.props._id)
  }

  rednderSettle() {
    const { currentUser, creditor } = this.props

    if (currentUser._id === creditor._id) {
      return (
        <button onClick={this.handleClick}>
          Settle
        </button>
      )
    }
    return null
  }

  renderItems() {
    return (
      this.props.items.map((item, index) =>
        <li key={index}>{item.name} {item.price}</li>
      )
    )
  }
  renderDebtors() {
    const { debtors } = this.props

    return (
      debtors.map((debtor, index) => {
        const affix = (debtors.length === index + 1 ? "" : ", ")
        return (`${debtor.name}${affix}`)
      })
    )
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
