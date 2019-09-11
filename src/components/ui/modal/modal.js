import React, { Component } from "react";
import classes from "./Modal.css";
import Aux from "../../../hoc/auxillary";
import Backdrop from "../backdrop/backdrop";

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show == !this.props.show;
  }

  componentWillUpdate() {
    console.log("modal js will update");
  }

  render() {
    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className={classes.Modal}
          style={{
            display: this.props.show ? "block" : "none"
          }}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Modal;
