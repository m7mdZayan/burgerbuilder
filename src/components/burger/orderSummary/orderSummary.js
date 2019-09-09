import React from "react";
import Aux from "../../../hoc/auxillary";

const OrderSummary = props => {
  const ingerdientSummary = Object.keys(props.ingerdients).map(igkey => {
    return (
      <li key={igkey}>
        <span style={{ textTransform: "capitalize" }}>{igkey}</span> :{" "}
        {props.ingerdients[igkey]}
      </li>
    );
  });

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the follwing ingredients : </p>
      <ul>{ingerdientSummary}</ul>
      <p>continue to checkout ?</p>
    </Aux>
  );
};

export default OrderSummary;
