import React, { useEffect } from "react";
import { useProducts } from "../../context/ProductsContextProvider";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { getModels, models } = useProducts();

  useEffect(() => {
    getModels();
  }, []);

  return (
    <div>
      {models.map((model) => (
        <ProductCard key={model.id} obj={model} />
      ))}
    </div>
  );
};

export default ProductList;
