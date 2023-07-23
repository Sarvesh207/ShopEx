import React from "react";
import Left from "./Left/Categories";
import ProductContainer from "./Right/ProductsContainer";
import "./Body.css";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="body_container">
        <Left/>
        <Outlet/>
      
    </div>
  );
};

export default Body;
