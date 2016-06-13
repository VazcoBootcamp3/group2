import React, { Component, PropTypes } from "react"
import { Meteor } from "meteor/meteor"
import TrackerReact from "meteor/ultimatejs:tracker-react"

import GroupsPage from "/imports/ui/pages/GroupsPage"

import { Groups } from "/imports/api/Groups"

@TrackerReact
export default class GroupsContainer extends Component {
  static propTypes = {
    currentUser: PropTypes.object
  }

  state = {
    subscription: {
      groups: Meteor.subscribe("groups")
    }
  }

  componentWillUnmount() {
    this.state.subscription.groups.stop()
  }

  removeGroup(groupId) {
    Meteor.call("groups.remove", groupId)
  }

  acceptInvitation(groupId) {
    Meteor.call("groups.acceptInvitation", groupId)
  }

  leaveGroup(groupId) {
    Meteor.call("groups.leave", groupId)
  }

  meteorData() {
    return {
      groups: Groups.find().fetch()
    }
  }

  render() {
    const { currentUser } = this.props

    return (
      <GroupsPage
        currentUser={currentUser}
        {...this.meteorData()}
        removeGroup={this.removeGroup}
        acceptInvitation={this.acceptInvitation}
        leaveGroup={this.leaveGroup}
      />
    )
  }
}
