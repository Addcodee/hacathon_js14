import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../../context/ProductsContextProvider";

const EditProduct = () => {
  const { getProductDetails, productDetails, saveEdit } = useProducts();

  const [editedProduct, setEditedProduct] = useState(productDetails);
  const navigate = useNavigate();

  const handleValues = (e) => {
    if (e.target.name === "price") {
      let obj = {
        ...editedProduct,
        [e.target.name]: Number(e.target.value),
      };
      setEditedProduct(obj);
    } else {
      let obj = {
        ...editedProduct,
        [e.target.name]: e.target.value,
      };
      setEditedProduct(obj);
    }
  };
  const { id } = useParams();

  useEffect(() => {
    getProductDetails(id);
  }, []);

  useEffect(() => {
    setEditedProduct(productDetails);
  }, [productDetails]);


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
          value={editedProduct.name || ""}
          name="name"
          label="name"
          sx={{ marginBottom: "1rem" }}
        />
        <TextField
          onChange={handleValues}
          fullWidth
          value={editedProduct.desc || ""}
          name="desc"
          label="description"
          sx={{ marginBottom: "1rem" }}
        />
        <TextField
          onChange={handleValues}
          fullWidth
          value={editedProduct.price || ""}
          name="price"
          label="price"
          sx={{ marginBottom: "1rem" }}
        />
        <TextField
          onChange={handleValues}
          fullWidth
          value={editedProduct.img || ""}
          name="img"
          label="img URL"
          sx={{ marginBottom: "1rem" }}
        />
        <Button
          onClick={() => {
            saveEdit(id, editedProduct);
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
