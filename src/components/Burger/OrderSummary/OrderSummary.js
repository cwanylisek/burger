import React from 'react';

import Aux from '../../../hoc/Aux';
import Button from '../../Ui/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
      return (
        <li key={igKey}>
          <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
        </li>);
    })

    return(
      <Aux>
        <h3>Twój order</h3>
        <p>Burger dla dużego ulańca:</p>
        <ul>
          {ingredientSummary}

        </ul>
        <p><strong>Cena całkowita: ${props.price.toFixed(2)}</strong></p>
        <p>Czy chcesz kontynuować?</p>
        <Button btnType='Danger' clicked={props.purchaseCancelled}>Nie chce</Button>
        <Button btnType='Success' clicked={props.purchaseContinued}>Jem</Button>


      </Aux>
    );
};

export default orderSummary;
