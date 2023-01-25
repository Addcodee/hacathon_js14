import { Box, Grid, Paper } from "@mui/material";
import React, { useEffect } from "react";
import { useProducts } from "../../context/ProductsContextProvider";
import ProductCard from "./ProductCard";
import SelectInput from "../SelectInput";
import SearchInput from "../SearchInput";
import "./productList.css";

const ProductList = () => {
  const { getProducts, products } = useProducts();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="productList" style={{marginTop: '3rem'}}>
      <Grid
        className="productList__navigation"
      >
        <Paper
          className="productList__navigation-container"
          sx={{
            p: 5,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <SearchInput />
          <Box
            className="productList__selectInputs"
            sx={{
              display: "flex",
              flexGrow: 0.1,
              justifyContent: "space-between",
            }}
          >
            <SelectInput />
            <SelectInput />
          </Box>
        </Paper>
      </Grid>
      <Box
        className="productList__cards"
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Box>
    </div>
  );
};

export default ProductList;
