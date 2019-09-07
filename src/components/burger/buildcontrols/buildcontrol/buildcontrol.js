import React from "react";
import classes from "../buildcontrol/buildcontrol.css";

const Buildcontrol = props => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{props.label}</div>
    <button className={classes.Less} onClick={props.removed}>
      less
    </button>
    <button className={classes.More} onClick={props.added}>
      more
    </button>
  </div>
);

export default Buildcontrol;
