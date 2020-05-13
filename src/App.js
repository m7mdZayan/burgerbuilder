import React from "react";
import Layout from "./components/layout/layout";
import BurgerBuilder from "./containers/burgerbuilder/burgerbuilder";
import Checkout from "./containers/checkout/checkout";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact component={BurgerBuilder} />
          <Route path="/checkout" exact component={Checkout} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
