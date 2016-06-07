import React, { Component, PropTypes } from "react"
import { createContainer } from "meteor/react-meteor-data"
import { Meteor } from "meteor/meteor"

import { Debts } from "/imports/api/Debts"

class DebtsContainer extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    currentUser: PropTypes.object
  }

  static defaultProps = {
    debts: [],
    users: []
  }

  addDebt = (debt) => {
    const { _id, profile: { name } } = this.props.currentUser
    const creditor = { _id, name }

    Debts.insert({
      ...debt,
      creditor,
      settled: false,
      createdAt: Date.now()
    })
  }

  render() {
    const { children, ...others } = this.props

    return (
      <div>
        {children && React.cloneElement(children, {
          ...others,
          addDebt: this.addDebt
        })}
      </div>
    )
  }
}

export default createContainer((props) => {
  const { currentUser } = props

  return ({
    debts: Debts.find({ "debtors._id": currentUser._id, settled: false }).fetch(),
    users: Meteor.users.find({ _id: { $not: currentUser._id } }).fetch()
  })
}, DebtsContainer)
