import React, { Component, PropTypes } from "react"
import { Meteor } from "meteor/meteor"
import _ from "lodash"

export default class DebtForm extends Component {
  static propTypes = {
    users: PropTypes.arrayOf(PropTypes.object)
  }

  state = {
    debtors: [],
    items: [{ name: "", price: "" }]
  }

  handleSubmit = (ev) => {
    ev.preventDefault()

    const { debtors, items } = this.state
    Meteor.call("debts.insert", debtors, items)

    this.setState({
      debtors: [],
      items: [{ name: "", price: "" }]
    })
  }

  handleDebtorChange = (ev) => {
    const { debtors } = this.state
    const debtor = JSON.parse(ev.target.value)

    if (ev.target.checked) {
      debtors.push(debtor)
    } else {
      _.remove(debtors, el => el._id === debtor._id)
    }

    this.setState({ debtors })
  }

  handleNameChange = (ev, index) => {
    const { items } = this.state
    items[index].name = ev.target.value
    this.setState({ items })
  }

  handlePriceChange = (ev, index) => {
    const { items } = this.state
    items[index].price = parseInt(ev.target.value, 10)
    this.setState({ items })
  }

  addItem = () => {
    const { items } = this.state
    items.push({ name: "", price: "" })
    this.setState({ items })
  }

  removeItem = (index) => {
    const { items } = this.state
    items.splice(index, 1)
    this.setState({ items })
  }

  renderItemsFields() {
    const { items } = this.state

    return (
      <fieldset>
        <legend>Items</legend>
        {
          items.map((item, index) => (
            <div key={index}>
              <input
                type="text"
                value={item.name}
                required
                placeholder="Name"
                onChange={(ev) => { this.handleNameChange(ev, index) }}
              />
              <input
                type="number"
                value={item.price}
                required
                placeholder="Price"
                onChange={(ev) => { this.handlePriceChange(ev, index) }}
              />
              <button
                type="button"
                className="button"
                disabled={items.length === 1}
                onClick={() => { this.removeItem(index) }}
              >
                Remove item
              </button>
            </div>
          ))
        }
        <button
          className="button"
          type="button"
          onClick={this.addItem}
        >
          Add item
        </button>
      </fieldset>
    )
  }

  renderDebtorsFields() {
    return (
      <fieldset>
        <legend>Debtors</legend>
        {
          this.props.users.map(user => (
            <label key={user._id}>
              <input
                type="checkbox"
                checked={_.some(this.state.debtors, ["_id", user._id])}
                value={JSON.stringify({ _id: user._id, name: user.profile.name })}
                onChange={this.handleDebtorChange}
              />
              {user.profile.name}
            </label>
          ))
        }
      </fieldset>
    )
  }

  renderForm() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderItemsFields()}
        {this.renderDebtorsFields()}
        <button
          className="button"
          disabled={this.state.debtors.length === 0}
        >
          Submit
        </button>
      </form>
    )
  }

  render() {
    return (
      <div className="container">
        <h2 className="h1">New debt</h2>
        {this.renderForm()}
      </div>
    )
  }
}
