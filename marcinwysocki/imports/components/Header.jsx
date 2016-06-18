import React from 'react'

export default Header = (props) => {
  return (
    <nav>
      <div className="nav-wrapper">
        <h4 className="brand-logo left">Shopping Manager</h4>
        <ul id="nav-mobile" className="right ">
          <li><a href="/form" id='shoppingForm'>Add products</a></li>
          <li><a href="/report" id='report'>Show report</a></li>
          <li><a href="/register" id='register'>Register</a></li>
          <li><a href="/login" id='login'>{!props.isLoggedIn ? "Login" : "Logout"}</a></li>
        </ul>
      </div>
    </nav>
  );
}
