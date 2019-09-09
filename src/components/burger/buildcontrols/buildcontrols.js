import React from "react";
import classes from "../buildcontrols/buildcontrols.css";
import Buildcontrol from "./buildcontrol/buildcontrol";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Meat", type: "meat" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" }
];

const Buildcontrols = props => (
  <div className={classes.buildControls}>
    <p>
      Burger Price : <strong>{props.price.toFixed(2)} </strong>{" "}
    </p>
    {controls.map(ctrl => (
      <Buildcontrol
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.addIngerdeints(ctrl.type)}
        removed={() => props.removeIngerdeints(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}
    {console.log(props.price.toFixed(2))}
  </div>
);

export default Buildcontrols;
