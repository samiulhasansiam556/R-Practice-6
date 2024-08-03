import React from 'react';
import './App.css';

function Product({ data }) {
  const { title, images } = data;

  return (
    <div className="product">
      <div className="product-content">
        <img src={images[0]} alt={title} className="product-image" />
        <h2>{title}</h2>
      </div>
    </div>
  );
}

export default Product;
