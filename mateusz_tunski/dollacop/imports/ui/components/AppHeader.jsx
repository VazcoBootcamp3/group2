import React, { Component } from "react"

import AppNavigation from "../components/AppNavigation"

export default class AppHeader extends Component {
  render() {
    return (
      <header className="app-header">
        <div className="container">
          <AppNavigation {...this.props} />
        </div>
      </header>
    )
  }
}
