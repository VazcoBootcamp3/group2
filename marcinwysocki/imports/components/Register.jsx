import React from 'react'

export default class Register extends React.Component {
  constructor(...args) {
    super(...args);

    this.handleRegistration = this.handleRegistration.bind(this);
  }

  handleRegistration() {
    const {loginInput, passwordInput, confirmPasswordInput} = this.refs;

    if (passwordInput.value === confirmPasswordInput.value) {
      this.props.register(
        loginInput.value,
        passwordInput.value
      );
    }
  }

  render() {
    return (
      <div className="row">
      <form className="col s12" onSubmit={this.handleRegistration}>
        <h2 className="left-align"> Rejestracja </h2><br/>
        <div className="input-field col s12">
          <label htmlFor='login'>Login: </label><br/>
          <input id='login' className="validate" type="text" ref='loginInput'/>
        </div>
        <div className="input-field col s12">
          <label htmlFor='password'>Hasło: </label><br/>
          <input id='password' className='validate' type='password' ref='passwordInput'/>
        </div>
        <div className="input-field col s12">
          <label htmlFor='confirmPassword'>Potwierdź hasło: </label><br/>
          <input id='confirmPassword' className='validate' type='password' ref='confirmPasswordInput'/>
        </div>
        <div className="input-field col s12">
          <button type='submit' className='btn btn-block waves-effect waves-light'>Zarejestruj</button>
        </div>
      </form>
      </div>
    )
  }
}
