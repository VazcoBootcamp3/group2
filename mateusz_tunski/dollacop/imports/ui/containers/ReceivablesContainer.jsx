import React, { Component, PropTypes } from "react"

import ReceivablesPage from "../pages/ReceivablesPage"

export default class ReceivablesContainer extends Component {
  static propTypes = {
    currentUser: PropTypes.object
  }

  render() {
    return (
      <div>
        <ReceivablesPage {...this.props} />
      </div>
    )
  }
}
