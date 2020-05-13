import React, { Component } from "react";
import CheckoutSummary from "../../components/order/checkoutsummary/checkoutSummary";
import { Route } from "react-router-dom";
import ContactData from "./contactData/contactData";

class Checkout extends Component {
  state = {
    ingerdients: {
      salad: 1,
      bacon: 1,
      meat: 1,
      cheese: 1
    }
  };

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    let ingerdients = {};
    for (let param of query.entries()) {
      ingerdients[param[0]] = +param[1];
    }
    this.setState({ ingerdients: ingerdients });
  }
  checkoutContinueHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  checkoutCancelHandler = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          ingerdients={this.state.ingerdients}
          checkoutCancel={this.checkoutCancelHandler}
          checkoutContinue={this.checkoutContinueHandler}
        />
        <Route path="/checkout" component={ContactData} />
      </div>
    );
  }
}

export default Checkout;

//path={this.props.match.path + "/contact-data"}
