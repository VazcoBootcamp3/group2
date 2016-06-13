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
        <td>{flatmate.owes} <b>zł</b></td>
        <td>
          {flatmate.owes !== 0
            ? <button className="btn waves-effect waves-light" onClick={() => this.props.clearing(flatmate)}>Zeruj</button>
            : null}
        </td>
      </tr>
    )
  }

  render() {
    return (
      <div className="col s12">
        <h2 className="left-align">Raport należności</h2>
        <table className="highlight bordered">
          <thead>
            <tr>
              <th>Imię</th>
              <th>Należność</th>
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
