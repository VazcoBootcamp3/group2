import React, { Component, PropTypes } from "react"
import { Link } from "react-router"

import GroupsList from "../components/GroupsList"

export default class GroupsPage extends Component {
  static propTypes = {
    groups: PropTypes.arrayOf(PropTypes.object)
  }

  render() {
    return (
      <div className="wrap">
        <div className="row">
          <div className="col-xs-6">
            <h2 className="h1">Your groups</h2>
          </div>
          <div className="col-xs-6 text-right">
            <Link className="button button--pill" to="/groups/new">+ New group</Link>
          </div>
        </div>
        <div className="row">
          <GroupsList {...this.props} />
        </div>
      </div>
    )
  }
}
