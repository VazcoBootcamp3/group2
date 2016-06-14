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
        passwordInput.value,
        () => {
          document.getElementById('password').value = '';
        }
      );

  }

  render() {
    return (
      <div className="row">
      <form className="col s12" onSubmit={this.handleLogin}>
        <h2 className="left-align"> Login </h2><br/>
        <div className="input-field col s12">
          <input id='login' className="validate" type="text" ref='loginInput'/>
          <label htmlFor='login'>Login: </label><br/>
        </div>
        <div className="input-field col s12">
          <label htmlFor='password'>Password: </label><br/>
          <input id='password' className='validate' type='password' ref='passwordInput'/>
        </div>
        <div className="input-field col s12">
          <button type='submit' className='btn btn-block waves-effect waves-light'>Login</button>
        </div>
      </form>
      </div>
    )
  }
}
