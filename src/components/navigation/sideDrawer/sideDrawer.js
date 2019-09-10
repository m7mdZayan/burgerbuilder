import React from "react";
import Logo from "../../logo/logo";
import NavigationItems from "../navigationItems/NavigationItems";
import classes from "./sideDrawer.css";

const SideDrawer = props => {
  return (
    <div className={classes.sideDrawer}>
      <Logo />
      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
};
export default SideDrawer;
