import React from "react";
import Aux from "../../hoc/auxillary";
import classes from "../layout/layout.css";
import Toolbar from "../navigation/toolbar/toolbar";

const Layout = props => (
  <Aux>
    <Toolbar />
    <main className={classes.content}>{props.children}</main>
  </Aux>
);

export default Layout;
