import React from 'react'

export default class Login extends React.Component {
  constructor(...args) {
    super(...args);

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin() {
    const {loginInput, passwordInput} = this.refs;

      this.props.login(
        loginInput.value,
        passwordInput.value
      );

  }

  render() {
    return (
      <div className="row">
      <form className="col s12" onSubmit={this.handleLogin}>
        <h2 className="left-align"> Logowanie </h2><br/>
        <div className="input-field col s12">
          <label htmlFor='login'>Login: </label><br/>
          <input id='login' className="validate" type="text" ref='loginInput'/>
        </div>
        <div className="input-field col s12">
          <label htmlFor='password'>Hasło: </label><br/>
          <input id='password' className='validate' type='password' ref='passwordInput'/>
        </div>
        <div className="input-field col s12">
          <button type='submit' className='btn btn-block waves-effect waves-light'>Zaloguj</button>
        </div>
      </form>
      </div>
    )
  }
}
