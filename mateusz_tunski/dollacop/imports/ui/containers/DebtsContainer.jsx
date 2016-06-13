import React, { Component, PropTypes } from "react"
import { Meteor } from "meteor/meteor"
import TrackerReact from "meteor/ultimatejs:tracker-react"

import DebtsPage from "/imports/ui/pages/DebtsPage"

import { Debts } from "/imports/api/Debts"

@TrackerReact
export default class DebtsContainer extends Component {
  static propTypes = {
    currentUser: PropTypes.object
  }

  state = {
    subscription: {
      debts: Meteor.subscribe("debts")
    }
  }

  componentWillUnmount() {
    this.state.subscription.debts.stop()
  }

  meteorData() {
    return {
      debts: Debts.find().fetch()
    }
  }

  render() {
    const { currentUser } = this.props

    return (
      <DebtsPage currentUser={currentUser} {...this.meteorData()} />
    )
  }
}
