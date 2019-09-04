import React from "react";
import classes from "../burger/burger.css";
import BurgerIngerdients from "./burgeringerdients/burgeringerdients";

const Burger = props => {
  return (
    <div className={classes.burger}>
      <BurgerIngerdients type="bread-top" />
      <BurgerIngerdients type="cheese" />
      <BurgerIngerdients type="bacon" />
      <BurgerIngerdients type="meat" />
      <BurgerIngerdients type="bread-bottom" />
    </div>
  );
};

export default Burger;
