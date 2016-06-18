import React from 'react'
import Meteor from 'meteor/meteor'
import Header from '/imports/components/Header'

export default Layout = (props) => {
  return (
    <div className="row">
      <Header isLoggedIn={props.isLoggedIn}/>
      <div className='col offset-m2 m8 s12 offset-l3 l6'>
        <div className="row">
          {props.content}
        </div>
      </div>
    </div>
  );
}
