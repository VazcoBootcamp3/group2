import React, { Component, PropTypes } from "react"
import { createContainer } from "meteor/react-meteor-data"
import { Meteor } from "meteor/meteor"

import { Debts } from "/imports/api/Debts"
import "/imports/api/userData"

class DebtsContainer extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    currentUser: PropTypes.object
  }

  static defaultProps = {
    debts: [],
    users: []
  }

  render() {
    const { children, ...others } = this.props

    return (
      <div>
        {children && React.cloneElement(children, { ...others })}
      </div>
    )
  }
}

export default createContainer((props) => {
  Meteor.subscribe("debts")
  Meteor.subscribe("userData")
  const { currentUser } = props

  return ({
    debts: Debts.find({ "debtors._id": currentUser._id, settled: false }).fetch(),
    users: Meteor.users.find({ _id: { $not: currentUser._id } }).fetch()
  })
}, DebtsContainer)
