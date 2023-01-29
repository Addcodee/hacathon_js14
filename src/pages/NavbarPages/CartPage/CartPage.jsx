import React from "react";
import Cart from "../../../components/cart/Cart";
import CartPay from "../../../components/cart/CartPay";
import "./cartPage.css";

const CartPage = () => {
  return (
    <div className="cartPage">
      <Cart />
      <CartPay />
    </div>
  );
};

export default CartPage;
