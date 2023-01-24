import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useProducts } from "../../context/ProductsContextProvider";

const AddProduct = () => {
  const { addModel } = useProducts();

  const [product, setProduct] = useState({
    name: "",
    desc: "",
    price: "",
    img: "",
  });

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
        }}
      >
        <Typography>ADMIN PANEL</Typography>
        <TextField
          onChange={handleValues}
          fullWidth
          value={product.name}
          name="name"
          placeholder="name"
        />
        <TextField
          onChange={handleValues}
          fullWidth
          value={product.desc}
          name="desc"
          placeholder="description"
        />
        <TextField
          onChange={handleValues}
          fullWidth
          value={product.price}
          name="price"
          placeholder="price"
        />
        <TextField
          onChange={handleValues}
          fullWidth
          value={product.img}
          name="img"
          placeholder="img URL"
        />
        <Button onClick={() => addModel(product)}>Create Product</Button>
      </Box>
    </>
  );
};

export default AddProduct;
