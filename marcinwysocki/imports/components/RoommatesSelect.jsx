import React from 'react'

export default RoommatesSelect = ({flatmates}) => {
  return(
    <div className='row'>
    <form className="col s12">
      <h2 className="left-align"> Make them pay </h2><br/>
      <div className="input-field col s6">
        <label htmlFor='buyer'>Buyer:</label><br/>
      <select id='buyer'>
          {flatmates.map(flatmate => {
            return <option key={flatmate.name}>{flatmate.name}</option>
          })}
        </select>
      </div>
      </form>
      </div>
);
}
