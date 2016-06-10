import React, { Component, PropTypes } from "react"
import { Meteor } from "meteor/meteor"
import { withRouter } from "react-router"

@withRouter
export default class LoginForm extends Component {
  static propTypes = {
    router: PropTypes.object
  }

  constructor(props) {
    super(props)

    this.state = {
      email: "",
      password: ""
    }
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    const { email, password } = this.state

    Meteor.loginWithPassword(email, password, (error) => {
      if (error) {
        alert("Invalid credentials.") // Bleh, alert.
      } else {
        this.props.router.push("/debts")
      }
    })
  }

  handleEmailChange = (ev) => {
    this.setState({ email: ev.target.value })
  }

  handlePasswordChange = (ev) => {
    this.setState({ password: ev.target.value })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          required
          onChange={this.handleEmailChange}
        />
        <input
          type="password"
          placeholder="Password"
          required
          onChange={this.handlePasswordChange}
        />
        <button>Log in</button>
      </form>
    )
  }
}
