import React, { Component } from 'react';

import Aux from '../../../hoc/Aux';
import Button from '../../Ui/Button/Button';

class OrderSummary extends Component {

  componentWillUpdate () {
    console.log('[Order summary] will update');
  }

  render () {
    const ingredientSummary = Object.keys(this.props.ingredients)
    .map(igKey => {
      return (
        <li key={igKey}>
          <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
        </li>);
    })


      return(
        <Aux>
          <h3>Twój order</h3>
          <p>Burger dla dużego ulańca:</p>
          <ul>
            {ingredientSummary}

          </ul>
          <p><strong>Cena całkowita: ${this.props.price.toFixed(2)}</strong></p>
          <p>Czy chcesz kontynuować?</p>
          <Button btnType='Danger' clicked={this.props.purchaseCancelled}>Nie chce</Button>
          <Button btnType='Success' clicked={this.props.purchaseContinued}>Jem</Button>


        </Aux>
      );
  };
};

export default OrderSummary;
