import React, { Component, PropTypes } from "react"
import { createContainer } from "meteor/react-meteor-data"

import Navigation from "../components/Navigation"
import AccountsUIWrapper from "../components/AccountsUIWrapper.jsx"

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    currentUser: PropTypes.object
  }

  render() {
    return (
      <div>
        <AccountsUIWrapper />
        <Navigation />
        {this.props.children && React.cloneElement(this.props.children, {
          currentUser: this.props.currentUser
        })}
      </div>
    )
  }
}

export default createContainer(() => {
  return ({
    currentUser: Meteor.user() || { _id: null, name: "" }
  })
}, App)
