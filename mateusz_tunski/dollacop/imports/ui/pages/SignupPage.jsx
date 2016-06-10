import React, { Component } from "react"

import SignupForm from "../components/SignupForm"

export default class SignupPage extends Component {
  render() {
    return (
      <div>
        <h2 className="h1">Sign up</h2>
        <SignupForm />
      </div>
    )
  }
}
