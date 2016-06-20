import React from 'react';
import {Table, TableHeader, TableRow, TableHeaderColumn, TableBody, TableRowColumn} from 'material-ui';
import ShoppingPosition from './ShoppingPosition';

export default class ShoppingTable extends React.Component {
  constructor() {
    super();
    }

    renderExpenses() {
       return this.props.shopping.map((expense) => (
         <ShoppingPosition key={expense._id} shoppingObject={expense} />
       ));
     }

  render() {


    return (
      <Table >
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow >
            <TableHeaderColumn>Grupa</TableHeaderColumn>
            <TableHeaderColumn>Kupujący</TableHeaderColumn>
            <TableHeaderColumn>Lista produktów</TableHeaderColumn>
            <TableHeaderColumn>Zapłacono</TableHeaderColumn>
            <TableHeaderColumn>Kto winien</TableHeaderColumn>
            <TableHeaderColumn></TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          {this.renderExpenses()}
        </TableBody>

      </Table>
    );
  }
}
