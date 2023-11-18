import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ name, description, price, imageUrl }) => {
  return (
    <div className="products" style={{ margin: "20px" }}>
      <div className="product">
        
        <Link to={`/Productdetails`}>
          <img src={imageUrl} alt={name} />
        <h2>{name}</h2>
        </Link>
      </div>
    </div>
  );
}

export default Product;
