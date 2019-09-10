import React from "react";
import classes from "./navigationItems.css";
import NavigationItem from "../navigationItem/navigationItem";

const NavigationItems = () => (
  <ul className={classes.navigationItems}>
    <NavigationItem link="/" active>
      Burger Builder
    </NavigationItem>
    <NavigationItem link="/">Checkout</NavigationItem>
  </ul>
);

export default NavigationItems;
