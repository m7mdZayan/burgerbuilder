import React from "react";
import classes from "./toolbar.css";
import Logo from "../../logo/logo";
import NavigationItems from "../navigationItems/NavigationItems";

const Toolbar = props => (
  <header className={classes.toolbar}>
    <div>Menu</div>
    <Logo />
    <nav>
      <NavigationItems />
    </nav>
  </header>
);

export default Toolbar;
