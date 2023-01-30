import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AuthContextProvider from "./context/AuthContextProvider";
import BlogContextProvider from "./context/BlogContextProvider";
import CartContextProvider from "./context/CartContextProvider";
import CartPayContextProvider from "./context/CartPayContextProvider";
import ProductsContextProvider from "./context/ProductsContextProvider";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthContextProvider>
      <BlogContextProvider>
        <CartPayContextProvider>
          <CartContextProvider>
            <ProductsContextProvider>
              <App />
            </ProductsContextProvider>
          </CartContextProvider>
        </CartPayContextProvider>
      </BlogContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
);
