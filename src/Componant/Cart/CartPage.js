

import React, { useState } from 'react';
import './CartPage.css'; 

const CartPage = () => {
 
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 19.99, quantity: 2 },
    { id: 2, name: 'Product 2', price: 29.99, quantity: 1 },
  ]);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="cart-page">
      <h1>Your Shopping Cart</h1>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <span>{item.name}</span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
            <span>Quantity: {item.quantity}</span>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <p>Total: ${calculateTotal()}</p>
        <button type='submit'>Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;
