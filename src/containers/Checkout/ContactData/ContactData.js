import React, { Component } from 'react';

import Button from '../../../components/Ui/Button/Button';
import classes from './ContactData.css';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    adress: {
      street: '',
      postalCode: ''
    }
  }

  orderHandler = (event) => {
    event.preventDefault();
    console.log(this.props.ingredients);
  }

  render () {
    return (
      <div className={classes.ContactData}>
        <h4>Podaj swój adres</h4>
        <form>
          <input className={classes.Input} type="text" name="name" placeholder="Your name" />
          <input className={classes.Input} type="email" name="email" placeholder="Your mail" />
          <input className={classes.Input} type="text" name="street" placeholder="Street" />
          <input className={classes.Input} type="text" name="postal" placeholder="Postal Code" />
          <Button btnType="Success">ZAMÓW</Button>
        </form>
      </div>
    )
  }
}

export default ContactData;
