import React from "react";
import Aux from "../../hoc/auxillary";
import classes from "../layout/layout.css";
import Toolbar from "../navigation/toolbar/toolbar";
import SideDrawer from "../navigation/sideDrawer/sideDrawer";

const Layout = props => (
  <Aux>
    <Toolbar />
    <SideDrawer />
    <main className={classes.content}>{props.children}</main>
  </Aux>
);

export default Layout;
