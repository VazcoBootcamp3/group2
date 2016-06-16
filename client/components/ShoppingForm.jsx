import React from 'react';
import {TextField, RaisedButton, SelectField, MenuItem} from 'material-ui';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as shoppingActions from '../actions/shoppingActions';


class ShoppingForm extends React.Component {

  constructor() {
    super();
    this.submitForm = this.submitForm.bind(this);


    this.state = {
      buyer: '',
      productList: '',
      amount: '',
      owner: '',
    };
  }

  isValid(){
    let form = this.state;
    for(let prop in form) {
      if(form[prop] === '') {
        return false;
      }
    }
    return true;
  }

  submitForm() {
    if(!this.isValid()) {
      return;
    }

    var object = {};
    object = this.state;
    console.log(`submitFrom(): ${JSON.stringify(object)}`);
    this.props.actions.addShopping(object);
    this.setState({
      buyer: '',
      productList: '',
      amount: '',
      owner: '',});

  }

  setValue(field, event) {
   var object = {};
   object[field] = event.target.value;
   this.setState(object);
 }


  render() {

    return (
      <div>
        <SelectField uniqueName="buyer" value={this.state.buyer}
          hintText="Kupujący" onChange={this.setValue.bind(this, 'buyer')}>
          <MenuItem value={1} primaryText="Filip" />
          <MenuItem value={2} primaryText="Jakub" />
          <MenuItem value={3} primaryText="Adam" />
        </SelectField>
      <br/>
        <TextField fullWidth={true} multiLine={true}
          uniqueName="productList"
          value={this.state.productList}
          onChange={this.setValue.bind(this, 'productList')}
          hintText="Lista produktów"
        />
        <br />
          <TextField fullWidth={true}
            uniqueName="amount"
            value={this.state.amount}
            onChange={this.setValue.bind(this, 'amount')}
            hintText="Zapłacono"
          />
          <br />
        <TextField fullWidth={true}
          uniqueName="owner"
          value={this.state.owner}
          onChange={this.setValue.bind(this, 'owner')}
          hintText="Kto winien"
        />
        <br />
        <div style={{paddingTop: '30px'}}>
          <RaisedButton label="Dodaj do listy" secondary={true} onClick={this.submitForm}/>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingForm);
