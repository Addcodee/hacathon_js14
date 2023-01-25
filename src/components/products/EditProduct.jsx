import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../../context/ProductsContextProvider";

const EditProduct = () => {
  const { getModel, model, saveEdit } = useProducts();

  const [product, setProduct] = useState(model);
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
  const { id } = useParams();
  useEffect(() => {
    getModel(id);
  }, []);

  useEffect(() => {
    setProduct(model);
  }, [model]);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
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
        <Typography>EDIT PANEL</Typography>
        <TextField
          onChange={handleValues}
          fullWidth
          value={product.name || ""}
          name="name"
          label="name"
          sx={{ marginBottom: "1rem" }}
        />
        <TextField
          onChange={handleValues}
          fullWidth
          value={product.desc || ""}
          name="desc"
          label="description"
          sx={{ marginBottom: "1rem" }}
        />
        <TextField
          onChange={handleValues}
          fullWidth
          value={product.price || ""}
          name="price"
          label="price"
          sx={{ marginBottom: "1rem" }}
        />
        <TextField
          onChange={handleValues}
          fullWidth
          value={product.img || ""}
          name="img"
          label="img URL"
          sx={{ marginBottom: "1rem" }}
        />
        <Button
          onClick={() => {
            saveEdit(id, product);
            navigate("/models");
          }}
        >
          Save changes
        </Button>
      </Box>
    </div>
  );
};

export default EditProduct;
