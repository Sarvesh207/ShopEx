import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import ProductCard from "../Body/Right/ProductCard/ProductCard";
const CategoryConainer = () => {
  const [searchParms] = useSearchParams();
  const searchQuery = searchParms.get("fetch_query");
  const [categoryList, setCategoryList] = useState([]);

  const getCategoryList = async () => {
    try {
      const res = await fetch(
        `https://dummyjson.com/products/category/${searchQuery}`
      );
      const json = await res.json();
      console.log(json?.products);
      setCategoryList(json?.products);
    } catch (error) {
      console.error("Error fetching category list:", error);
    }
  };

  useEffect(() => {
    getCategoryList();
  }, [searchQuery]);
  return (
    <div className="conatiner">
      {categoryList &&
        categoryList.map((product) => {
          return <ProductCard key={product.id} productInfo={product} />;
        })}
    </div>
  );
};

export default CategoryConainer;
