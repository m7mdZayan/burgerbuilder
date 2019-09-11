import React, { Component } from "react";
import Aux from "../../hoc/auxillary";
import classes from "../layout/layout.css";
import Toolbar from "../navigation/toolbar/toolbar";
import SideDrawer from "../navigation/sideDrawer/sideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: false
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerOpendHandler = () => {
    this.setState(prevState => {
      return { showSideDrawer: !this.state.showSideDrawer };
    });
  };
  render() {
    return (
      <Aux>
        <Toolbar clicked={this.sideDrawerOpendHandler} />
        <SideDrawer
          closed={this.sideDrawerClosedHandler}
          open={this.state.showSideDrawer}
        />
        <main className={classes.content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
