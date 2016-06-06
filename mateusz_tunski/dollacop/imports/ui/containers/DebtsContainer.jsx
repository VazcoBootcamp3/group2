import React, { Component, PropTypesd } from "react"

import DebtsPage from "../pages/DebtsPage"

export default class DebtsContainer extends Component {
  static propTypes = {
    currentUser: PropTypes.object
  }

  render() {
    return (
      <div>
        <DebtsPage ...this.props />
      </div>
    )
  }
}
