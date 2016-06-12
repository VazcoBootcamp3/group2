import React, { Component } from "react"

import { Link } from "react-router"

export default class LandingPage extends Component {
  render() {
    return (
      <div className="wrap">
        <h2 className="h1">Welcome to DollaCop!</h2>
        <p>Login required to access the application.</p>
        <p>
          <Link to="/login">Log in,</Link> or <Link to="/signup">sign up</Link>
          {' '} if you don't have an account yet!
        </p>
      </div>
    )
  }
}
