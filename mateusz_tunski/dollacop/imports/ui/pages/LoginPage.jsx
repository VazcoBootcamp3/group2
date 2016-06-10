import React, { Component } from "react"

import LoginForm from "../components/LoginForm"

export default class LoginPage extends Component {
  render() {
    return (
      <div>
        <h2 className="h1">Sign in</h2>
        <LoginForm />
      </div>
    )
  }
}
