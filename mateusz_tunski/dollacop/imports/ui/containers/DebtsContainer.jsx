import React, { Component, PropTypes } from "react"
import { Meteor } from "meteor/meteor"
import TrackerReact from "meteor/ultimatejs:tracker-react"

import { Debts } from "/imports/api/Debts"
import "/imports/api/Users"

@TrackerReact
export default class DebtsContainer extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    currentUser: PropTypes.object
  }

  constructor(props) {
    super(props)

    this.state = {
      subscription: {
        debts: Meteor.subscribe("debts"),
        users: Meteor.subscribe("users")
      }
    }
  }

  componentWillUnmount() {
    this.state.subscription.debts.stop()
    this.state.subscription.users.stop()
  }

  meteorData() {
    const { currentUser } = this.props

    return {
      users: Meteor.users.find({ _id: { $ne: currentUser._id } }).fetch(),
      debts: Debts.find().fetch()
    }
  }

  render() {
    const { children, currentUser } = this.props

    return (
      React.cloneElement(children, { currentUser, ...this.meteorData() })
    )
  }
}
