import React from 'react';
import AppBar from 'material-ui/AppBar';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Snackbar from 'material-ui/Snackbar';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import FlatButton from 'material-ui/FlatButton';


export default class Navbar extends React.Component {

  constructor() {
    super();
    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleSnackbarClose = this.handleSnackbarClose.bind(this);
    this.handleSnackbarOpen = this.handleSnackbarOpen.bind(this);

    this.state = {
      open: false,
      openReport:false,
      snackbarOpen: false,
    }
  }

   handleTouchTap(event) {
    event.preventDefault();
    console.log('handleTouchTap');
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
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


  render() {
    return (
      <div>
        <AppBar
          title="Expense Share"
          iconElementLeft={<IconButton onClick={this.handleTouchTap} onMouseEnter={this.handleTouchTap}><MenuIcon /></IconButton>}
          iconElementRight={<FlatButton onClick={this.handleSnackbarOpen} label="Wyloguj"/>}
          />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
        >
          <Menu>
            <MenuItem primaryText="Dodaj zakupy" href="/add"/>
            <MenuItem primaryText="Raport" href="/report"/>
          </Menu>
        </Popover>

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
