

import React from 'react';
import {Paper, TextField, RaisedButton, SelectField,
  MenuItem, GridList, GridTile, Subheader, IconButton} from 'material-ui';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';


export default class GroupTile extends React.Component {

  constructor() {
    super();
    this.handleJoinGroup = this.handleJoinGroup.bind(this);
  }

  handleJoinGroup(e) {
    console.log(e.target.key);
    debugger;
    Meteor.call('groups.addMember', {groupId: this.props.key})
  }

  render() {
    return (
      <div style={this.props.newStyle}>
        <GridTile
          key={this.props.key}
          title={this.props.name}
          actionIcon={<IconButton onClick={this.handleJoinGroup}><StarBorder color="white" /></IconButton>}
        >
        <img src={this.props.image}></img>
        </GridTile>
      </div>
    );
  }
}
