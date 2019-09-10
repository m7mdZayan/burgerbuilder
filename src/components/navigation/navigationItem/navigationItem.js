import React from "react";
import classes from "./navigationItem.css";

const NavigationItem = props => (
  <li className={classes.navigationItem}>
    <a href={props.link} className={props.actice ? classes.active : null}>
      {props.children}
    </a>
  </li>
);

export default NavigationItem;
