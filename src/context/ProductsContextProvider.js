import axios from "axios";
import React, { createContext, useContext, useState } from "react";

export const productsContext = createContext();
export const useProducts = () => useContext(productsContext);

const ProductsContextProvider = ({ children }) => {
  const API = "http://localhost:8000/models";

  const [models, setModels] = useState([]);
  const [model, setModel] = useState({});

  //! Add
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

  //! Read
  async function getModels() {
    const { data } = await axios(API);
    setModels(data);
  }
  //! Updata
  async function getModel(id) {
    const { data } = await axios(`${API}/${id}`);
    setModel(data);
  }

  async function saveEdit(id, editedModel) {
    await axios.patch(`${API}/${id}`, editedModel);
  }

  //! Delete
  async function deleteModel(id) {
    await axios.delete(`${API}/${id}`);
    getModels();
  }

  const values = {
    addModel,
    getModels,
    models,
    model,
    getModel,
    saveEdit,
    deleteModel,
  };
  return (
    <productsContext.Provider value={values}>
      {children}
    </productsContext.Provider>
  );
};

export default ProductsContextProvider;
