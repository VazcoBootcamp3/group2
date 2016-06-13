import React, { Component, PropTypes } from "react"
import { Meteor } from "meteor/meteor"
import TrackerReact from "meteor/ultimatejs:tracker-react"

import AppHeader from "../components/AppHeader"

import "flexboxgrid/css/flexboxgrid.css"
import "../styles/main.scss"

@TrackerReact
export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  }

  meteorData() {
    return { currentUser: Meteor.user() || { _id: null, name: "" } }
  }

  render() {
    const { children } = this.props
    const currentUser = this.meteorData()

    return (
      <div>
        <AppHeader {...currentUser} />
        <section className="app-content">
          {React.cloneElement(children, currentUser)}
        </section>
      </div>
    )
  }
}
