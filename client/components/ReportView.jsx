import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as shoppingActions from '../actions/shoppingActions';
import ShoppingTable from './ShoppingTable';

class ReportView extends React.Component {

  constructor() {
    super();

  }



  render() {

    return (
      <div>
        <ShoppingTable shopping={this.props.shopping} deletePosition={this.props.actions.deleteShopping}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    shopping: state.shopping
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(shoppingActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReportView);
