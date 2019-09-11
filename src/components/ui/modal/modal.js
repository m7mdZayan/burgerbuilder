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
        display: props.show ? "block" : "none"
      }}
    >
      {props.children}
    </div>
  </Aux>
);

export default Modal;
