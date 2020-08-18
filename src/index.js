import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Route";

//react context api
import { ProductProvider } from "./context";

const App = () => {
  return (
    <ProductProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ProductProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
