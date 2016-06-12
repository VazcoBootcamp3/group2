import React, { Component, PropTypes } from "react"

export default class DebtsSummary extends Component {
  static propTypes = {
    summary: PropTypes.arrayOf(PropTypes.object)
  }

  renderSummaries() {
    return (
      <ul>
        {
          this.props.summary.map(item =>
            <li key={item.debtor._id}>
              {item.debtor.name}: {item.total}
            </li>
          )
        }
      </ul>
    )
  }

  render() {
    return this.renderSummaries()
  }
}
