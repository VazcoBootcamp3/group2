import React, { Component, PropTypes } from "react"
import { createContainer } from "meteor/react-meteor-data"

import { Debts } from "/imports/api/Debts"

import DebtsPage from "../pages/DebtsPage"

class DebtsContainer extends Component {
  static propTypes = {
    currentUser: PropTypes.object,
    debts: PropTypes.arrayOf(PropTypes.object)
  }

  static defaultProps = {
    debts: []
  }

  render() {
    return (
      <div>
        <DebtsPage {...this.props} />
      </div>
    )
  }
}

export default createContainer((props) => {
  return ({
    debts: Debts.find({"debtors._id": props.currentUser._id}).fetch()
  })
}, DebtsContainer)
