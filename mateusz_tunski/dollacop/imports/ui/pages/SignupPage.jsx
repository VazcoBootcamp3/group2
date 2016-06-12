import React, { Component } from "react"
import { Link } from "react-router"

import SignupForm from "../components/SignupForm"

export default class SignupPage extends Component {
  render() {
    return (
      <div className="container">
        <h2 className="h1">Sign up</h2>
        <SignupForm />
        Already have an account? <Link to="/login">Log in</Link>!
      </div>
    )
  }
}
