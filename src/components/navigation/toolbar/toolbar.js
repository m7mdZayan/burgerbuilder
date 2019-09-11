import React from "react";
import classes from "./toolbar.css";
import Logo from "../../logo/logo";
import NavigationItems from "../navigationItems/NavigationItems";
import DrawerToggle from "../toolbar/drawerToggle/drawerToggle";

const Toolbar = props => (
  <header className={classes.toolbar}>
    <DrawerToggle clicked={props.clicked} />
    <Logo />
    <nav className={classes.desktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default Toolbar;
