import React, { Component, PropTypes } from "react"
import { Link, withRouter } from "react-router"
import { Meteor } from "meteor/meteor"

import AppNavigationLink from "./AppNavigationLink"
import Isvg from "react-inlinesvg"

@withRouter
export default class AppNavigation extends Component {
  static propTypes = {
    currentUser: PropTypes.object,
    router: PropTypes.object
  }

  handleClick = () => {
    Meteor.logout(() => this.props.router.push("/"))
  }


  render() {
    const { currentUser } = this.props
    return (
      <div className="row bottom-xs app-navigation">
        <div className="col-xs-6">
          <div>
            <Link to="/" className="app-navigation__home-link">
              <Isvg src="/assets/images/logo.svg" className="app-navigation__logo" wrapper={React.DOM.div} />
              <h1 className="app-navigation__title">DollaCop</h1>
            </Link>
          </div>
          <span className="app-navigation__subtitle">Keep your dolla' straight!</span>
        </div>
        <nav className="col-xs-6">
          <h2 className="hidden">Main navigation</h2>
          <ul className="app-navigation__links">
            <li className="app-navigation__link"><AppNavigationLink to="/debts/new">New debt</AppNavigationLink></li>
            <li className="app-navigation__link"><AppNavigationLink to="/debts" onlyActiveOnIndex>Your debts</AppNavigationLink></li>
            <li className="app-navigation__link"><AppNavigationLink to="/receivables">Your receivables</AppNavigationLink></li>
            {currentUser._id && <li className="app-navigation__link"><button className="button button--pill" onClick={this.handleClick}>Log out</button></li>}
            {!currentUser._id && <li className="app-navigation__link"><Link className="button button--pill" to="/login">Log in</Link></li>}
          </ul>
        </nav>
      </div>
    )
  }
}
