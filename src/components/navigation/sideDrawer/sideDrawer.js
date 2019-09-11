import React from "react";
import Logo from "../../logo/logo";
import NavigationItems from "../navigationItems/NavigationItems";
import classes from "./sideDrawer.css";
import Backdrop from "../../ui/backdrop/backdrop";
import Aux from "../../../hoc/auxillary";

const SideDrawer = props => {
  let attachedClasses = [classes.sideDrawer, classes.close];
  if (props.open) {
    attachedClasses = [classes.sideDrawer, classes.open];
  }

  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <div className={classes.Logo}>
          <Logo />
        </div>

        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};
export default SideDrawer;
