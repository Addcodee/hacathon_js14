import React, { createContext, useContext } from "react";

export const cartPayContext = createContext();
export const useCartPay = () => useContext(cartPayContext);

const CartPayContextProvider = ({ children }) => {
  const values = {};
  return (
    <cartPayContext.Provider value={values}>
      {children}
    </cartPayContext.Provider>
  );
};

export default CartPayContextProvider;
