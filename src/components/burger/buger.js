import React from "react";
import classes from "../burger/burger.css";
import BurgerIngerdients from "./burgeringerdients/burgeringerdients";

const Burger = props => {
  let transformedIngerdients = Object.keys(props.ingerdients)
    .map(igKey => {
      return [...Array(props.ingerdients[igKey])].map((_, i) => {
        return <BurgerIngerdients type={igKey} key={igKey + i} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  console.log(transformedIngerdients);

  if (transformedIngerdients.length === 0) {
    transformedIngerdients = <p>Please ! start adding ingerdients</p>;
  }
  return (
    <div className={classes.burger}>
      <BurgerIngerdients type="bread-top" />
      {transformedIngerdients}
      <BurgerIngerdients type="bread-bottom" />
    </div>
  );
};

export default Burger;
