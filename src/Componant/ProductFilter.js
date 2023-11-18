import React from 'react'
import { useState } from 'react';
import "./ProductFilter.css"
const ProductFilter = () => {
 
  const [selectedBrand, setSelectedBrand] = useState('brand1');
  const [selectedVariant, setSelectedVariant] = useState('variant1');
  const [selectedPrice, setSelectedPrice] = useState('price1');

  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
  };

  const handleVariantChange = (event) => {
    setSelectedVariant(event.target.value);
  };

  const handlePriceChange = (event) => {
    setSelectedPrice(event.target.value);
  };

  return (
    <div className="product-filter">
      <h1>Select Your Brand, Variant, and Price</h1>

      <label htmlFor="brand" className="select-label">Choose a Brand:</label>
      <select
        id="brand"
        name="brand"
        value={selectedBrand}
        onChange={handleBrandChange}
        className="select-element"
      >
        <option value="brand1">Brand 1</option>
        <option value="brand2">Brand 2</option>
        <option value="brand3">Brand 3</option>
        <option value="brand1">Brand 4</option>
        <option value="brand2">Brand 5</option>
        <option value="brand3">Brand 6</option>
        <option value="brand1">Brand 7</option>
        <option value="brand2">Brand 8</option>
        <option value="brand3">Brand 9</option>
        {/* Add more brand options as needed */}
      </select>
      <br/>
      <br/>
      <label htmlFor="variant" className="select-label">Choose a Variant:</label>
      <select
        id="variant"
        name="variant"
        value={selectedVariant}
        onChange={handleVariantChange}
        className="select-element"
      >
        <option value="variant1">Variant 1</option>
        <option value="variant2">Variant 2</option>
        <option value="variant3">Variant 3</option>
        <option value="variant1">Variant 4</option>
        <option value="variant2">Variant 5</option>
        <option value="variant3">Variant 6</option>
        <option value="variant1">Variant 7</option>
        <option value="variant2">Variant 8</option>
        <option value="variant3">Variant 9</option>
        {/* Add more variant options as needed */}
      </select>
      <br/>
      <br/>
      <label htmlFor="price" className="select-label">Choose a Price:</label>
      <select
        id="price"
        name="price"
        value={selectedPrice}
        onChange={handlePriceChange}
        className="select-element"
      >
        <option value="price1">Price 1</option>
        <option value="price2">Price 2</option>
        <option value="price3">Price 3</option>
        <option value="price1">Price 4</option>
        <option value="price2">Price 5</option>
        <option value="price3">Price 6</option>
        <option value="price1">Price 7</option>
        <option value="price2">Price 8</option>
        <option value="price3">Price 9</option>
        {/* Add more price options as needed */}
      </select>

      <br />
      <p className="selected-info">Selected Brand: {selectedBrand}</p>
      <p className="selected-info">Selected Variant: {selectedVariant}</p>
      <p className="selected-info">Selected Price: {selectedPrice}</p>
    </div>
  );
  }

export default ProductFilter