import React from "react";
import Aux from "../../hoc/auxillary";
import classes from "../layout/layout.css";

const Layout = props => (
  <Aux>
    <div>toolbar,sideDrwer,backdrop</div>
    <main className={classes.content}>{props.children}</main>
  </Aux>
);

export default Layout;
