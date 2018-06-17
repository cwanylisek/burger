import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

import classes from './NavigationItems.css';

const navigationItems = (props) => (

  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" exact>Burger</NavigationItem>
    <NavigationItem link="/orders">Orders</NavigationItem>
  </ul>

);

export default navigationItems;
