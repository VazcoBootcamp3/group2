import React from 'react'

import ShoppingForm from './ShoppingForm'
import Report from './Report'
import Register from './Register'
import Login from './Login'

export default class Manager extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      flatmates: this.props.flatmates,
      products: {},
      showReport: false,
      activeTab: 'register'
    };

    this.handleClearing = this.handleClearing.bind(this);
    this.calculateBills = this.calculateBills.bind(this);
    this.updateflatmates = this.updateflatmates.bind(this);
    this.handleTabToggle = this.handleTabToggle.bind(this);
    this.renderContent = this.renderContent.bind(this);
    this.handleFlatmateRegistration = this.handleFlatmateRegistration.bind(this);
    this.handleFlatmateLogin = this.handleFlatmateLogin.bind(this);
  }

  componentDidMount () {
    let list = document.getElementById('nav-mobile').children;
    if (!this.state.showReport) {
      list[0].className = 'active';
      list[1].className  = '';
    } else {
      list[0].className = 'active';
      list[1].className  = '';
    }
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      flatmates: nextProps.flatmates
    });
  }

  updateflatmates(updatedflatmates) {
    //localStorage['flatmates'] = JSON.stringify(updatedflatmates);
    this.setState({
      flatmates: updatedflatmates
    });
  }

  handleTabToggle(tabID) {
    let list = document.getElementById('nav-mobile').children,
        i = 0;

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
    console.log(this.state.activeTab);

    switch (this.state.activeTab) {
      case 'shoppingForm':
        return <ShoppingForm flatmates={this.state.flatmates} calculate={this.calculateBills}/>
        break;
      case 'report':
        return <Report flatmates={this.state.flatmates} clearing={this.handleClearing}/>
        break;
      case 'register':
        return <Register register={this.handleFlatmateRegistration}/>
      case 'login':
        return <Login login={this.handleFlatmateLogin}/>
      default:
        return <Register/>
    }
  }

  calculateBills(buyersName, receiversName, price) {
    Meteor.call("calculateBills", this.state.flatmates, buyersName, receiversName, price,
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

  handleFlatmateRegistration(login, password) {
    Meteor.call("registration", login, password,
      (err, res) => {
        if (err) {
          console.error(err);
        }
      });
  }

  handleFlatmateLogin(login, password) {
    alert('zalogowano, ' + login);
  }

  render() {
    let content = this.renderContent()

    return (
      <div className="row">
        <nav>
         <div className="nav-wrapper">
            <h4 className="brand-logo left">Rozliczenia</h4>
         <ul id="nav-mobile" className="right ">
             <li><a href="#" id='shoppingForm' onClick={() => this.handleTabToggle('shoppingForm')}>Dodaj pozycję</a></li>
             <li><a href="#" id='report' onClick={() => this.handleTabToggle('report')}>Pokaż raport</a></li>
             <li><a href="#" id='register' onClick={() => this.handleTabToggle('register')}>Rejestracja</a></li>
             <li><a href="#" id='login' onClick={() => this.handleTabToggle('login')}>Zaloguj</a></li>
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
