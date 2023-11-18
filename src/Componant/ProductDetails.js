import React from 'react';

const ProductDetails = ({ name, imageUrl }) => {
  return (
    <div>
      <img src={imageUrl} alt={name} />
      <h2>{name}</h2>
    </div>
  );
}

export default ProductDetails;
