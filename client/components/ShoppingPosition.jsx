import React from 'react';
import FontIcon from 'material-ui/svg-icons/navigation/check';
import IconButton from 'material-ui/IconButton';
import {TableRow, TableRowColumn} from 'material-ui';




export default class ShoppingTable extends React.Component {
  constructor() {
    super();
    this.onHover = this.onHover.bind(this);
    this.onHoverExit = this.onHoverExit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

    this.state = {
      showDelete: false
    }
  }

  onHover(e) {
  e.preventDefault();
  //console.log('Row hovered');
  this.setState({
    showDelete: true
  })



}

onHoverExit (e) {
  e.preventDefault();
  //console.log('Row unhovered');
  this.setState({
    showDelete: false
  })
}

handleDelete (e) {
    this.props.deletePosition(this.props.shoppingObject.id);
    // Actions.deleteScoreNode({
    //   // e: e,
    //   // index: this.props.index,
    //   // scores: this.props.recentScores,
    //   // player: this.props.player
    // });
  }




  render() {
    return(
      <TableRow hoverable={true} onCellHover={this.onHover} onCellHoverExit={this.onHoverExit}>
        <TableRowColumn>{this.props.shoppingObject.buyer}</TableRowColumn>
        <TableRowColumn>{this.props.shoppingObject.productList}</TableRowColumn>
        <TableRowColumn>{this.props.shoppingObject.amount}</TableRowColumn>
        <TableRowColumn>{this.props.shoppingObject.owner}</TableRowColumn>
        <TableRowColumn>
          {this.state.showDelete ?
            <IconButton onClick={this.handleDelete}>
              <FontIcon />
            </IconButton>
            : null}
          </TableRowColumn>
      </TableRow>
    );
  }
}
