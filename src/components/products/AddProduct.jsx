import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../context/ProductsContextProvider";

const AddProduct = () => {
  const { addProduct } = useProducts();

  const [product, setProduct] = useState({
    name: "",
    desc: "",
    price: "",
    model: "",
    img: "",
  });

  function clearInputs() {
    setProduct({ name: "", desc: "", price: "", model: "", img: "" });
  }

  const navigate = useNavigate();

  const handleValues = (e) => {
    if (e.target.name === "price") {
      let obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "50%",
          marginTop: "5rem",
          fontFamily: "Montserrat",
        }}
      >
        <Typography>ADMIN PANEL</Typography>
        <TextField
          onChange={handleValues}
          fullWidth
          value={product.name}
          name="name"
          label="name"
          sx={{ marginBottom: "1rem" }}
        />
        <TextField
          onChange={handleValues}
          fullWidth
          value={product.desc}
          name="desc"
          label="description"
          sx={{ marginBottom: "1rem" }}
        />
        <TextField
          onChange={handleValues}
          fullWidth
          value={product.price}
          name="price"
          label="price"
          sx={{ marginBottom: "1rem" }}
        />
        <TextField
          onChange={handleValues}
          fullWidth
          value={product.model}
          name="model"
          label="model"
          sx={{ marginBottom: "1rem" }}
        />
        <TextField
          onChange={handleValues}
          fullWidth
          value={product.img}
          name="img"
          label="img URL"
          sx={{ marginBottom: "1rem" }}
        />
        <Button
          onClick={() => {
            addProduct(product);
            clearInputs();
          }}
        >
          Create Product
        </Button>
      </Box>
    </>
  );
};

export default AddProduct;
