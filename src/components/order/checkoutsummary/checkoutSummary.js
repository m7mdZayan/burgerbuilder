import React from "react";
import Burger from "../../burger/buger";
import Button from "../../ui/button/button";
import classes from "./checkoutSummary.css";
import { Link } from "react-router-dom";

const CheckoutSummary = props => {
  return (
    <div className={classes.checkoutSummary}>
      <h1>We hope it tastes well!</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingerdients={props.ingerdients} style={{ width: "100%" }} />
        <Link to="/">
          <Button btnType="Danger">Cancel</Button>
        </Link>
        <Button btnType="Success">Continue</Button>
      </div>
    </div>
  );
};

export default CheckoutSummary;
