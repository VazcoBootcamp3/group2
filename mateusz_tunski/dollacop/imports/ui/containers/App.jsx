import React, { Component, PropTypes } from "react"
import { createContainer } from "meteor/react-meteor-data"
import { Meteor } from "meteor/meteor"

import AppHeader from "../components/AppHeader"

import "flexboxgrid/css/flexboxgrid.css"
import "../styles/main.scss"

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    currentUser: PropTypes.object
  }

  static defaultProps = {
    currentUser: { _id: null, name: "" }
  }

  render() {
    const { children, currentUser } = this.props

    return (
      <div>
        <AppHeader currentUser={currentUser} />
        {children && React.cloneElement(children, { currentUser })}
      </div>
    )
  }
}

export default createContainer((props) => ({
  currentUser: Meteor.user() || props.currentUser
}), App)
