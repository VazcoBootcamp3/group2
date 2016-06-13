import React, { Component, PropTypes } from "react"

import GroupsListItem from "./GroupsListItem"

export default class GroupsList extends Component {
  static propTypes = {
    groups: PropTypes.arrayOf(PropTypes.object)
  }

  renderGroups() {
    return (
      this.props.groups.map(group =>
        <GroupsListItem
          {...this.props}
          {...group}
          key={group._id}
        />
      )
    )
  }

  render() {
    return (
      <div className="col-xs-12">
        {this.renderGroups()}
      </div>
    )
  }
}
