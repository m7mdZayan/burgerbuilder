import React from "react";
import Burgerlogo from "../../assets/burger-logo.png";
import classes from "./logo.css";

const Logo = props => (
  <div className={classes.logo}>
    <img src={Burgerlogo} alt="my burger logo" />
  </div>
);

export default Logo;
