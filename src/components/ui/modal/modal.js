import React from "react";
import classes from "./Modal.css";
import Aux from "../../../hoc/auxillary";
import Backdrop from "../backdrop/backdrop";

const Modal = props => (
  <Aux>
    <Backdrop show={props.show} clicked={props.modalClosed} />
    <div
      className={classes.Modal}
      style={{
        transform: props.show ? "tranalteY(200)" : "tranalteY(-100vh)",
        opacity: props.show ? "1" : "0"
      }}
    >
      {props.children}
    </div>
  </Aux>
);

export default Modal;
