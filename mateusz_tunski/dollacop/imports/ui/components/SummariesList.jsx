import React, { Component, PropTypes } from "react"

export default class SummariesList extends Component {
  static propTypes = {
    summaries: PropTypes.arrayOf(PropTypes.object)
  }

  renderSummaries() {
    return (
      this.props.summaries.map(summary =>
        <li key={summary.debtor._id}>
          {summary.debtor.name}: {summary.total}
        </li>
      )
    )
  }

  render() {
    return (
      <ul>
        {this.renderSummaries()}
      </ul>
    )
  }
}
