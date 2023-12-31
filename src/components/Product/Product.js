import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";
import Rating from "react-rating";

const Product = ({ product, handleAddToCart }) => {
  const { name, photo, seller, price, ratings, ratingsCount, stock } = product;

  return (
    <div className="product">
      <img src={photo.full} alt=""></img>
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p style={{ color: "red", fontWeight: "bold" }}>Price: ${price}</p>
      </div>
      <button onClick={() => handleAddToCart(product)} className="btn-cart">
        <p className="btn-text">Add to Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
