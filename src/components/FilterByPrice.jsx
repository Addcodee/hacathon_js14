import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useProducts } from "../context/ProductsContextProvider";

export default function FilterByPrice() {
  const { filterByParams } = useProducts();
  return (
    <Box className="selectInput">
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Price</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          defaultValue={"all"}
          label="Price"
          onChange={(e) => {
            filterByParams("price_lte", e.target.value);
          }}
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="60000">Less then 60.000$</MenuItem>
          <MenuItem value="70000">Less then 70.000$</MenuItem>
          <MenuItem value="80000">Less then 80.000$</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
