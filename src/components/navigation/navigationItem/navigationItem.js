import React from "react";
import classes from "./navigationItem.css";
import { NavLink } from "react-router-dom";

const NavigationItem = props => (
  <li className={classes.navigationItem}>
    <NavLink
      to={props.link} /*className={props.active ? classes.active : null}*/
    >
      {props.children}
    </NavLink>
  </li>
);

export default NavigationItem;
