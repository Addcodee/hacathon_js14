import { Box, Grid, Pagination, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useProducts } from "../../context/ProductsContextProvider";
import ProductCard from "./ProductCard";
import SelectInput from "../SelectInput";
import SearchInput from "../SearchInput";
import "./productList.css";
import { useSearchParams } from "react-router-dom";

const ProductList = () => {
  const { getProducts, products } = useProducts();

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    getProducts();
    setPage(1);
  }, [searchParams]);

  //? pagination

  const [page, setPage] = useState(1);

  const itemsPerPage = 3;

  const count = Math.ceil(products.length / itemsPerPage);

  const handleChange = (e, p) => {
    setPage(p);
  };

  const currentData = () => {
    const begin = (page - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return products.slice(begin, end);
  };

  //? search

  const [search, setSearch] = useState(searchParams.get("q") || "");

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  return (
    <div className="productList" style={{ marginTop: "3em" }}>
      <Grid className="productList__navigation">
        <Paper
          className="productList__navigation-container"
          sx={{
            p: 5,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <SearchInput search={search} setSearch={setSearch} />
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
      <Box className="productList__cards">
        {currentData()?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Box>
      <Pagination
        sx={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "1em",
        }}
        count={count}
        page={page}
        onChange={handleChange}
      />
    </div>
  );
};

export default ProductList;
