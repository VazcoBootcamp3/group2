import React from 'react';
import {TextField, RaisedButton, SelectField, MenuItem} from 'material-ui';
import {Meteor} from 'meteor/meteor';


export default class ShoppingForm extends React.Component {

  constructor() {
    super();
    this.submitForm = this.submitForm.bind(this);
    this.handleSelectChargedChange = this.handleSelectChargedChange.bind(this);
    this.handleSelectGroupChange = this.handleSelectGroupChange.bind(this);

    this.state = {
      group: '',
      productList: '',
      amount: '',
      charged: '',
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
      productList: '',
      amount: '',
      charged: '',
      group: ''
    });

  }

  setValue(field, event) {
   var object = {};
   object[field] = event.target.value;
   this.setState(object);
 }



 handleSelectChargedChange(event, index, value) {
   var object = {};
   object['charged'] = value;
   this.setState(object);
 }

 handleSelectGroupChange(event, index, value) {
   var object = {};
   object['group'] = value;
   this.setState(object);
 }


  render() {

    return (
      <div>
        <SelectField uniqueName="group" value={this.state.group} onChange={this.handleSelectGroupChange}
          hintText="Grupa" >
          <MenuItem value={'grupa 1'} primaryText="grupa 1" />
          <MenuItem value={'grupa 2'} primaryText="grupa 2" />
          <MenuItem value={'grupa 3'} primaryText="grupa 3" />
        </SelectField>
      <br/>
        <SelectField uniqueName="charged" value={this.state.charged} onChange={this.handleSelectChargedChange}
          hintText="Dłużny" >
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
        <div style={{paddingTop: '30px'}}>
          <RaisedButton label="Dodaj do listy" secondary={true} onClick={this.submitForm}/>
        </div>
      </div>






    );
  }
}
