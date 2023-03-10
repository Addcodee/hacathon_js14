import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./products/productList.css";

export default function SearchInput({ search, setSearch }) {
  return (
    <Box
      className="searchInput"
      component="form"
      noValidate
      autoComplete="off"
    >
      <TextField
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        fullWidth
        id="standard-basic"
        label="Standard"
        variant="standard"
      />
    </Box>
  );
}
