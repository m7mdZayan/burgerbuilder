import React, { Component } from "react";
import Button from "../../../components/ui/button/button";
import classes from "./contactData.css";
import axios from "axios";
class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: ""
    }
  };

  orderHandler = () => {
    /*
    this.setState({ loading: true });
    const order = {
      ingerdients: this.state.ingerdients,
      price: this.state.totalPrice,
      customer: {
        name: "Zayan",
        address: "Mahalla"
      },
      email: "test@test.com"
    };
    axios
      .post("/orders.json", order)
      .then(response => {
        this.setState({ loading: false, purchasing: false });
      })
      .catch(error => {
        this.setState({ loading: false, purchasing: false });
      });
      */
  };
  render() {
    return (
      <div className={classes.contactData}>
        <h4>Enter your contact data</h4>
        <form>
          <input
            className={classes.input}
            type="text"
            name="name"
            placeholder="your name"
          />
          <input
            className={classes.input}
            type="text"
            name="email"
            placeholder="your email"
          />
          <input
            className={classes.input}
            type="text"
            name="street"
            placeholder="your street"
          />
          <input
            className={classes.input}
            type="text"
            name="postalcode"
            placeholder="your zip code"
          />
          <Button btnType="Success" clicked={this.orderHandler}>
            order
          </Button>
        </form>
      </div>
    );
  }
}
export default ContactData;
