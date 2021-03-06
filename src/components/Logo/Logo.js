import React from 'react';

import burgerLogo from '../../assets/images/mcdonalds.png';
import classes from './Logo.css';

const logo = (props) => (
  <div>
    <img
      src={burgerLogo}
      alt="McDonalds"
      className={classes.Logo}
      style={{height: props.height}}/>
  </div>
);

export default logo;
