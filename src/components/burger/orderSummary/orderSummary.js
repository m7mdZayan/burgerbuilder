import React from "react";
import Aux from "../../../hoc/auxillary";
import Button from "../../ui/button/button";

const OrderSummary = props => {
  const ingerdientSummary = Object.keys(props.ingerdients).map(igkey => {
    return (
      <li key={igkey}>
        <span style={{ textTransform: "capitalize" }}>{igkey}</span> :
        {props.ingerdients[igkey]}
      </li>
    );
  });

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the follwing ingredients : </p>
      <ul>{ingerdientSummary}</ul>
      <p>
        <strong>Total Price : {props.price.toFixed(2)}</strong>
      </p>
      <p>continue to checkout ?</p>
      <Button btnType="Success" clicked={props.continuePurchase}>
        Continue
      </Button>
      <Button btnType="Danger" clicked={props.cancelPurchase}>
        Cancel
      </Button>
    </Aux>
  );
};

export default OrderSummary;
