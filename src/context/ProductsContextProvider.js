import axios from "axios";
import React, {
  createContext,
  useContext,
  useReducer,
  useState,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { API__MODELS, CRUD } from "../helpers/variables";

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
  const location = useLocation();
  const navigate = useNavigate();

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
    await axios.post(API__MODELS, newProduct);
  }

  //! Read
  async function getProducts() {
    const { data } = await axios(`${API__MODELS}${location.search}`);

    dispatch({ type: CRUD.GET_PRODUCTS, payload: data });
  }
  //! Update
  async function getProductDetails(id) {
    const { data } = await axios(`${API__MODELS}/${id}`);
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
    await axios.patch(`${API__MODELS}/${id}`, editedProduct);
    getProducts();
  }

  //! Delete
  async function deleteProduct(id) {
    await axios.delete(`${API__MODELS}/${id}`);
    getProducts();
  }

  //! Filter
  async function filterByParams(model, value) {
    const search = new URLSearchParams(location.search);
    if (value === "all") {
      search.delete(model);
    } else {
      search.set(model, value);
    }
    const url = `${location.pathname}?${search.toString()}`;
    console.log(url);
    navigate(url);
  }

  const values = {
    addProduct,
    getProducts,
    products: state.products,
    productDetails: state.productDetails,
    getProductDetails,
    saveEdit,
    deleteProduct,
    filterByParams,
  };
  return (
    <productsContext.Provider value={values}>
      {children}
    </productsContext.Provider>
  );
};

export default ProductsContextProvider;
