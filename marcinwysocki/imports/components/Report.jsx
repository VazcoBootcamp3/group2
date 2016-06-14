import React from 'react'

export default class Report extends React.Component {
  constructor(...args) {
    super(...args);

    this.renderReportTableRow = this.renderReportTableRow.bind(this);
  }

  renderReportTableRow(flatmate) {
    return (
      <tr>
        <td>{flatmate.name} </td>
        <td>{flatmate.owes} zł</td>
        <td>
          {flatmate.owes !== 0
            ? <button className="btn waves-effect waves-light" onClick={() => this.props.clearing(flatmate)}>Clear</button>
            : null}
        </td>
      </tr>
    )
  }

  render() {
    return (
      <div className="col s12">
        <h2 className="left-align">Debt report</h2>
        <table className="highlight bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Debt</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.flatmates.map(r => this.renderReportTableRow(r))}
          </tbody>
        </table>
      </div>
    )
  }
}
