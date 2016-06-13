import React from 'react'


export default class ShoppingForm extends React.Component {
  constructor(...args) {
    super(...args);
    this.handleProductAdd = this.handleProductAdd.bind(this);
  }

  componentDidMount() {
    //Init Materialize
    $('select').material_select();
  }

  handleProductAdd(event) {
      let buyer, receiver;
      const productName = this.refs.nameInput.value,
            productPrice = Number(this.refs.priceInput.value);

      event.preventDefault();
      this.refs.nameInput.value = '';
      this.refs.priceInput.value = '';

      this.props.calculate(
        this.refs.buyer.value,
        this.refs.receiver.value,
        productPrice);
  }

  render() {
    return (
      <div className='row'>
      <form className="col s12" onSubmit={this.handleProductAdd}>
        <h2 className="left-align"> Zakupy </h2><br/>
        <div className="input-field col s6">
          <label htmlFor='buyer'>Kupuje:</label><br/>
        <select id='buyer'  ref='buyer'>
            {this.props.flatmates.map(flatmate => {
              return <option key={flatmate.name}>{flatmate.name}</option>
            })}
          </select>
        </div>
        <div className="input-field col s6">
          <label htmlFor='receiver'>Dla:</label><br/>
        <select id='receiver' ref='receiver'>
            {this.props.flatmates.map(flatmate => {
              return <option key={flatmate.name}>{flatmate.name}</option>
            })}
          </select>
        </div>
        <div className="input-field col s12">
          <label htmlFor='products'>Produkty: </label><br/>
        <textarea id='products' className="materialize-textarea"  ref='nameInput'/>
        </div>
        <div className="input-field col s12">
          <label htmlFor='price' className="control-label">Cena (zł): </label><br/>
        <input id='price' className='form-control' type='number' step="0.01"  ref='priceInput'/>
        </div>
        <div className="input-field col s12">
          <button type='submit' className='btn btn-block waves-effect waves-light'>Dodaj do rozliczenia</button>
        </div>
      </form>
      </div>
      )
  }
}
