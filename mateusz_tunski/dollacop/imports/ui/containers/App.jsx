import React, { Component, PropTypes } from "react"

import Navigation from "../components/Navigation"

export default class App extends Component {
  propTypes = {
    children: PropTypes.object.isRequired
  }

  render() {
    return (
      <div>
        <Navigation />
        {this.props.children}
      </div>
    )
  }
}
