import React from 'react';
import {Table, TableHeader, TableRow, TableHeaderColumn, TableBody, TableRowColumn} from 'material-ui';
import ShoppingPosition from './ShoppingPosition';

export default class ShoppingTable extends React.Component {
  constructor() {
    super();
    }



  render() {
    var contentToRender = [];
    var counter = 0;
    for(let shpg of this.props.shopping) {
      contentToRender.push(<ShoppingPosition key={counter} shoppingObject={shpg} deletePosition={this.props.deletePosition}/> );
      counter++;
    }

    return (
      <Table >
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow >
            <TableHeaderColumn>Kupujący</TableHeaderColumn>
            <TableHeaderColumn>Lista produktów</TableHeaderColumn>
            <TableHeaderColumn>Zapłacono</TableHeaderColumn>
            <TableHeaderColumn>Kto winien</TableHeaderColumn>
            <TableHeaderColumn></TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          {contentToRender}
        </TableBody>

      </Table>
    );
  }
}
