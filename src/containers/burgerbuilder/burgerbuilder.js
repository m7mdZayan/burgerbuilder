import React, { Component } from "react";
import Aux from "../../hoc/auxillary";
import Burger from "../../components/burger/buger";

class BurgerBuilder extends Component {
  state = {
    ingerdients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    }
  };

  render() {
    return (
      <Aux>
        <Burger ingerdients={this.state.ingerdients} />
        <div>burger controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
