import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { useLocation } from "react-router-dom";
import { API, CRUD } from "../helpers/variables";

export const productsContext = createContext();
export const useProducts = () => useContext(productsContext);

const INIT_STATE = {
  products: [],
  productDetails: {},
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CRUD.GET_PRODUCTS:
      return { ...state, products: action.payload };
    case CRUD.GET_PRODUCT_DETAILS:
      return { ...state, productDetails: action.payload };
    default:
      return state;
  }
};
const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  
  const location = useLocation()

  //! Create
  async function addProduct(newProduct) {
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
  async function getProducts() {
    const { data } = await axios(`${API}${location.search}`);

    dispatch({ type: CRUD.GET_PRODUCTS, payload: data });
  }
  //! Update
  async function getProductDetails(id) {
    const { data } = await axios(`${API}/${id}`);
    dispatch({
      type: CRUD.GET_PRODUCT_DETAILS,
      payload: data,
    });
  }

  async function saveEdit(id, editedProduct) {
    if (
      !editedProduct.name ||
      !editedProduct.desc ||
      !editedProduct.price ||
      !editedProduct.img
    ) {
      alert("error");
      return;
    }
    await axios.patch(`${API}/${id}`, editedProduct);
    getProducts();
  }

  //! Delete
  async function deleteProduct(id) {
    await axios.delete(`${API}/${id}`);
    getProducts();
  }

  const values = {
    addProduct,
    getProducts,
    products: state.products,
    productDetails: state.productDetails,
    getProductDetails,
    saveEdit,
    deleteProduct,
  };
  return (
    <productsContext.Provider value={values}>
      {children}
    </productsContext.Provider>
  );
};

export default ProductsContextProvider;
