import React from "react";
import classes from "./drawerToggle.css";

const DrawerToggle = props => (
  <div className={classes.navIcon} onClick={props.clicked}>
    <span></span>
    <span></span>
    <span></span>
  </div>
);

export default DrawerToggle;
