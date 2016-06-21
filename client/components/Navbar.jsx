import React from 'react';
import AppBar from 'material-ui/AppBar';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Snackbar from 'material-ui/Snackbar';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer';
import Avatar from 'material-ui/Avatar';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';
import Divider from 'material-ui/Divider';



export default class Navbar extends React.Component {

  constructor() {
    super();
    this.handleOpenMenu = this.handleOpenMenu.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleSnackbarClose = this.handleSnackbarClose.bind(this);
    this.handleSnackbarOpen = this.handleSnackbarOpen.bind(this);
    this.handleClickMenuItem = this.handleClickMenuItem.bind(this);

    this.state = {
      open: false,
      openReport:false,
      snackbarOpen: false,
    }

  }

  handleOpenMenu(event) {
    event.preventDefault();
    console.log('handleTouchTap');
    this.setState({
      open: !this.state.open,
    });
  };

   handleRequestClose() {
     this.setState({
       open: false,
     });
   };

   handleSnackbarClose() {
     this.setState({
       snackbarOpen: false
     });
   }

   handleSnackbarOpen() {
     this.setState({
       snackbarOpen: true
     });
   }

   handleClickMenuItem() {
     this.setState({
       open: false
     })
   }


  render() {
    var facebookId;
    var name;
    if(!!Meteor.user()){
      facebookId = Meteor.user().services.facebook.id;
      name = Meteor.user().services.facebook.name;
    }
    else {
      facebookId = 'abc';
      name = 'niezalogowany';
    }

    var userNameStyle = {
      textAlign: 'center'
    };


    return (
      <div>
        <AppBar
          title="Expense Share"
          iconElementLeft={<IconButton onClick={this.handleOpenMenu}><MenuIcon /></IconButton>}
          iconElementRight={  <AccountsUIWrapper />}
          />
          <Drawer
            docked={false}
            width={200}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}
          >
            <MenuItem disabled={true}> <Avatar size={140} src={`http://graph.facebook.com/${facebookId}/picture?type=large`} /> </MenuItem>
            <MenuItem style={userNameStyle} disabled={true}>{name}</MenuItem>
            <Divider  />
            <MenuItem onClick={this.handleClickMenuItem} primaryText="Dodaj zakupy" href="/add"/>
            <MenuItem onClick={this.handleClickMenuItem} primaryText="Raport" href="/report"/>
            <MenuItem onClick={this.handleClickMenuItem} primaryText="Grupy" href="/groups"/>
            <MenuItem onClick={this.handleClickMenuItem} primaryText="Stwórz grupę" href="/createGroup"/>
          </Drawer>



        <Snackbar
        open={this.state.snackbarOpen}
        message="Ups! Funkcjonalność jeszcze nie dostępna."
        autoHideDuration={3000}
        onRequestClose={this.handleSnackbarClose}
      />
    </div>
    );
  }
}
