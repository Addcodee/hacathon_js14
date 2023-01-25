import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function SearchInput() {
  return (
    <Box
      className="searchInput"
      component="form"
      sx={{
        m: 1,
        width: "25ch",
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        fullWidth
        id="standard-basic"
        label="Standard"
        variant="standard"
      />
    </Box>
  );
}
