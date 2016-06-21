import React from 'react';
import {TextField, RaisedButton} from 'material-ui';
import {Meteor} from 'meteor/meteor';


export default class GroupForm extends React.Component {

  constructor() {
    super();
    this.submitForm = this.submitForm.bind(this);

    this.state = {
      name: '',
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
    Meteor.call('groups.add', object);
    this.setState({
      name: '',
    });

  }

  setValue(field, event) {
   var object = {};
   object[field] = event.target.value;
   this.setState(object);
 }


  render() {

    return (
      <div>
          <TextField fullWidth={true}
            uniqueName="name"
            value={this.state.name}
            onChange={this.setValue.bind(this, 'name')}
            hintText="Nazwa"
          />
          <br />
        <div style={{paddingTop: '30px'}}>
          <RaisedButton label="Stwórz grupę" secondary={true} onClick={this.submitForm}/>
        </div>
      </div>


    );
  }
}
