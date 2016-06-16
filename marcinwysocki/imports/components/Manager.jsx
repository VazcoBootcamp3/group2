import React from 'react'

import ShoppingForm from './ShoppingForm'
import Report from './Report'
import Register from './Register'
import Login from './Login'

export default class Manager extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      products: {},
      currentUser: {},
      activeTab: 'login'
    };

    this.handleClearing = this.handleClearing.bind(this);
    this.calculateBills = this.calculateBills.bind(this);
    this.handleTabToggle = this.handleTabToggle.bind(this);
    this.renderContent = this.renderContent.bind(this);
    this.handleFlatmateRegistration = this.handleFlatmateRegistration.bind(this);
    this.handleUserLogin = this.handleUserLogin.bind(this);
  }

  componentDidMount () {
    this.handleTabToggle(this.state.activeTab);
  }

  handleTabToggle(tabID) {
    let list = document.getElementById('nav-mobile').children,
        i = 0,
        isLoggedIn = Object.keys(this.state.currentUser).length > 0;

    if (tabID === this.state.activeTab) {
      return;
    } else if (!isLoggedIn && tabID !== 'register' && tabID !== 'login') {
      Materialize.toast('Please log in first!', 2000);
      return;
    }

    for (i; i < list.length; i++) {
      if (list[i].children[0].id === tabID) {
        list[i].className = 'active';
      } else {
        list[i].className  = '';
      }
    }

    this.setState({activeTab: tabID});
  }

  renderContent() {

    //paskudny pseudo-routing
    switch (this.state.activeTab) {
      case 'shoppingForm':
        return <ShoppingForm flatmates={this.props.flatmates} calculate={this.calculateBills}/>
      case 'report':
        return <Report flatmates={this.props.flatmates} clearing={this.handleClearing}/>
      case 'register':
        return <Register register={this.handleFlatmateRegistration}/>
      case 'login':
        return <Login login={this.handleUserLogin}/>
      default:
        return <Register/>
    }
  }

  calculateBills(buyersName, receiversName, price) {
    Meteor.call("calculateBills", this.props.flatmates, buyersName, receiversName, price,
      (err, res) => {
        if (err) {
          console.error(err);
        }
      });
  }

  handleClearing(flatmateToClear) {
    Meteor.call('clearDebt', flatmateToClear, (err, res) => {
      if (err) {
        console.error(err);
      }
    });
  }

  handleFlatmateRegistration(login, password, flat, onSuccess) {
    Meteor.call("registration", login, password, flat,
      (err, res) => {
        if (err) {
          console.error(err);
        } else {
          if (typeof onSuccess !== 'undefined') {
            onSuccess();
          }
        }
      });
  }

  handleUserLogin(login, password, onWrongPswd) {
    let {flatmates} = this.props,
        user = flatmates.find(f => f.name === login);

    if (user.password !== password) {
      Materialize.toast('Wrong password!', 2000);
      if (typeof onWrongPswd !== 'undefined'){
        onWrongPswd();
      }
    } else {
      this.setState({
        currentUser: user,
        flatmates: flatmates
      }, () => this.handleTabToggle('shoppingForm'));
    }
  }

  render() {
    let content = this.renderContent()

    return (
      <div className="row">
        <nav>
         <div className="nav-wrapper">
            <h4 className="brand-logo left">Shopping Manager</h4>
         <ul id="nav-mobile" className="right ">
             <li><a href="#" id='shoppingForm' onClick={() => this.handleTabToggle('shoppingForm')}>Add products</a></li>
             <li><a href="#" id='report' onClick={() => this.handleTabToggle('report')}>Show report</a></li>
             <li><a href="#" id='register' onClick={() => this.handleTabToggle('register')}>Register</a></li>
             <li><a href="#" id='login' onClick={() => this.handleTabToggle('login')}>Login</a></li>
           </ul>
         </div>
        </nav>
        <div className='col offset-m2 m8 s12 offset-l3 l6'>
          <div className="row">
            {content}
          </div>
        </div>
      </div>
    );
  }
}
