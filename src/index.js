import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ProductsContextProvider from "./context/ProductsContextProvider";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ProductsContextProvider>
      <App />
    </ProductsContextProvider>
  </BrowserRouter>
);
