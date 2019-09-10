import React from "react";
import classes from "./toolbar.css";
import Logo from "../../logo/logo";

const Toolbar = props => (
  <header className={classes.toolbar}>
    <div>Menu</div>
    <Logo />
    <nav>...</nav>
  </header>
);

export default Toolbar;
