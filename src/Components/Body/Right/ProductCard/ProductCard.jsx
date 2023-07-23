import React from "react";
import "./ProductCard.css";
import { BsCurrencyRupee, BsFillStarFill } from "react-icons/bs";

const ProductCard = ({ productInfo }) => {
  return (
    <div className="card">
      <div className="imgContainer">
        <img className="img" src={productInfo?.thumbnail} alt="Product_Image" />
      </div>

      <div className="product-info">
        <h3 className="product_title">{productInfo?.title}</h3>
        <p className="price">
          <BsCurrencyRupee /> <span>{productInfo?.price}</span>
        </p>
        <p className="product_rating">
          {productInfo?.rating}{" "}
          <span>
            <BsFillStarFill className="icon_star" />
          </span>
        </p>
      </div>
      <button className="add_to_cart" onClick={() => console.log('added to cart')}>ADD TO CART</button>
    </div>
  );
};

export default ProductCard;
