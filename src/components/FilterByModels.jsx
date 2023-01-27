import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useProducts } from "../context/ProductsContextProvider";

export default function FilterByModels() {
  const { filterByParams } = useProducts();

  return (
    <Box className="selectInput">
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Models</InputLabel>
        <Select
          defaultValue="all"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Models"
          onChange={(e) => {
            filterByParams("model", e.target.value);
            console.log(e.target.value);
          }}
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="BMW">BMW</MenuItem>
          <MenuItem value="Mercedes">Mercedes</MenuItem>
          <MenuItem value="Toyota">Toyota</MenuItem>
          <MenuItem value="Audi">Audi</MenuItem>
          <MenuItem value="Tesla">Tesla</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
