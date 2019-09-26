import React from "react";
import Layout from "./components/layout/layout";
import BurgerBuilder from "./containers/burgerbuilder/burgerbuilder";
import Checkout from "./containers/checkout/checkout";

function App() {
  return (
    <div>
      <Layout>
        <BurgerBuilder />
        <Checkout />
      </Layout>
    </div>
  );
}

export default App;
