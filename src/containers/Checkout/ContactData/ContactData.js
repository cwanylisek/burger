import React, { Component } from 'react';

import Button from '../../../components/Ui/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/Ui/Spinner/Spinner';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    adress: {
      street: '',
      postalCode: ''
    },
    loading: false
  }

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({loading: true});
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: 'Bartek Tylkowski',
        adress: {
          street: 'wiosenna',
          zipCode: '62-052',
          country: 'Poland'
        },
        email: 'test@test.com'
      },
      deliveryMethod: 'fastest'
    }
    axios.post('/orders.json', order)
        .then(response => {
          this.setState({loading: false});
          this.props.history.push('/');
        })
        .catch(error => {
          this.setState({loading: false});
        })
  }

  render () {
    let form = (
      <form>
      <input className={classes.Input} type="text" name="name" placeholder="Your name" />
      <input className={classes.Input} type="email" name="email" placeholder="Your mail" />
      <input className={classes.Input} type="text" name="street" placeholder="Street" />
      <input className={classes.Input} type="text" name="postal" placeholder="Postal Code" />
      <Button btnType="Success">ZAMÓW</Button>
    </form>
  );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Podaj swój adres</h4>
        {form}
      </div>
    )
  }
}

export default ContactData;
