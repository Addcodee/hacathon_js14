import { Box } from "@mui/system";
import React, { useEffect } from "react";
import BlogCard from "../../components/blogs/BlogCard";
import { useBlog } from "../../context/BlogContextProvider";
import "./blog.css";

const Blog = () => {
  const { getBlogs, blogs } = useBlog();

  useEffect(() => {
    getBlogs();
  }, []);

  const lastBlogs = blogs.slice(-3);
  return (
    <Box className="blog" id="blog">
      {lastBlogs.map((obj) => (
        <BlogCard key={obj.id} blog={obj} />
      ))}
    </Box>
  );
};

export default Blog;
