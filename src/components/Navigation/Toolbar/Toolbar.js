import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

import classes from './Toolbar.css';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
      <div>Menu</div>
        <div className={classes.Logo}>
            <Logo height="56px"/>
          </div>
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
);

export default toolbar;
