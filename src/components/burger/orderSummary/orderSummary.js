import React, { Component } from "react";
import Aux from "../../../hoc/auxillary";
import Button from "../../ui/button/button";
import { Link } from "react-router-dom";

class OrderSummary extends Component {
  //this can be functional component
  componentWillUpdate() {
    console.log("order summ will update");
  }

  render() {
    const ingerdientSummary = Object.keys(this.props.ingerdients).map(igkey => {
      return (
        <li key={igkey}>
          <span style={{ textTransform: "capitalize" }}>{igkey}</span> :
          {this.props.ingerdients[igkey]}
        </li>
      );
    });
    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with the follwing ingredients : </p>
        <ul>{ingerdientSummary}</ul>
        <p>
          <strong>Total Price : {this.props.price.toFixed(2)}</strong>
        </p>
        <p>continue to checkout ?</p>
        <Link to="checkout">
          <Button btnType="Success">Continue</Button>
        </Link>

        <Button btnType="Danger" clicked={this.props.cancelPurchase}>
          Cancel
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
