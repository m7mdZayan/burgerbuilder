import React, { Component } from "react";
import Aux from "../../hoc/auxillary";
import Burger from "../../components/burger/buger";
import Buildcontrols from "../../components/burger/buildcontrols/buildcontrols";
import Modal from "../../components/ui/modal/modal";
import OrderSummary from "../../components/burger/orderSummary/orderSummary";
import axios from "../../axios-orders";

const INGERDIENT_PRICE = {
  salad: 0.5,
  bacon: 1,
  cheese: 0.75,
  meat: 2
};

class BurgerBuilder extends Component {
  state = {
    ingerdients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchasable: false,
    purchasing: false
  };

  updatePurchaseState = ingerdients => {
    const sum = Object.keys(ingerdients)
      .map(igkey => {
        return ingerdients[igkey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ purchasable: sum > 0 });
  };

  addIngerdeintsHandler = type => {
    const oldCount = this.state.ingerdients[type];
    const newCoount = oldCount + 1;
    const updatedIngerdeints = {
      ...this.state.ingerdients
    };
    updatedIngerdeints[type] = newCoount;
    const oldPrice = this.state.totalPrice;
    const priceAddtion = INGERDIENT_PRICE[type];
    const newPrice = oldPrice + priceAddtion;

    this.setState({
      totalPrice: newPrice,
      ingerdients: updatedIngerdeints
    });
    this.updatePurchaseState(updatedIngerdeints);
  };

  removeIngerdeintsHandler = type => {
    const oldCount = this.state.ingerdients[type];

    if (oldCount <= 0) {
      return;
    }

    const newCoount = oldCount - 1;
    const updatedIngerdeints = {
      ...this.state.ingerdients
    };
    updatedIngerdeints[type] = newCoount;
    const oldPrice = this.state.totalPrice;
    const priceDeduction = INGERDIENT_PRICE[type];
    const newPrice = oldPrice - priceDeduction;

    this.setState({
      totalPrice: newPrice,
      ingerdients: updatedIngerdeints
    });
    this.updatePurchaseState(updatedIngerdeints);
  };

  purchasingHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCanceled = () => {
    this.setState({
      purchasing: false
    });
  };

  purchaseContinue = () => {
    //alert("you continue !");
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
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    const disabledInfo = {
      ...this.state.ingerdients
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCanceled}>
          <OrderSummary
            ingerdients={this.state.ingerdients}
            cancelPurchase={this.purchaseCanceled}
            continuePurchase={this.purchaseContinue}
            price={this.state.totalPrice}
          />
        </Modal>
        <Burger ingerdients={this.state.ingerdients} />
        <Buildcontrols
          addIngerdeints={this.addIngerdeintsHandler}
          removeIngerdeints={this.removeIngerdeintsHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          ordered={this.purchasingHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
