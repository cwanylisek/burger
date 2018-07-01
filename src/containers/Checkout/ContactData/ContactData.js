import React, { Component } from 'react';

import Button from '../../../components/Ui/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/Ui/Spinner/Spinner';
import Input from '../../../components/Ui/Input/Input';

class ContactData extends Component {
  state = {
    orderForm: {
        name: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Your Name'
          },
          value: ''
        },
        street: {
            name: {
              elementType: 'input',
              elementConfig: {
                type: 'text',
                placeholder: 'street'
              },
              value: ''
            },
          },
        zipCode: {
            name: {
              elementType: 'input',
              elementConfig: {
                type: 'text',
                placeholder: 'ZIP Code'
              },
              value: ''
            },
          },
        country: {
            name: {
              elementType: 'input',
              elementConfig: {
                type: 'text',
                placeholder: 'Country'
              },
              value: ''
            },
          },
        email: {
            name: {
              elementType: 'input',
              elementConfig: {
                type: 'email',
                placeholder: 'Email'
              },
              value: ''
            },
          },
        deliveryMethod: {
              elementType: 'select',
              elementConfig: {
                options: [
                  {value: 'fastest', displayValue: 'Fastest'},
                  {value: 'cheapest', displayValue: 'Cheapest'}
                ]
              },
              value: ''
            }
    },
    loading: false
}

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({loading: true});
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
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
    const formElementsArray = [];
    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key]
      })
    }
    let form = (
      <form>
        <Input elementType="..." elementConfig="..." value="..." />
        {formElementsArray.map(formElement => (
          <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}/>
        ))}
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
