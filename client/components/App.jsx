import React from 'react';
import ReactDOM from 'react-dom';
import {Grid,Row,Col} from 'react-bootstrap';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import {lightBlue500, purple500} from 'material-ui/styles/colors';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import IconButton from 'material-ui/IconButton';
import Snackbar from 'material-ui/Snackbar';
import injectTapEventPlugin from 'react-tap-event-plugin';


import ShoppingForm from './ShoppingForm';
import ReportView from './ReportView';



const muiTheme = getMuiTheme({
  palette: {
    primary1Color: lightBlue500,
    accent1Color: purple500,
  },
  appBar: {
    height: 70,
  },
});


export default class App extends React.Component {
  constructor(){
    super();
    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleOpenReport = this.handleOpenReport.bind(this);
    this.handleAddShopping = this.handleAddShopping.bind(this);
    this.handleSnackbarClose = this.handleSnackbarClose.bind(this);
    this.handleSnackbarOpen = this.handleSnackbarOpen.bind(this);
    injectTapEventPlugin();

    this.state = {
      open: false,
      anchorEl: event.currentTarget,
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

  handleOpenReport() {
    this.setState({
      openReport: true
    })
    this.handleRequestClose();
  }

  handleAddShopping() {
    this.setState({
      openReport: false
    })
    this.handleRequestClose();
  }

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

    var reportDiv = (
      <ReportView />
    );

    var addShoppingDiv = (
      <ShoppingForm />
    );

    var contentToRender;

    if(this.state.openReport) {
      contentToRender = reportDiv;
    }
    else {
      contentToRender = addShoppingDiv;
    }



    return (
      <div>
        <MuiThemeProvider muiTheme={muiTheme}>
          <div>
            <AppBar
              title="Shopping Share"
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
              <MenuItem primaryText="Dodaj zakupy" onClick={this.handleAddShopping}/>
              <MenuItem primaryText="Raport" onClick={this.handleOpenReport}/>
            </Menu>
          </Popover>

          <Snackbar
          open={this.state.snackbarOpen}
          message="Ups! Funkcjonalność jeszcze nie dostępna."
          autoHideDuration={3000}
          onRequestClose={this.handleSnackbarClose}
        />



      <div style={{paddingTop: '50px'}}>
        <Grid>
          <Row>
            <Col mdOffset={1} md={8} >
              {contentToRender}
            </Col>
          </Row>
        </Grid>
      </div>

          </div>

        </MuiThemeProvider>
      </div>
    );
  }
}
