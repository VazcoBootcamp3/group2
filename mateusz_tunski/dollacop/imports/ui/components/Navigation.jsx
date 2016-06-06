import React, { Component } from "react"

import NavLink from "./NavLink"

export default class Navigation extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><NavLink to="/" onlyActiveOnIndex>Your debts</NavLink></li>
          <li><NavLink to="/receivables">Your receivables</NavLink></li>
        </ul>
      </nav>
    )
  }
}
