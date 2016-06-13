import React, { Component, PropTypes } from "react"
import { Link } from "react-router"

import DebtsSummary from "../components/DebtsSummary"
import DebtsList from "../components/DebtsList"

export default class ReceivablesPage extends Component {
  static propTypes = {
    currentUser: PropTypes.object,
    receivables: PropTypes.arrayOf(PropTypes.object),
    debtsSummary: PropTypes.arrayOf(PropTypes.object),
    settleDebt: PropTypes.func
  }

  render() {
    const { receivables: debts, ...other } = this.props

    return (
      <div className="wrap">
        <div className="row">
          <div className="col-xs-8">
            <div className="row">
              <div className="col-xs-6">
                <h2 className="h1">Your receivables</h2>
              </div>
              <div className="col-xs-6 text-right">
                <Link className="button button--pill" to="/debts/new">+ New debt</Link>
              </div>
            </div>
            <div className="row">
              <DebtsList
                debts={debts}
                {...other}
              />
            </div>
          </div>
          <div className="col-xs-4">
            <h3 className="h1">Summary</h3>
            <DebtsSummary
              summary={this.props.debtsSummary}
            />
          </div>
        </div>
      </div>
    )
  }
}
