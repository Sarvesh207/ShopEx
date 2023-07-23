import React, { useEffect, useState } from "react";
import "./ProductsContainer.css";
import ProductCard from "./ProductCard/ProductCard";

const ProductsContainer = () => {
  const [productsList, setProductsList] = useState([]);
  const [page, setPage] = useState(0);

  const getProducts = async () => {
    try {
      const res = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${page}`
      );
      const json = await res.json();

      setProductsList((prev) => [...prev, ...json?.products]);
    } catch (err) {
      console.log("faild to get productlist");
    }
  };
  useEffect(() => {
    getProducts();
  }, [page]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setPage((prev) => prev + 20);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="conatiner">
      {productsList &&
        productsList.map((product) => {
          return <ProductCard key={product.id} productInfo={product} />;
        })}
    </div>
  );
};

export default ProductsContainer;
