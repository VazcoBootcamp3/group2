import React from 'react';
import {TextField, RaisedButton, SelectField, MenuItem} from 'material-ui';
import {Meteor} from 'meteor/meteor';


export default class ShoppingForm extends React.Component {

  constructor() {
    super();
    this.submitForm = this.submitForm.bind(this);
    this.handleSelectFieldChange = this.handleSelectFieldChange.bind(this);


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
    Meteor.call('expenses.add', object);
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



 handleSelectFieldChange(event, index, value) {
   var object = {};
   object['buyer'] = value;
   this.setState(object);
 }


  render() {

    return (
      <div>
        <SelectField uniqueName="buyer" value={this.state.buyer} onChange={this.handleSelectFieldChange}
          hintText="Kupujący" >
          <MenuItem value={'Filip'} primaryText="Filip" />
          <MenuItem value={'Jakub'} primaryText="Jakub" />
          <MenuItem value={'Adam'} primaryText="Adam" />
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
