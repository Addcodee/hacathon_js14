import { Button, Paper, TextField } from "@mui/material";
import React, { useState } from "react";
import { useCart } from "../../context/CartContextProvider";
import "./cartPay.css";

const CartPay = () => {
  const { removeAllProductsInCart } = useCart();
  const [creditCard, setCreditCard] = useState({
    number: "",
    name: "",
    cvv: "",
    email: "",
    comment: "",
  });

  function clearInputs() {
    if (!creditCard.name || !creditCard.number || !creditCard.cvv) {
      alert("please compelete the textfields");
    }
    setCreditCard({
      number: "",
      name: "",
      cvv: "",
      email: "",
      comment: "",
    });
  }

  function handleValues(e) {
    let obj = {
      ...creditCard,
      [e.target.name]: e.target.value,
    };
    setCreditCard(obj);
  }
  return (
    <Paper className="cartPay__container">
      <h2>ORDERING</h2>
      <div className="cartPay__form">
        <TextField
          onChange={(e) => handleValues(e)}
          name="name"
          value={creditCard.name}
          label="name*"
        />
        <TextField
          onChange={(e) => handleValues(e)}
          name="number"
          value={creditCard.number}
          label="credit number*"
        />
        <TextField
          onChange={(e) => handleValues(e)}
          name="cvv"
          value={creditCard.cvv}
          label="cvv/cvc*"
        />
        <TextField
          onChange={(e) => handleValues(e)}
          name="email"
          value={creditCard.email}
          label="email"
        />
        <TextField
          onChange={(e) => handleValues(e)}
          name="comment"
          value={creditCard.comment}
          label="give a comment"
        />
        <Button
          variant="contained"
          onClick={() => {
            clearInputs();
            removeAllProductsInCart();
          }}
        >
          Buy NOW
        </Button>
      </div>
      <p className="cartPay__comment">
        <span>*</span> To calculate the cost, fill in the fields with
        an asterisk
      </p>
    </Paper>
  );
};

export default CartPay;
