import React from "react";
import Layout from "./components/layout/layout";
import BurgerBuilder from "./containers/burgerbuilder/burgerbuilder";
import Checkout from "./containers/checkout/checkout";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Route path="/" exact component={BurgerBuilder} />
        <Route path="/checkout" exact component={Checkout} />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
