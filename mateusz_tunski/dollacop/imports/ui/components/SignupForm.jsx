import React, { Component, PropTypes } from "react"
import { withRouter } from "react-router"
import { Accounts } from "meteor/accounts-base"

@withRouter
export default class SignupForm extends Component {
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
    const profile = { name: email.split("@")[0] }

    Accounts.createUser({ email, password, profile }, (error) => {
      if (error) {
        alert("Ooops, something went wrong.") // Bleh, alert.
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
        <button className="button">Sign up</button>
      </form>
    )
  }
}
