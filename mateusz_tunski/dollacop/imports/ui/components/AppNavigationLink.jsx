import React, { Component } from "react"
import { Link } from "react-router"

export default class AppNavigationLink extends Component {
  render() {
    return (
      <Link {...this.props} activeClassName="app-navigation__link--active" />
    )
  }
}
