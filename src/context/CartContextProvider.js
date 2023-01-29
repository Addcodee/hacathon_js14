import React, { createContext, useContext, useReducer } from "react";
import { calcTotalPrice, getCartsLength } from "../helpers/functions";
import { CART } from "../helpers/variables";

export const cartContext = createContext();
export const useCart = () => useContext(cartContext);

const INIT_STATE = {
  cart: JSON.parse(localStorage.getItem("cart")),
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case CART.GET_CART:
      return { ...state, cart: action.payload };
    default:
      return state;
  }
}

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  //? getProducts

  function getProductsFromCart() {
    let cart = JSON.parse(localStorage.getItem("cart"));

    if (!cart) {
      localStorage.setItem(
        "cart",
        JSON.stringify({ products: [], totalPrice: 0 })
      );
      cart = { products: [], totalPrice: 0 };
    }

    dispatch({
      type: CART.GET_CART,
      payload: cart,
    });
  }

  //? addProductToCart

  function addProductToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart"));

    if (!cart) {
      cart = { products: [], totalPrice: 0 };
    }

    let newProduct = {
      product: product,
      count: 1,
      subPrice: +product.price,
    };

    const findProduct = cart.products.filter(
      (obj) => obj.product.id === product.id
    );

    if (findProduct.length == 0) {
      cart.products.push(newProduct);
    } else {
      cart.products = cart.products.filter(
        (obj) => obj.product.id !== product.id
      );
    }

    cart.totalPrice = calcTotalPrice(cart.products);

    localStorage.setItem("cart", JSON.stringify(cart));

    dispatch({
      type: CART.GET_CART,
      payload: cart,
    });
  }

  //? checkProductInCart

  function checkProductInCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));

    if (cart) {
      let filtedCart = cart.products.filter(
        (obj) => obj.product.id === id
      );
      return filtedCart.length ? true : false;
    }
  }

  //? removeProductInCart

  function removeProductInCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));

    cart.products = cart.products.filter(
      (obj) => obj.product.id !== id
    );

    cart.totalPrice = calcTotalPrice(cart.products);

    localStorage.setItem("cart", JSON.stringify(cart));

    dispatch({
      type: CART.GET_CART,
      payload: cart,
    });
  }

  //? incrementProductInCart

  function incrementProductInCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));

    cart.products = cart.products.map((obj) => {
      if (obj.product.id === id) {
        if (obj.count < 10) {
          obj.count++;
          obj.subPrice += obj.product.price;
        }
      }
      return obj;
    });

    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));

    dispatch({
      type: CART.GET_CART,
      payload: cart,
    });
  }

  //? decrementProductInCart

  function decrementProductInCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));

    cart.products = cart.products.map((obj) => {
      if (obj.product.id === id) {
        if (obj.count > 1) {
          obj.count--;
          obj.subPrice -= obj.product.price;
        }
      }
      return obj;
    });
    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));

    dispatch({
      type: CART.GET_CART,
      payload: cart,
    });
  }

  //? removeAllProductsInCart

  function removeAllProductsInCart() {
    localStorage.removeItem("cart");
    getProductsFromCart();
  }

  const values = {
    getProductsFromCart,
    cart: state.cart,
    addProductToCart,
    checkProductInCart,
    removeProductInCart,
    incrementProductInCart,
    decrementProductInCart,
    removeAllProductsInCart,
  };
  return (
    <cartContext.Provider value={values}>
      {children}
    </cartContext.Provider>
  );
};

export default CartContextProvider;
