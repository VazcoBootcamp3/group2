import React, { Component, PropTypes } from "react"
import { createContainer } from "meteor/react-meteor-data"
import { Meteor } from "meteor/meteor"

import { Debts } from "/imports/api/Debts"

import DebtsPage from "../pages/DebtsPage"

class DebtsContainer extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    currentUser: PropTypes.object,
    debts: PropTypes.arrayOf(PropTypes.object)
  }

  static defaultProps = {
    debts: []
  }

  addDebt = (debt) => {
    Debts.insert({
      creditor: {
        _id: this.props.currentUser._id,
        name: this.props.currentUser.profile.name
      },
      debtors: debt.debtors,
      items: debt.items,
      settled: false,
      createdAt: Date.now()
    })
  }

  render() {
    return (
      <div>
        {this.props.children && React.cloneElement(this.props.children, {
          currentUser: this.props.currentUser,
          debts: this.props.debts,
          users: this.props.users,
          addDebt: this.addDebt
        })}
      </div>
    )
  }
}

export default createContainer((props) => {
  return ({
    debts: Debts.find({"debtors._id": props.currentUser._id, settled: false }).fetch(),
    users: Meteor.users.find({ _id: { $not: props.currentUser._id } }).fetch()
  })
}, DebtsContainer)
