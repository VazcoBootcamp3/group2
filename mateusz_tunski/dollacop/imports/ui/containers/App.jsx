import React, { Component, PropTypes } from "react"
import { createContainer } from "meteor/react-meteor-data"
import { Meteor } from "meteor/meteor"

import Navigation from "../components/Navigation"
import AccountsUIWrapper from "../components/AccountsUIWrapper.jsx"

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    currentUser: PropTypes.object
  }

  static defaultProps = {
    currentUser: { _id: null, name: "" }
  }

  renderLoggedInItems() {
    const { children, currentUser } = this.props

    if (currentUser._id) {
      return (
        <div>
          <Navigation />
          {children && React.cloneElement(children, { currentUser })}
        </div>
      )
    }
    return null
  }

  render() {
    return (
      <div>
        <AccountsUIWrapper />
        {this.renderLoggedInItems()}
      </div>
    )
  }
}

export default createContainer((props) => ({
  currentUser: Meteor.user() || props.currentUser
}), App)
