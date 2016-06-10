import React, { Component } from "react"
import { Link } from "react-router"

import AccountsUIWrapper from "../components/AccountsUIWrapper.jsx"
import NavLink from "./NavLink"

export default class AppNavigation extends Component {
  render() {
    return (
      <div className="row bottom-xs app-navigation">
        <div className="col-xs-6 gutterless">
          <div className="container">
            <Link to="/" className="app-navigation__home-link">
              <img src="/assets/images/logo.svg" className="app-navigation__logo" alt="DollaCop" />
              <h1 className="app-navigation__title">DollaCop</h1>
            </Link>
          </div>
          <div className="container">
            <span className="app-navigation__subtitle">Keep your dolla' straight!</span>
          </div>
        </div>
        <nav className="col-xs-6 gutterless">
          <h2 className="hidden">Main navigation</h2>
          <ul className="app-navigation__links">
            <li className="app-navigation__link"><NavLink to="/debts/new">New debt</NavLink></li>
            <li className="app-navigation__link"><NavLink to="/debts" onlyActiveOnIndex>Your debts</NavLink></li>
            <li className="app-navigation__link"><NavLink to="/receivables">Your receivables</NavLink></li>
            <li className="app-navigation__link"><AccountsUIWrapper /></li>
          </ul>
        </nav>
      </div>
    )
  }
}
