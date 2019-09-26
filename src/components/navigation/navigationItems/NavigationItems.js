import React from "react";
import classes from "./navigationItems.css";
import NavigationItem from "../navigationItem/navigationItem";

const NavigationItems = () => (
  <ul className={classes.navigationItems}>
    <NavigationItem link="/">Burger Builder</NavigationItem>
    <NavigationItem link="/checkout">Checkout</NavigationItem>
  </ul>
);

export default NavigationItems;
