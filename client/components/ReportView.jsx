import React from 'react';
import ShoppingTable from './ShoppingTable';

export default class ReportView extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <ShoppingTable shopping={this.props.expenses} />
      </div>
    );
  }
}
