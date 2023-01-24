import axios from "axios";
import React, { createContext, useContext } from "react";

export const productsContext = createContext();
export const useProducts = () => useContext(productsContext);

const ProductsContextProvider = ({ children }) => {
  const API = "http://localhost:8000/models";
  async function addModel(newProduct) {
    if (
      !newProduct.name ||
      !newProduct.desc ||
      !newProduct.price ||
      !newProduct.img
    ) {
      alert("error");
      return;
    }
    await axios.post(API, newProduct);
  }

  const values = { addModel };
  return (
    <productsContext.Provider value={values}>
      {children}
    </productsContext.Provider>
  );
};

export default ProductsContextProvider;
