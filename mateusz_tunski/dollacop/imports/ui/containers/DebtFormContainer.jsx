import React, { Component, PropTypes } from "react"
import { Meteor } from "meteor/meteor"
import TrackerReact from "meteor/ultimatejs:tracker-react"

import DebtForm from "../components/DebtForm"

import "/imports/api/Users"

@TrackerReact
export default class DebtsFormContainer extends Component {
  static propTypes = {
    currentUser: PropTypes.object
  }

  state = {
    subscription: {
      users: Meteor.subscribe("users")
    }
  }

  componentWillUnmount() {
    this.state.subscription.users.stop()
  }

  meteorData() {
    const { currentUser } = this.props

    return {
      users: Meteor.users.find({ _id: { $ne: currentUser._id } }).fetch()
    }
  }

  render() {
    const { currentUser } = this.props

    return (
      <DebtForm {...this.meteorData()} />
    )
  }
}
