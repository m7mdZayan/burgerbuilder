import React, { Component } from "react";
import CheckoutSummary from "../../components/order/checkoutsummary/checkoutSummary";

class Checkout extends Component {
  state = {
    ingerdients: {
      salad: 1,
      bacon: 1,
      meat: 1,
      cheese: 1
    }
  };

  render() {
    return (
      <div>
        <CheckoutSummary ingerdients={this.state.ingerdients} />
      </div>
    );
  }
}

export default Checkout;
