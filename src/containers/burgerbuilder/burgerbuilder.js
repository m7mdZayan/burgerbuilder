import React, { Component } from "react";
import Aux from "../../hoc/auxillary";
import Burger from "../../components/burger/buger";
import Buildcontrols from "../../components/burger/buildcontrols/buildcontrols";

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
        <Buildcontrols />
      </Aux>
    );
  }
}

export default BurgerBuilder;
