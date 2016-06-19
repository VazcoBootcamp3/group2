import React from 'react';
import ReactDOM from 'react-dom';
import {Grid,Row,Col} from 'react-bootstrap';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from 'material-ui/TextField';
import {lightBlue500, purple500} from 'material-ui/styles/colors';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';
import Navbar from './Navbar';




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

    injectTapEventPlugin();



  }




  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
            {this.props.navbar}
            <AccountsUIWrapper />
            <div style={{paddingTop: '50px'}}>
              <Grid>
                <Row>
                  <Col mdOffset={1} md={8} >
                    {this.props.content}
                  </Col>
                </Row>
              </Grid>
            </div>
        </div>
    </MuiThemeProvider>
    );
  }
}
