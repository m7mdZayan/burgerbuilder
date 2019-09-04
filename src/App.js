import React from "react";
import Layout from "./components/layout/layout";
import BurgerBuilder from "./containers/burgerbuilder/burgerbuilder";

function App() {
  return (
    <div>
      <Layout>
        <BurgerBuilder />
      </Layout>
    </div>
  );
}

export default App;
