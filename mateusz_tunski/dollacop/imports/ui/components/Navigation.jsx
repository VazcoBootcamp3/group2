import React, { Component } from "react"

import NavLink from "./NavLink"

export default class Navigation extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><NavLink to="/debts/new">New debt</NavLink></li>
          <li><NavLink to="/">Your debts</NavLink></li>
          <li><NavLink to="/receivables">Your receivables</NavLink></li>
        </ul>
      </nav>
    )
  }
}
