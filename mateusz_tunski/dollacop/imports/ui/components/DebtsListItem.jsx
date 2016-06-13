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
        <button
          className="button"
          onClick={this.handleClick}
        >
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

  renderCreditor() {
    const { currentUser, creditor } = this.props

    if (currentUser._id !== creditor._id) {
      return (
        <div>
          Creditor:
          {creditor.name}
        </div>
      )
    }
    return null
  }

  renderDebtors() {
    const { currentUser, creditor, debtors } = this.props

    if (currentUser._id === creditor._id) {
      return (
        <div>
          Debtors:
          {
            debtors.map((debtor, index) => {
              const affix = (debtors.length === index + 1 ? "" : ", ")
              return (`${debtor.name}${affix}`)
            })
          }
        </div>
      )
    }
    return null
  }

  render() {
    return (
      <div className="row debts__item">
        <div className="col-xs-10">
          {this.renderCreditor()}
          {this.renderDebtors()}
          {this.renderItems()}
        </div>
        <div className="col-xs-2">
          {this.rednderSettle()}
        </div>
      </div>
    )
  }
}
