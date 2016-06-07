import React, { Component, PropTypes } from "react"
import _ from "lodash"

export default class DebtForm extends Component {
  static propTypes = {
    currentUser: PropTypes.object,
    addDebt: PropTypes.func
  }

  constructor(props) {
    super(props)

    this.state = {
      debtors: [],
      items: [{ name: "", price: "" }]
    }
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.addDebt(this.state)
  }

  handleDebtorChange = (ev) => {
    let debtors = this.state.debtors
    const debtor = JSON.parse(ev.target.value)

    if (ev.target.checked) {
      debtors.push(debtor)
    } else {
      _.remove(debtors, el => el._id === debtor._id)
    }

    this.setState({ debtors: debtors })
  }

  handleNameChange = (ev, index) => {
    const items = this.state.items
    items[index].name = ev.target.value
    this.setState({ items: items })
  }

  handlePriceChange = (ev, index) => {
    const items = this.state.items
    items[index].price = parseInt(ev.target.value, 10)
    this.setState({ items: items })
  }

  addItem = () => {
    const items = this.state.items
    items.push({ name: "", price: "" })
    this.setState({ items: items })
  }

  removeItem = (index) => {
    const items = this.state.items
    items.splice(index, 1)
    this.setState({ items: items })
  }

  renderItemsFields() {
    return (
      <fieldset>
        <legend>Items</legend>
        {
          this.state.items.map((item, index) => {
            return (
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
                  disabled={this.state.items.length === 1}
                  onClick={() => { this.removeItem(index) }}
                >
                  Remove item
                </button>
              </div>
            )
          })
        }
        <button
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
          this.props.users.map(user => {
            return (
              <label key={user._id}>
                <input
                  type="checkbox"
                  defaultValue={JSON.stringify({ _id: user._id, name: user.profile.name })}
                  onChange={this.handleDebtorChange}
                />
                {user.profile.name}
              </label>
            )
          })

        }
      </fieldset>
    )
  }

  renderForm() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderItemsFields()}
        {this.renderDebtorsFields()}
        <button disabled={this.state.debtors.length === 0}>Submit</button>
      </form>
    )
  }

  render() {
    return (
      <div>
        <h1>New debt</h1>
        {this.renderForm()}
      </div>
    )
  }
}


