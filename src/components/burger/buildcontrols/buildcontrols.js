import React from "react";
import classes from "../buildcontrols/buildcontrols.css";
import Buildcontrol from "./buildcontrol/buildcontrol";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Meat", type: "meat" },
  { label: "Bacon", type: "bacon" },
  { label: "Chesse", type: "chesse" }
];

const Buildcontrols = props => (
  <div className={classes.buildControls}>
    {controls.map(ctrl => (
      <Buildcontrol key={ctrl.label} label={ctrl.label} />
    ))}
  </div>
);

export default Buildcontrols;
