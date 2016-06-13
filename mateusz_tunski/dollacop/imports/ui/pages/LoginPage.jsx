import React, { Component } from "react"
import { Link } from "react-router"

import LoginForm from "../components/LoginForm"

export default class LoginPage extends Component {
  render() {
    return (
      <div className="wrap">
        <h2 className="h1">Log in</h2>
        <LoginForm {...this.props} />
        Don't have an account? <Link to="/signup">Sign up</Link>!
      </div>
    )
  }
}
