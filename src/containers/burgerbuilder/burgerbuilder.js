import React, { Component } from "react";
import Aux from "../../hoc/auxillary";
import Burger from "../../components/burger/buger";

class BurgerBuilder extends Component {
  render() {
    return (
      <Aux>
        <Burger />
        <div>burger controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
