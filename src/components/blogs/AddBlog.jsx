import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useBlog } from "../../context/BlogContextProvider";

const AddBlog = () => {
  const { addBlog } = useBlog();
  const [blog, setBlog] = useState({
    name: "",
    desc: "",
    theme: "",
    img: "",
  });

  function clearInputs() {
    setBlog({ name: "", desc: "", theme: "", img: "" });
  }
  const handleValues = (e) => {
    let obj = {
      ...blog,
      [e.target.name]: e.target.value,
    };
    setBlog(obj);
  };
  return (
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
      <TextField
        onChange={handleValues}
        fullWidth
        value={blog.name}
        name="name"
        label="name"
        sx={{ marginBottom: "1rem" }}
      />
      <TextField
        onChange={handleValues}
        fullWidth
        value={blog.desc}
        name="desc"
        label="description"
        sx={{ marginBottom: "1rem" }}
      />

      <TextField
        onChange={handleValues}
        fullWidth
        value={blog.theme}
        name="theme"
        label="theme"
        sx={{ marginBottom: "1rem" }}
      />
      <TextField
        onChange={handleValues}
        fullWidth
        value={blog.img}
        name="img"
        label="img URL"
        sx={{ marginBottom: "1rem" }}
      />
      <Button
        onClick={() => {
          addBlog(blog);
          clearInputs();
        }}
      >
        Create Blog
      </Button>
    </Box>
  );
};

export default AddBlog;
