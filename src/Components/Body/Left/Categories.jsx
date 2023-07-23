import React from "react";
import "./Categories.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categoryList, setCategoryList] = useState([]);

  const getCategoryList = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products/categories");
      const json = await res.json();

      setCategoryList(json);
    } catch (err) {
      console.log("failed to get category list");
    }
  };
  useEffect(() => {
    getCategoryList();
  }, []);
  return (
    <div className="categories">
      <p>Categories</p>
      <ul>
        {categoryList &&
          categoryList.map((category) => {
            return (
              <Link key={category} to={`category?fetch_query=${category}`}>
                <li className="category" >
                  {category}
                </li>
              </Link>
            );
          })}
      </ul>
    </div>
  );
};

export default Categories;
