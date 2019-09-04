import React, { Component } from "react";
import classes from "./BurgerIngerdients.css";
import PropTypes from "prop-types";

class BurgerIngerdients extends Component {
  render() {
    let ingerdients = null;

    switch (this.props.type) {
      case "bread-bottom":
        ingerdients = <div className={classes.BreadBottom}></div>;
        break;
      case "bread-top":
        ingerdients = (
          <div className={classes.BreadTop}>
            <div className={classes.Seed1}></div>
            <div className={classes.Seed2}></div>
          </div>
        );
        break;
      case "meat":
        ingerdients = <div className={classes.meat}></div>;
        break;
      case "cheese":
        ingerdients = <div className={classes.Cheese}></div>;
        break;
      case "bacon":
        ingerdients = <div className={classes.Bacon}></div>;
        break;
      case "salad":
        ingerdients = <div className={classes.Salad}></div>;
        break;
      default:
        ingerdients = null;
    }

    return ingerdients;
  }
}

BurgerIngerdients.PropTypes = {
  type: PropTypes.string.isRequired
};

export default BurgerIngerdients;
