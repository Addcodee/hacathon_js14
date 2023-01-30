import React from "react";
import AddBlog from "../../components/blogs/AddBlog";
import AddProduct from "../../components/products/AddProduct";

const AdminPage = () => {

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <AddProduct />
      <AddBlog />
    </div>
  );
};

export default AdminPage;
