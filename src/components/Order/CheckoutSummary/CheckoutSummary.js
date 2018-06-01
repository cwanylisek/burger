import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../Ui/Button/Button';
import classes from './CheckoutSummary.css';

const checkoutSummary = (props) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>Mam nadzieję że pójdzie Ci w bicki x]</h1>
      <div style={{width: '100%', height: '300px', margin: 'auto'}}>
        <Burger ingredients={props.ingredients}/>
      </div>
      <Button
        btnType="Danger"
        clicked>Anuluj</Button>
      <Button
        btnType="Succes"
        clicked>Kontynuuj</Button>
    </div>
  )
}

export default checkoutSummary;
