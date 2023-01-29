import { Button, Paper } from "@mui/material";
import React, { useEffect } from "react";
import { useCart } from "../../context/CartContextProvider";
import "./cart.css";
import { BiTrash } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";

const Cart = () => {
  const {
    getProductsFromCart,
    cart,
    removeProductInCart,
    incrementProductInCart,
    decrementProductInCart,
    removeAllProductsInCart,
  } = useCart();

  useEffect(() => {
    getProductsFromCart();
  }, []);

  return (
    <Paper className="cart__container">
      <div className="cart__header">
        <h2>CART</h2>
        <Button color="error" onClick={removeAllProductsInCart}>
          <RxCross2 />
          <span>Remove All</span>
        </Button>
      </div>
      {cart?.products.map((obj) => (
        <div key={obj.product.id} className="card__container">
          <img
            src={obj.product.img}
            alt="sdf"
            style={{ width: 80 }}
          />
          <h4>
            {obj.product.name}
            <Button
              color="error"
              sx={{ fontSize: "10px", padding: "0" }}
              onClick={() => removeProductInCart(obj.product.id)}
            >
              <BiTrash />
              <span>Remove</span>
            </Button>
          </h4>
          <div className="product__counter">
            <button
              onClick={() => incrementProductInCart(obj.product.id)}
            >
              +
            </button>
            {obj.count}
            <button
              onClick={() => decrementProductInCart(obj.product.id)}
            >
              -
            </button>
          </div>
          <p className="product__subPrice">{obj.subPrice}$</p>
        </div>
      ))}
      <p className="cart__totalPrice">Total: <b>{cart?.totalPrice}</b>$</p>
    </Paper>
  );
};

export default Cart;
